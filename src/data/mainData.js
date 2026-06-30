import { TITLE_IMGS, IMAGES } from '../config/images'

export const HERO_SLIDES = [
  { src: IMAGES.hero[0], title:['따뜻한 겨울,','행복한 한 입!'], sub:'바삭하고 달콤한 호호붕붕과 함께!', sub2:'전국 가맹점 모집 중' },
  { src: IMAGES.hero[1], title:['달콤한 행복,','나만을 위한 특별한 한 입'], sub:'매일 만나는 작은 사치', sub2:'호호붕붕과 함께!' },
  { src: IMAGES.hero[2], title:['은퇴 후에도','든든한 평생 직장'], sub:'누구나 시작할 수 있는 창업', sub2:'호호붕붕이 함께합니다' },
]

export const MARQUEE_ITEMS = [
  { num:'로열티 제로', label:'내가 번 돈은 온전히 내 것' }, null,
  { num:'일 매출 167만+', label:'상일동 직영점 3월 일평균' }, null,
  { num:'사계절 붕어빵', label:'노점을 넘어 젊은 감성 브랜드로' }, null,
  { num:'월 순수익 1,000만~1,700만', label:'상일동 직영점 3~5월 실수익' }, null,
  { num:'운영 자유도 100%', label:'영업시간·방식 모두 점주님이 결정' }, null,
  { num:'4평부터 시작', label:'소자본으로 현실 가능한 창업' }, null,
  { num:'따뜻한 한 입', label:'호호붕붕이 만드는 작은 행복' }, null,
  { num:'6개월 회수', label:'빠른 투자금 회수 구조' }, null,
]

export const FOUR_ZERO = [
  { img:'/images/royalty.webp',       name:'로열티 없음',      desc:'매출의 일정 비율을 본사에 납부하는 구조가 없습니다. 내가 번 돈은 온전히 내 것입니다.', fromLeft:true },
  { img:'/images/FranchiseFee.webp',  name:'가맹비 없음',      desc:'계약 시 별도의 가맹비를 받지 않습니다. 교육비 200만원은 원부자재 실비로만 사용됩니다.', fromLeft:false },
  { img:'/images/Interference.webp',  name:'운영 간섭 없음',   desc:'영업시간, 운영 방식 모두 점주님이 결정합니다. 본사는 필요할 때만 지원합니다.', fromLeft:true },
  { img:'/images/Supplies.webp',      name:'필수물류 강제 없음', desc:'특정 업체를 통한 의무 구매가 없습니다. 좋은 재료를 합리적인 가격에 자유롭게 구매하세요.', fromLeft:false },
]

export const STARTUP_TYPES = [
  {
    badge:'청년 & 1인창업', emoji:'🌟',
    title:'"취업"만이 답은 아닙니다',
    brief:'중형차 한 대 비용으로 내 매장을 오픈하다.',
    detail:'스펙 경쟁, 불안한 미래, 반복되는 취업 준비. 중형차 한 대 비용으로 내 매장을 오픈하다. 호호붕붕은 청년이 현실적으로 시작할 수 있도록 설계된 브랜드입니다.',
    tags:['저비용 창업','1인 운영 가능','감성 인테리어'],
    imgSrc: IMAGES.startupType1,
  },
  {
    badge:'부부창업', emoji:'💑',
    title:'함께라서 더 효율적입니다',
    brief:'매대 2개 동시 운영으로 매출 극대화.',
    detail:'두 명이 운영하면 매대 2개 동시 운영 가능. 한 명이 굽는 동안 한 명이 판매하면 회전율이 크게 올라갑니다. 은퇴 후 든든한 평생 직장.',
    tags:['매대 2개 운영','노후 준비','매출 극대화'],
    imgSrc: IMAGES.startupType2,
  },
  {
    badge:'샵앤샵', emoji:'🏪',
    title:'기존 매장에 수익 라인 추가',
    brief:'공간만 있으면 바로 시작 가능.',
    detail:'미용실, 카페, 편의점 등 유동인구가 있는 공간이라면 충분합니다. 설치부터 교육까지 본사가 지원해드립니다.',
    tags:['기존 공간 활용','추가 수익','시즌 매출 UP'],
    imgSrc: IMAGES.startupType3,
  },
  {
    badge:'기타창업', emoji:'✨',
    title:'나만의 방식으로 시작',
    brief:'축제, 마켓, 푸드트럭 등 다양하게.',
    detail:'축제, 마켓, 푸드트럭 등 다양한 형태로 운영 가능. 어떤 형태로 시작하고 싶으신지 상담을 통해 맞춤 안내해드립니다.',
    tags:['유연한 운영','푸드트럭 가능','맞춤 상담'],
    imgSrc: IMAGES.startupType4,
  },
]

export const PARTICLES = [
  { e:'🐟', img: TITLE_IMGS.particle1, s:'8%',  t:'15%', a:'floatA', d:'0s',    sz:140 },
  { e:'🐡', img: TITLE_IMGS.particle2, s:'78%', t:'10%', a:'floatB', d:'1.2s',  sz:110 },
  { e:'✦',  img: TITLE_IMGS.particle3, s:'4%',  t:'58%', a:'floatC', d:'0.6s',  sz:90  },
  { e:'🐟', img: TITLE_IMGS.particle4, s:'86%', t:'52%', a:'floatA', d:'2s',    sz:120 },
  { e:'✦',  img: TITLE_IMGS.particle5, s:'48%', t:'6%',  a:'floatB', d:'1.8s',  sz:70  },
  { e:'🐡', img: TITLE_IMGS.particle6, s:'28%', t:'76%', a:'floatC', d:'0.4s',  sz:100 },
  { e:'🐟', img: TITLE_IMGS.particle7, s:'66%', t:'74%', a:'floatA', d:'2.5s',  sz:90  },
  { e:'✦',  img: TITLE_IMGS.particle8, s:'16%', t:'40%', a:'floatB', d:'1s',    sz:80  },
]

export const DONUT_DATA = [
  { label:'반죽',        percent:20,    color:'#10B981', display:'20%'    },
  { label:'부재료',      percent:8,     color:'#F59E0B', display:'8%'     },
  { label:'세금·경비',   percent:12,    color:'#A78BFA', display:'12%'    },
  { label:'인건비·관리', percent:20.76, color:'#60A5FA', display:'20.8%'  },
  { label:'순이익',      percent:39.24, color:'#D4537E', display:'39.2%'  },
]

export const REVENUE_ROWS = [
  { label:'매출',       amount:'43,340,500원',  ratio:'100%'   },
  { label:'반죽',       amount:'8,668,100원',   ratio:'20%'    },
  { label:'부재료',     amount:'3,467,240원',   ratio:'8%'     },
  { label:'세금·경비',  amount:'5,200,860원',   ratio:'12%'    },
  { label:'인건비',     amount:'6,000,000원',   ratio:'고정'    },
  { label:'월세·관리',  amount:'3,000,000원',   ratio:'고정'    },
  { label:'지출계',     amount:'26,336,200원',  ratio:'-'      },
  { label:'순이익',     amount:'17,004,300원',  ratio:'39.2%', profit:true },
]

export const REVENUE_TICKER_ITEMS = [
  '투명하고 정직하게 보여드리겠습니다',
  '투자비대비 6개월안에 회수가능',
  '시원하게 대답해 드립니다!',
  '지금은 수익률까지 따져야 할 때!',
]

export const MENUS_FAN = [
  { emoji:'🐟', name:'팥 붕어빵',     sub:'Red Bean',     price:'900원',   src:null },
  { emoji:'🍮', name:'슈크림 붕어빵',  sub:'Custard',      price:'900원',   src:null },
  { emoji:'🍠', name:'고구마 붕어빵',  sub:'Sweet Potato', price:'1,500원', src:null },
  { emoji:'🥜', name:'통 땅콩 붕어빵', sub:'Whole Peanut', price:'-',       src:null, badge:'NEW' },
  { emoji:'🧀', name:'치즈 붕어빵',    sub:'Mozzarella',   price:'-',       src:null, badge:'NEW' },
  { emoji:'🐡', name:'미니 붕어빵',    sub:'Mini',         price:'-',       src:null, badge:'NEW' },
  { emoji:'🪙', name:'십원빵',         sub:'10원빵',        price:'-',       src:null, badge:'NEW' },
]
