# Database

## 개요

Database는 데이터를 체계적으로 저장하고 관리하기 위한 공간이다.

MySQL에서는 Database 안에 여러 개의 Table을 만들고 데이터를 관리한다.

## 학습 목표

Database의 개념을 이해한다.
Database와 Table의 관계를 이해한다.
USE 명령어의 역할을 이해한다.

## 학습 내용

### 1. Database

Database는 데이터를 저장하고 관리하기 위한 논리적인 공간이다.

이번 실습에서는 qa_practice라는 Database를 사용한다.

### 2. Database와 Table의 관계

Database 안에는 여러 개의 Table이 존재할 수 있다.

구조는 다음과 같다.

Database
└── Table
　　├── Column
　　└── Row

이번 실습에서는 다음과 같은 구조로 구성했다.

qa_practice
└── users
　　├── id
　　├── username
　　├── password
　　├── email
　　└── created_at

### 3. Database 사용 지정

USE 명령어를 사용하면 현재 SQL 작업에서 사용할 Database를 지정할 수 있다.

USE qa_practice;

Database를 선택하지 않은 상태에서 Table을 조회하면 다음과 같은 오류가 발생할 수 있다.

Error Code: 1046. No database selected

따라서 SQL을 실행하기 전에 사용할 Database가 선택되어 있는지 확인해야 한다.

## QA 활용

QA에서는 Database의 데이터를 직접 확인하여 기능 테스트 결과를 검증할 수 있다.

예를 들어 회원가입 테스트 후 qa_practice Database의 회원 Table을 조회하여 회원 정보가 정상적으로 저장되었는지 확인할 수 있다.
