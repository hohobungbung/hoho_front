// =====================================================
// 📌 호호붕붕 이미지 에셋 관리 파일
// 에셋 수령 후 /public/images/ 폴더에 넣고 여기서 경로만 바꾸세요
//
// null   → 기본 이모지/텍스트 그대로 표시
// 경로   → 해당 이미지로 교체
// =====================================================

// ─────────────────────────────────────────────────────
// 섹션 타이틀 이미지 (AI 폰트 이미지 교체 포인트)
// ─────────────────────────────────────────────────────
export const TITLE_IMGS = {

  // ── 히어로 슬라이드 제목 ──────────────────────────
  heroTitle1: null,   // '/images/font/hero-title-1.svg'  — "따뜻한 겨울, 행복한 한 입!"
  heroTitle2: null,   // '/images/font/hero-title-2.svg'  — "달콤한 행복, 나만을 위한 특별한 한 입"
  heroTitle3: null,   // '/images/font/hero-title-3.svg'  — "은퇴 후에도, 든든한 평생 직장"

  // ── 메인 섹션 제목 ────────────────────────────────
  brandPreviewTitle: null,  // '/images/font/brand-preview-title.svg' — "사계절 따뜻한 붕어빵,"
  fourZeroTitle:     null,  // '/images/font/fourzero.svg'             — "4無"
  revenueTitle:      null,  // '/images/font/revenue-title.svg'        — "4평에서 만들어내는 성공신화"
  menuPreviewTitle:  null,  // '/images/font/menu-preview-title.svg'   — "호호붕붕 대표 메뉴"

  // ── 브랜드 / 창업안내 페이지 제목 ────────────────
  brandPageTitle:          null,  // '/images/font/brand-page-title.svg'
  franchiseReasonsTitle:   null,  // '/images/font/franchise-reasons-title.svg'
  franchiseRevenueTitle:   null,  // '/images/font/franchise-revenue-title.svg'

  // ── Who We Welcome 파티클 이미지 ─────────────────
  // null → 기본 이모지(🐟🐡✦) 표시 / 경로 입력 → 이미지로 교체
  // 이미지 파일은 public/images/ 폴더에 넣으면 됩니다
  particle1: '/images/mini.svg',  // '/images/particle1.png'  (기본: 🐟)
  particle2: '/images/mini.svg',  // '/images/particle2.png'  (기본: 🐡)
  particle3: null,                // '/images/particle3.png'  (기본: ✦)
  particle4: '/images/mini.svg',  // '/images/particle4.png'  (기본: 🐟)
  particle5: null,                // '/images/particle5.png'  (기본: ✦)
  particle6: '/images/mini.svg',  // '/images/particle6.png'  (기본: 🐡)
  particle7: '/images/mini.svg',  // '/images/particle7.png'  (기본: 🐟)
  particle8: null,                // '/images/particle8.png'  (기본: ✦)

  // ── Contact Us 파티클 이미지 ──────────────────────
  // null → 기본 이모지(🐟🍡✦) 표시 / 경로 입력 → 이미지로 교체
  contactParticle1: '/images/mini.svg',  // '/images/cp1.png'  (기본: 🐟)
  contactParticle2: '/images/mini.svg',  // '/images/cp2.png'  (기본: 🍡)
  contactParticle3: null,  // '/images/cp3.png'  (기본: ✦)
  contactParticle4: '/images/mini.svg',  // '/images/cp4.png'  (기본: 🐡)
  contactParticle5: null,  // '/images/cp5.png'  (기본: ✦)
  contactParticle6: '/images/mini.svg',  // '/images/cp6.png'  (기본: 🐟)
  contactParticle7: '/images/mini.svg',  // '/images/cp7.png'  (기본: 🍡)
  contactParticle8: null,  // '/images/cp8.png'  (기본: ✦)
}

// ─────────────────────────────────────────────────────
// 사이트 전반 이미지 에셋
// ─────────────────────────────────────────────────────
export const IMAGES = {

  // ── 로고 ─────────────────────────────────────────
  logo:    '/main_logo.svg',  // public 루트에 위치

  // ── 플로팅 CTA (붕어빵 아이콘) ───────────────────
  taiyaki: '/images/mini.svg',  // 현재 적용 중

  // ── 히어로 슬라이더 배경 (3장) ───────────────────
  hero: [
    '/images/in_store.png',  // 현재 1번 슬라이드에 적용 중
    '/images/10won.png',  // '/images/hero-2.jpg' — 매장 전경 외부
    '/images/beverage.png',  // '/images/hero-3.jpg' — 점주가 굽는 모습
  ],

  // ── 섹션 배경 ────────────────────────────────────
  brandBg:   null,  // '/images/brand-bg.jpg'    — 브랜드스토리 배경
  inquiryBg: null,  // '/images/inquiry-bg.jpg' — 상담폼 배경
  revenueBg: '/images/in_store.png',  // '/images/revenue-bg.jpg' — The Real Numbers 섹션 배경
  revenuePanelOpacity: 0.7,          // 패널 불투명도 (0 = 완전 투명 ~ 1 = 완전 불투명)

  // ── Who We Welcome 창업유형 이미지 (4장) ─────────
  // null → 이모지 표시 / 경로 입력 → 이미지로 교체
  startupType1: '/images/oneman.png',      // 청년 & 1인창업
  startupType2: '/images/couple.png',      // 부부창업
  startupType3: '/images/shopandshop.png', // 샵앤샵
  startupType4: '/images/festival.png',    // 기타창업

  // ── 창업안내 페이지 Franchise Types 이미지 (4장) ──
  // null → 이모지 표시 / 경로 입력 → 이미지로 교체
  franchiseType1: '/images/oneman.png',  // '/images/ft-young.jpg'  — 청년 & 1인창업
  franchiseType2: '/images/couple.png',  // '/images/ft-couple.jpg' — 부부창업
  franchiseType3: '/images/shopandshop.png',  // '/images/ft-shop.jpg'   — 샵앤샵
  franchiseType4: '/images/festival.png',  // '/images/ft-other.jpg'  — 기타창업

  // ── 브랜드 컨셉 이미지 ───────────────────────────
  brandConcept: '/images/in_store.png',  // '/images/brand-concept.jpg' — 상일동 매장 실내
  inStore:      '/images/in_store.png',  // 현재 파일 존재

  // ── 상담 폼 일러스트 ─────────────────────────────
  breadCard: null,  // '/images/bread-card.png'
  craft:     '/images/craft.svg',   // 현재 파일 존재 (craft.png도 있음)
  grayLogo:  '/images/gray_logo.svg',  // 현재 파일 존재

  // ── 제조공장 슬라이더 (9장) ──────────────────────
  // null → 이모지 플레이스홀더 표시 / 경로 입력 → 이미지 표시
  factory: [
    '/images/genis_1.jpg',  // 1번
    '/images/genis_2.jpg',  // 2번
    '/images/genis_3.jpg',  // 3번
    '/images/genis_4.jpg',  // 4번
    '/images/genis_5.jpg',  // 5번 — '/images/genis_5.jpg'
    '/images/genis_6.jpg',  // 6번 — '/images/genis_6.jpg'
    '/images/genis_7.jpg',  // 7번 — '/images/genis_7.jpg'
    '/images/genis_8.jpg',  // 8번 — '/images/genis_8.jpg'
    '/images/genis_9.jpg',  // 9번 — '/images/genis_9.jpg'
  ],

  // ── 메뉴 사진 ─────────────────────────────────────
  menu: {
    bungeo: [
      { src: null, name: '팥 붕어빵',    sub: 'Red Bean',     price: '900원',   desc: '국내산 통팥 앙금. 팥소가 밀가루보다 더 많은 붕어빵. 재료를 아끼지 않는 정직함.' },
      { src: null, name: '슈크림 붕어빵', sub: 'Custard',      price: '900원',   desc: '부드럽고 달콤한 커스터드 크림. 한 입 베어물면 크림이 가득.' },
      { src: null, name: '고구마 붕어빵', sub: 'Sweet Potato', price: '1,500원', desc: '달콤한 군고구마 크림. 고소하고 자연스러운 단맛.' },
      { src: null, name: '치즈 붕어빵',   sub: 'Mozzarella',   price: '-',       desc: '모짜렐라 2장 기본. 늘어나는 치즈의 쫀득함.', badge: 'NEW' },
    ],
    mini: [
      { src: null, name: '미니 팥 붕어빵', sub: 'Mini Red Bean',    price: '-', desc: '한 입에 쏙, 귀여운 미니 사이즈.', badge: 'NEW' },
      { src: null, name: '미니 슈크림',    sub: 'Mini Custard',     price: '-', desc: '한 입에 쏙, 달콤한 미니 슈크림.', badge: 'NEW' },
      { src: null, name: '미니 고구마',    sub: 'Mini Sweet Potato', price: '-', desc: '한 입에 쏙, 달콤한 미니 고구마.', badge: 'NEW' },
    ],
    sipwon: [
      { src: null, name: '십원빵 (팥)',    sub: '10원빵 Red Bean', price: '-', desc: '팥 앙금.',   badge: 'NEW' },
      { src: null, name: '십원빵 (슈크림)', sub: '10원빵 Custard',  price: '-', desc: '슈크림.',   badge: 'NEW' },
    ],
    ttangkong: [
      { src: null, name: '통 땅콩 붕어빵', sub: 'Whole Peanut', price: '-', desc: '통 땅콩 4개 이상 보장. 고소함이 터집니다.', badge: 'NEW' },
    ],
    gyeran: [
      { src: null, name: '계란빵', sub: 'Egg Bread', price: '-', desc: '따뜻하고 부드러운 계란빵.', badge: 'NEW' },
    ],
    drink: [
      { src: null, name: '아메리카노', sub: 'Americano', price: '-', desc: '붕어빵과 함께하는 따뜻한 아메리카노.' },
      { src: null, name: '라떼',       sub: 'Latte',     price: '-', desc: '부드러운 우유가 들어간 라떼.' },
    ],
    etc: [
      { src: null, name: '준비 중', sub: 'Coming Soon', price: '-', desc: '새로운 메뉴를 준비 중입니다.' },
    ],
  },
}

// ─────────────────────────────────────────────────────
// 월별 매출 데이터
// ─────────────────────────────────────────────────────
export const MONTHLY_REVENUE = [
  {
    month: '3월', badge: '비수기 오픈', accent: '#D4537E',
    note: '상일동점 오픈 첫 달 (비수기 기준)',
    weeks: [
      { label: '1째주 (03.02~08)', days: ['휴무','100만','100만','100만','100만','100만','100만'] },
      { label: '2째주 (03.09~15)', days: ['휴무','100만','100만','100만','100만','100만','100만'] },
      { label: '3째주 (03.16~22)', days: ['휴무','100만','100만','100만','100만','100만','100만'] },
      { label: '4째주 (03.23~29)', days: ['휴무','100만','100만','100만','100만','100만','100만'] },
    ],
    total: '35,000,000원',
  },
  {
    month: '4월', badge: '봄 성수기', accent: '#BA7517',
    note: '4월 데이터 (실제 값으로 교체)',
    weeks: [
      { label: '1째주', days: ['-','-','-','-','-','-','-'] },
      { label: '2째주', days: ['-','-','-','-','-','-','-'] },
      { label: '3째주', days: ['-','-','-','-','-','-','-'] },
      { label: '4째주', days: ['-','-','-','-','-','-','-'] },
    ],
    total: '입력 예정',
  },
  {
    month: '5월', badge: '봄 성수기', accent: '#c04570',
    note: '5월 데이터 (실제 값으로 교체)',
    weeks: [
      { label: '1째주', days: ['-','-','-','-','-','-','-'] },
      { label: '2째주', days: ['-','-','-','-','-','-','-'] },
      { label: '3째주', days: ['-','-','-','-','-','-','-'] },
      { label: '4째주', days: ['-','-','-','-','-','-','-'] },
    ],
    total: '입력 예정',
  },
]
