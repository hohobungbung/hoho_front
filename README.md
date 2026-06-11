# 호호붕붕 프론트엔드

호호붕붕 프랜차이즈 창업 모집 랜딩사이트 프론트엔드입니다.

## 기술 스택

| 항목 | 버전 |
|------|------|
| React | 19.2.6 |
| Vite | 8.0.12 |
| React Router DOM | 7.15.1 |
| Recharts | 3.8.1 |
| SASS/SCSS | - |

## 환경변수

`.env.development` 및 `.env.production` 파일 필요 (git 제외):

```
VITE_API_BASE_URL=http://localhost:8080         # 개발
VITE_API_BASE_URL=https://api.hohobungbung.com  # 프로덕션
```

## 배포

- **플랫폼**: Netlify
- **빌드 명령어**: `npm run build`
- **배포 디렉토리**: `dist`
- **Netlify 환경변수**: `VITE_API_BASE_URL` 설정 필요

## 로컬 실행

```bash
npm install
npm run dev
```

## 페이지 구성

| 경로 | 페이지 |
|------|--------|
| `/` | 메인 (히어로, 4무, 창업유형, 수익구조, 메뉴) |
| `/brand` | 브랜드 스토리 + 제조공장 |
| `/menu` | 전체 메뉴 소개 |
| `/location` | 매장 위치 (카카오맵) |
| `/franchise` | 창업 안내 + 상담 신청 |
