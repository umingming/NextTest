# pnpm 설정 가이드

이 프로젝트는 pnpm을 패키지 매니저로 사용합니다.

## pnpm 설치

pnpm이 설치되어 있지 않다면 다음 명령어로 설치하세요:

```bash
npm install -g pnpm
```

또는 Homebrew 사용:

```bash
brew install pnpm
```

## 주요 명령어

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start

# 린트 검사
pnpm lint

# 코드 포맷팅 체크
pnpm format

# 코드 포맷팅 자동 수정
pnpm format:fix

# 패키지 추가
pnpm add <package-name>

# 개발 의존성 추가
pnpm add -D <package-name>

# 패키지 제거
pnpm remove <package-name>
```

## pnpm의 장점

1. **디스크 공간 효율성**: 하드 링크를 사용하여 중복 패키지 저장을 방지
2. **빠른 설치 속도**: npm/yarn보다 훨씬 빠른 설치 속도
3. **엄격한 의존성 관리**: node_modules 구조가 더 깔끔하고 예측 가능
4. **모노레포 지원**: 워크스페이스 기능이 강력함

## 주의사항

- `pnpm-lock.yaml` 파일은 git에 커밋되어야 합니다 (의존성 버전 고정)
- npm이나 yarn 대신 항상 pnpm을 사용하세요
