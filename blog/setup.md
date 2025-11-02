# 환경 설정 가이드

## 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

\`\`\`env

# MongoDB 연결 URL (본인의 MongoDB URI로 교체하세요)

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

# 개발 환경

NODE_ENV=development
\`\`\`

> **참고**: `.env.example` 파일을 복사하여 `.env.local`로 만들고 실제 값으로 교체하세요.
>
> \`\`\`bash
> cp .env.example .env.local
> \`\`\`

## 설치 및 실행

1. 의존성 설치:
   \`\`\`bash
   pnpm install
   \`\`\`

2. 개발 서버 실행:
   \`\`\`bash
   pnpm dev
   \`\`\`

3. 브라우저에서 확인:
   http://localhost:3000

## MongoDB 데이터베이스 구조

데이터베이스 이름: `blog`
컬렉션 이름: `posts`

포스트 문서 구조:
\`\`\`json
{
"\_id": ObjectId,
"title": "string",
"content": "string",
"author": "string",
"tags": ["string"],
"createdAt": Date,
"updatedAt": Date
}
\`\`\`
