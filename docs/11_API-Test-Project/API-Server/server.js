require("dotenv").config();

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/posts", async (req, res) => { // /posts를 만든다. (http://localhost:3000/posts)
    try {
        const db = client.db("qa_api_test"); // mongoDB Database 선택
        const posts = await db.collection("posts").find().toArray();
        // db.collection("posts"): 그 DB안에 있는 posts Collection 선택
        // .find().toArray(): collection의 데이터를 조회한 결과를 배열로 변환

        res.json(posts); // postman의 response로 보내지는 데이터
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch posts"
        });
    }
});

app.get("/posts/:id", async (req, res) => { // :id: URL에서 전달받은 값이 들어가는 자리
    try {
        const db = client.db("qa_api_test");
        const post = await db.collection("posts").findOne({ // 조건에 맞는 하나만 조회
            _id: new ObjectId(req.params.id) // URL에서 받은 문자열을 MongoDB의 ObjectID로 변환
        });
        
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });  
        }

        res.json(post);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch post"
        });
    }
});

app.post("/posts", async (req, res) => {
    try {
        const db = client.db("qa_api_test");
        const result = await db.collection("posts").insertOne(req.body);
        // req.body: Postman에서 보내지는 JSON 데이터
        // .insertOne(): 실제로 MongoDB에 Document를 하나 생성한다.

        res.status(201).json({
            message: "Post created successfully",
            insertedId: result.insertedId
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create post"
        });
    }
});

app.put("/posts/:id", async (req, res) => {
    try {
        const db = client.db("qa_api_test");

        const result = await db.collection("posts").replaceOne( // 해당 document를 통째로 교체. id는 유지되도록 처리됨. replaceOne(찾을조건, 교체할데이터)
            { _id: new ObjectId(req.params.id) },
            req.body
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const updatedPost = await db.collection("posts").findOne({
            _id: new ObjectId(req.params.id)
        });

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update post"
        });
    }
});

app.patch("/posts/:id", async (req, res) => {
    try {
        const db = client.db("qa_api_test");

        const result = await db.collection("posts").updateOne( // 전달받은 필드만 수정. updateOne(찾을조건, 수정할데이터)
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
            // $set 업데이트 연산자
            // {
            //     $set: {
            //         "title": "Updated Post"
            //     }
            // }
            // title의 값을 "Updated Post"로 설정해줘
        );

        if (result.matchedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        const updatedPost = await db.collection("posts").findOne({
            _id: new ObjectId(req.params.id)
        });

        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({
            message: "Failed to update post"
        });
    }
});

app.delete("/posts/:id", async (req, res) => {
    try {
        const db = client.db("qa_api_test");

        const result = await db.collection("posts").deleteOne({ // 조건에 맞는 document 하나를 삭제하는 메서드
            _id: new ObjectId(req.params.id)
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to delete post"
        });
    }
});

const client = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
    try {
        await client.connect();

        console.log("MongoDB connected");

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

startServer();