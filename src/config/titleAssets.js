/**
 * titleAssets.js
 * ──────────────────────────────────────────────────────
 * AI 폰트 이미지 교체 포인트
 *
 * 사용법:
 *   null   → 기존 CSS 텍스트 그대로 표시
 *   경로   → 해당 이미지로 교체 (+ sr-only 텍스트 자동 유지)
 *
 * 예시:
 *   heroTitle: null
 *   heroTitle: '/images/font/hero-title.svg'
 *
 * 이미지 파일은 public/images/font/ 폴더에 넣으면 됩니다.
 * ──────────────────────────────────────────────────────
 */

export const TITLE_IMGS = {

  // ─ 메인 페이지 ─────────────────────────

  /** 히어로 슬라이드 1 제목: "따뜻한 겨울, 행복한 한 입!" */
  heroTitle1: null,
  // → '/images/font/hero-title-1.svg'

  /** 히어로 슬라이드 2 제목: "달콤한 행복, 나만을 위한 특별한 한 입" */
  heroTitle2: null,
  // → '/images/font/hero-title-2.svg'

  /** 히어로 슬라이드 3 제목: "은퇴 후에도, 든든한 평생 직장" */
  heroTitle3: null,
  // → '/images/font/hero-title-3.svg'

  /** 브랜드 미리보기 제목: "사계절 따뜻한 붕어빵," */
  brandPreviewTitle: null,
  // → '/images/font/brand-preview-title.svg'

  /** 4無 타이틀 */
  fourZeroTitle: null,
  // → '/images/font/fourzero.svg'

  /** 매출 섹션 제목: "4평에서 만들어내는 성공신화" */
  revenueTitle: null,
  // → '/images/font/revenue-title.svg'

  /** 메뉴 섹션 제목: "호호붕붕 대표 메뉴" */
  menuPreviewTitle: null,
  // → '/images/font/menu-preview-title.svg'

  // ─ 브랜드 페이지 (/brand) ──────────────

  /** 브랜드 페이지 메인 제목 */
  brandPageTitle: null,
  // → '/images/font/brand-page-title.svg'

  // ─ 창업안내 페이지 (/franchise) ─────────

  /** "호호붕붕을 창업해야 하는 이유" */
  franchiseReasonsTitle: null,
  // → '/images/font/franchise-reasons-title.svg'

  /** "4평에서 만들어내는 성공신화" (창업안내 페이지) */
  franchiseRevenueTitle: null,
  // → '/images/font/franchise-revenue-title.svg'

}
