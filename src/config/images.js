// =====================================================
// 📌 호호붕붕 이미지 에셋 관리 파일
// 에셋 수령 후 /public/images/ 폴더에 넣고 여기서 경로만 바꾸세요
// =====================================================

export const IMAGES = {
  // ── 로고 ─────────────────────────────────────────
  // 일러스트레이터 파일 → SVG로 내보내서 교체
  logo: null, // '/images/logo.svg'

  // ── 플로팅 CTA (붕어빵 모양) ──────────────────────
  // Midjourney: cute taiyaki fish bread icon, minimal style, top view
  taiyaki: null, // '/images/taiyaki.png'

  // ── 히어로 슬라이더 (3장) ─────────────────────────
  // 사진작가 촬영본 or Midjourney
  hero: [
    null, // '/images/hero-1.jpg' — 붕어빵 클로즈업, 따뜻한 조명
    null, // '/images/hero-2.jpg' — 매장 전경 외부
    null, // '/images/hero-3.jpg' — 점주가 굽는 모습
  ],

  // ── 브랜드스토리 배경 ─────────────────────────────
  // Midjourney: hoho bungbung store front, owner and customers smiling, warm pink tones
  brandBg: null, // '/images/brand-bg.jpg'

  // ── 브랜드 컨셉 섹션 이미지 ──────────────────────
  brandConcept: null, // '/images/brand-concept.jpg' — 상일동 매장 실내

  // ── 제조공장 슬라이더 (4장) ──────────────────────
  // 아임웹에서 확인한 실제 공장 사진
  factory: [
    null, // '/images/factory-1.jpg' — 창고/원재료
    null, // '/images/factory-2.jpg' — 작업대/장비
    null, // '/images/factory-3.jpg' — 냉장 보관
    null, // '/images/factory-4.jpg' — 완성품/포장
  ],

  // ── 상담 폼 일러스트 ──────────────────────────────
  // Midjourney: paper bag envelope beige, taiyaki and 10won bread peeking out top, cute illustration
  breadCard: null, // '/images/bread-card.png'

  // ── 메뉴 사진 ─────────────────────────────────────
  // 사진작가 촬영본 (5/20 상일동 매장)
  menu: {
    bungeo: [
      { src: null, name: '팥 붕어빵', sub: 'Red Bean', price: '900원', desc: '국내산 통팥 앙금. 팥소가 밀가루보다 더 많은 붕어빵. 재료를 아끼지 않는 정직함.' },
      { src: null, name: '슈크림 붕어빵', sub: 'Custard', price: '900원', desc: '부드럽고 달콤한 커스터드 크림. 한 입 베어물면 크림이 가득.' },
      { src: null, name: '고구마 붕어빵', sub: 'Sweet Potato', price: '1,500원', desc: '달콤한 군고구마 크림. 고소하고 자연스러운 단맛.' },
      { src: null, name: '치즈 붕어빵', sub: 'Mozzarella', price: '-', desc: '모짜렐라 2장 기본. 늘어나는 치즈의 쫀득함.', badge: 'NEW' },
    ],
    mini: [
      { src: null, name: '미니 팥 붕어빵', sub: 'Mini Red Bean', price: '-', desc: '한 입에 쏙, 귀여운 미니 사이즈. 간식으로 선물로.', badge: 'NEW' },
      { src: null, name: '미니 슈크림', sub: 'Mini Custard', price: '-', desc: '한 입에 쏙, 달콤한 미니 슈크림.', badge: 'NEW' },
      { src: null, name: '미니 고구마', sub: 'Mini Sweet Potato', price: '-', desc: '한 입에 쏙, 달콤한 미니 고구마.', badge: 'NEW' },
    ],
    sipwon: [
      { src: null, name: '십원빵 (팥)', sub: '10원빵 Red Bean', price: '-', desc: '즐거워 호회만원 — 삼이 코즈로 빵빵. 팥 앙금.', badge: 'NEW' },
      { src: null, name: '십원빵 (슈크림)', sub: '10원빵 Custard', price: '-', desc: '즐거워 호회만원 — 삼이 코즈로 빵빵. 슈크림.', badge: 'NEW' },
    ],
    ttangkong: [
      { src: null, name: '통 땅콩 붕어빵', sub: 'Whole Peanut', price: '-', desc: '통 땅콩 4개 이상 보장. 고소함이 터집니다. 원가 절감 거부.', badge: 'NEW' },
    ],
    gyeran: [
      { src: null, name: '계란빵', sub: 'Egg Bread', price: '-', desc: '따뜻하고 부드러운 계란빵. 든든한 한 끼 간식.', badge: 'NEW' },
    ],
    drink: [
      { src: null, name: '아메리카노', sub: 'Americano', price: '-', desc: '붕어빵과 함께하는 따뜻한 아메리카노.' },
      { src: null, name: '라떼', sub: 'Latte', price: '-', desc: '부드러운 우유가 들어간 라떼.' },
    ],
    etc: [
      { src: null, name: '준비 중', sub: 'Coming Soon', price: '-', desc: '새로운 메뉴를 준비 중입니다.' },
    ],
  },
}

// 월별 매출 데이터 — 데이터 수령 후 여기를 채우세요
export const MONTHLY_REVENUE = [
  {
    month: '3월',
    badge: '비수기 오픈',
    accent: '#D4537E',
    note: '상일동점 오픈 첫 달 (비수기 기준)',
    weeks: [
      { label: '1째주 (03.02~08)', days: ['휴무', '100만', '100만', '100만', '100만', '100만', '100만'] },
      { label: '2째주 (03.09~15)', days: ['휴무', '100만', '100만', '100만', '100만', '100만', '100만'] },
      { label: '3째주 (03.16~22)', days: ['휴무', '100만', '100만', '100만', '100만', '100만', '100만'] },
      { label: '4째주 (03.23~29)', days: ['휴무', '100만', '100만', '100만', '100만', '100만', '100만'] },
    ],
    total: '35,000,000원',
  },
  {
    month: '4월',
    badge: '봄 성수기',
    accent: '#BA7517',
    note: '4월 데이터 (실제 값으로 교체)',
    weeks: [
      { label: '1째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '2째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '3째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '4째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
    ],
    total: '입력 예정',
  },
  {
    month: '5월',
    badge: '봄 성수기',
    accent: '#c04570',
    note: '5월 데이터 (실제 값으로 교체)',
    weeks: [
      { label: '1째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '2째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '3째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
      { label: '4째주', days: ['-', '-', '-', '-', '-', '-', '-'] },
    ],
    total: '입력 예정',
  },
]
