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
  logo:    '/images/main_logo.svg',  // public 루트에 위치

  // ── 플로팅 CTA (붕어빵 아이콘) ───────────────────
  taiyaki: '/images/mini.svg',  // 현재 적용 중

  // ── 히어로 슬라이더 배경 (3장) ───────────────────
  hero: [
    '/images/in_store.webp',
    '/images/10won.webp',
    '/images/beverage.webp',
  ],

  // ── 섹션 배경 ────────────────────────────────────
  revenueBg: '/images/in_store.webp',
  revenuePanelOpacity: 0.7,          // 패널 불투명도 (0 = 완전 투명 ~ 1 = 완전 불투명)

  // ── Who We Welcome 창업유형 이미지 (4장) ─────────
  // null → 이모지 표시 / 경로 입력 → 이미지로 교체
  startupType1: '/images/oneman.webp',
  startupType2: '/images/couple.webp',
  startupType3: '/images/shopandshop.webp',
  startupType4: '/images/festival.webp',

  // ── 창업안내 페이지 Franchise Types 이미지 (4장) ──
  franchiseType1: '/images/oneman.webp',
  franchiseType2: '/images/couple.webp',
  franchiseType3: '/images/shopandshop.webp',
  franchiseType4: '/images/festival.webp',

  // ── 브랜드 컨셉 이미지 ───────────────────────────
  brandConcept: '/images/in_store.webp',
  inStore:      '/images/in_store.webp',

  // ── 상담 폼 일러스트 ─────────────────────────────
  craft:    '/images/craft.svg',
  grayLogo: '/images/gray_logo.svg',

  // ── 제조공장 슬라이더 (9장) ──────────────────────
  // null → 이모지 플레이스홀더 표시 / 경로 입력 → 이미지 표시
  factory: [
    '/images/genis_1.webp',
    '/images/genis_2.webp',
    '/images/genis_3.webp',
    '/images/genis_4.webp',
    '/images/genis_5.webp',
    '/images/genis_6.webp',
    '/images/genis_7.webp',
    '/images/genis_8.webp',
    '/images/genis_9.webp',
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
// 상일동 직영점 실제 월별 매출 요약
export const MONTHLY_REVENUE = [
  {
    month: '3월', badge: '비수기 오픈', accent: '#D4537E',
    note: '상일동점 오픈 첫 달 (비수기 기준)',
    total: '43,340,500원',
    profit: '17,004,300원',
    // 손익 구조
    breakdown: [
      { label:'매출',      amount:'43,340,500', ratio:'100%'  },
      { label:'반죽',      amount:'8,668,100',  ratio:'20%'   },
      { label:'부재료',    amount:'3,467,240',  ratio:'8%'    },
      { label:'세금·경비', amount:'5,200,860',  ratio:'12%'   },
      { label:'인건비',    amount:'6,000,000',  ratio:'고정'   },
      { label:'월세·관리', amount:'3,000,000',  ratio:'고정'   },
      { label:'지출계',    amount:'26,336,200', ratio:'-'     },
      { label:'순이익',    amount:'17,004,300', ratio:'-'     },
    ],
  },
  {
    month: '4월', badge: '봄 시즌', accent: '#20bf6b',
    note: '봄 시즌',
    total: '42,029,500원',
    profit: '16,217,700원',
    breakdown: [
      { label:'매출',      amount:'42,029,500', ratio:'100%'  },
      { label:'반죽',      amount:'8,405,900',  ratio:'20%'   },
      { label:'부재료',    amount:'3,362,360',  ratio:'8%'    },
      { label:'세금·경비', amount:'5,043,540',  ratio:'12%'   },
      { label:'인건비',    amount:'6,000,000',  ratio:'고정'   },
      { label:'월세·관리', amount:'3,000,000',  ratio:'고정'   },
      { label:'지출계',    amount:'25,811,800', ratio:'-'     },
      { label:'순이익',    amount:'16,217,700', ratio:'-'     },
    ],
  },
  {
    month: '5월', badge: '봄 시즌', accent: '#fd9644',
    note: '봄 시즌',
    total: '32,158,500원',
    profit: '10,295,100원',
    breakdown: [
      { label:'매출',      amount:'32,158,500', ratio:'100%'  },
      { label:'반죽',      amount:'6,431,700',  ratio:'20%'   },
      { label:'부재료',    amount:'2,572,680',  ratio:'8%'    },
      { label:'세금·경비', amount:'3,859,020',  ratio:'12%'   },
      { label:'인건비',    amount:'6,000,000',  ratio:'고정'   },
      { label:'월세·관리', amount:'3,000,000',  ratio:'고정'   },
      { label:'지출계',    amount:'21,863,400', ratio:'-'     },
      { label:'순이익',    amount:'10,295,100', ratio:'-'     },
    ],
  },
]
