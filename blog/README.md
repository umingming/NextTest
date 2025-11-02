# 블로그 프로젝트

Next.js와 TanStack Query를 활용한 블로그 CRUD 연습 프로젝트입니다.

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **패키지 매니저**: pnpm
- **상태 관리 & 데이터 페칭**: TanStack Query v5
- **데이터베이스**: MongoDB
- **스타일링**: Tailwind CSS 4

## 주요 기능

- ✅ 포스트 목록 조회 (READ)
- ✅ 포스트 상세 조회 (READ)
- ✅ 포스트 작성 (CREATE)
- ✅ 포스트 수정 (UPDATE)
- ✅ 포스트 삭제 (DELETE)
- ✅ 태그 기능
- ✅ 실시간 데이터 업데이트 (TanStack Query)

## 프로젝트 구조

```
blog/
├── app/
│   ├── api/
│   │   └── posts/          # API 라우트
│   │       ├── route.ts    # GET, POST
│   │       └── [id]/
│   │           └── route.ts # GET, PUT, DELETE
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx       # TanStack Query Provider
│   └── globals.css
├── components/
│   ├── PostForm.tsx        # 포스트 작성/수정 폼
│   └── PostList.tsx        # 포스트 목록
├── hooks/
│   └── usePosts.ts         # TanStack Query 커스텀 훅
├── libs/
│   └── database.ts         # MongoDB 연결
├── types/
│   └── post.ts             # 타입 정의
└── package.json
```

## 시작하기

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 환경 변수 설정

`.env.example` 파일을 복사하여 `.env.local` 파일을 생성하고 실제 MongoDB 연결 문자열로 교체하세요:

```bash
cp .env.example .env.local
```

`.env.local` 내용:

```env
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/
NODE_ENV=development
```

> ⚠️ **중요**: `.env.local` 파일은 절대로 Git에 커밋하지 마세요! (이미 .gitignore에 포함되어 있습니다)

### 3. 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## API 엔드포인트

### 포스트 목록 조회

```
GET /api/posts
```

### 포스트 생성

```
POST /api/posts
Content-Type: application/json

{
  "title": "제목",
  "content": "내용",
  "author": "작성자",
  "tags": ["tag1", "tag2"]
}
```

### 포스트 상세 조회

```
GET /api/posts/:id
```

### 포스트 수정

```
PUT /api/posts/:id
Content-Type: application/json

{
  "title": "수정된 제목",
  "content": "수정된 내용"
}
```

### 포스트 삭제

```
DELETE /api/posts/:id
```

## TanStack Query 사용 예시

```typescript
import { usePosts, useCreatePost } from "@/hooks/usePosts";

function MyComponent() {
    const { data: posts, isLoading } = usePosts();
    const createPost = useCreatePost();

    const handleCreate = async () => {
        await createPost.mutateAsync({
            title: "새 포스트",
            content: "내용",
            author: "작성자",
        });
    };

    // ...
}
```

## 학습 포인트

1. **TanStack Query**
    - useQuery를 통한 데이터 페칭
    - useMutation을 통한 데이터 변경
    - QueryClient를 활용한 캐시 무효화
    - 낙관적 업데이트 (Optimistic Update)

2. **Next.js App Router**
    - API Routes (Route Handlers)
    - Client Components
    - Server Components 분리

3. **MongoDB**
    - CRUD 작업
    - 연결 관리
    - ObjectId 처리

4. **TypeScript**
    - 타입 안정성
    - Interface 정의
    - Generic 타입 활용

## 코드 포맷팅

이 프로젝트는 Prettier를 사용하여 코드 스타일을 일관되게 유지합니다.

### Prettier 설정

```json
{
    "semi": true,
    "singleQuote": false,
    "trailingComma": "all",
    "useTabs": false,
    "tabWidth": 4,
    "printWidth": 80,
    "arrowParens": "always",
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

### 명령어

```bash
# 포맷팅 체크
pnpm format

# 포맷팅 자동 수정
pnpm format:fix

# 린트 검사
pnpm lint
```

## 배포

```bash
pnpm build
pnpm start
```

## 라이선스

MIT
