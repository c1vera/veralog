# 바닐라 자바스크립트 프로젝트 verark
> 로스트아크 `Open API` 를 이용한 `채언님` 유저 블로그 
> 
## 프로젝트 설명
> 순수 자바스크립트만을 사용하여 구현된 프로젝트이다.
> `모던 자바스크립트 Deep Dive` 교재를 참고해 구현했다.

## 사용 기술

### 프론트엔드
- Vanilla JS

### 백엔드
- Mysql
- Node.js (Express)

## DB설계

```sql
CREATE TABLE users (
  user_key INT NOT NULL AUTO_INCREMENT,  -- 고유 유저 키
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
  posts_key INT NOT NULL AUTO_INCREMENT, -- 고유 포스트 키
  posts_content TEXT NOT NULL,
  posts_time DATETIME NOT NULL,
  posts_deleted boolean DEFAULT FALSE,
  posts_deleted_time DATETIME,  
  PRIMARY KEY (posts_key),
  FOREIGN KEY (user_key) REFERENCES users (user_key)
);
```

## 기능

- 로스트아크 오픈API를 사용한 `채언님` 유저의 각종 정보 출력
  - 능력치, 스킬, 아바타, 히스토리, 수집형 포인트, 보유 캐릭터 등
- 로스트아크 오픈API를 사용한 `채언` 길드의 각종 정보 출력
  - 길드원, 길드 평균 레벨 등
- admin(채언님)의 글쓰기 기능
  - 모든 유저(회원, 비회원)의 좋아요 누르기 기능
- 회원가입 및 로그인 기능
- 로그인 한 유저들에 한한 방명록(코멘트) 남기기