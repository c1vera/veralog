# 바닐라 자바스크립트 프로젝트 verark
> 

## 프로젝트 설명

## 사용 기술

## 백엔드

## DB설계

```sql
CREATE TABLE users (
  user_key INT NOT NULL AUTO_INCREMENT,  -- 서버에서 생성한 고유 유저 키
  user_id VARCHAR(100) NOT NULL,
  user_email varchar(100),
  user_pw VARCHAR(100) NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  user_nickname VARCHAR(100) NOT NULL,
  user_type VARCHAR(50) NOT NULL,
  user_created_at DATETIME NOT NULL,
  PRIMARY KEY (user_key)
);

CREATE TABLE posts (
  user_key INT NOT NULL,
  posts_key INT NOT NULL AUTO_INCREMENT, -- 서버에서 생성한 고유 코멘트 키
  posts_content TEXT NOT NULL,
  posts_time DATETIME NOT NULL,
  posts_deleted boolean DEFAULT FALSE,
  posts_deleted_time DATETIME,  
  FOREIGN KEY (user_key) REFERENCES users (user_key)
);
```

## 기능