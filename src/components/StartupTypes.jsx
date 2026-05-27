import { useState } from 'react'

const types = [
  {
    id: 'YOUNG',
    label: '청년 창업',
    title: '사회 초년생도 시작할 수 있어요',
    desc: '자본이 많지 않아도 괜찮습니다. 총 2,500만원 이내로 시작할 수 있는 가장 현실적인 창업 모델입니다. 교육 기간 동안 실전 노하우를 모두 전수해드립니다.',
    tags: ['초기 비용 낮음', '실전 교육 제공', '빠른 시작 가능'],
  },
  {
    id: 'COUPLE',
    label: '부부·커플 창업',
    title: '함께 운영하면 더 효율적입니다',
    desc: '두 명이 운영하면 매대 2개 동시 운영이 가능합니다. 한 명이 굽는 동안 한 명이 판매하면 회전율이 크게 올라가 매출이 더 높아집니다.',
    tags: ['매대 2개 운영', '역할 분담', '매출 극대화'],
  },
  {
    id: 'SHOP',
    label: '가게 부업 창업',
    title: '기존 매장에 붕어빵 라인 추가',
    desc: '이미 운영 중인 가게가 있다면 겨울 시즌 매출을 올리는 가장 좋은 방법입니다. 공간만 있으면 설치부터 교육까지 지원해드립니다.',
    tags: ['기존 매장 활용', '겨울 시즌 매출 UP', '공간 최소화'],
  },
  {
    id: 'OTHER',
    label: '기타 창업',
    title: '나만의 방식으로 시작하세요',
    desc: '축제, 마켓, 플리마켓 등 다양한 형태로 운영하는 분들도 계십니다. 어떤 형태로 시작하고 싶으신지 상담을 통해 맞춤 안내해드립니다.',
    tags: ['유연한 운영', '다양한 형태', '맞춤 상담'],
  },
]

export default function StartupTypes() {
  const [active, setActive] = useState('YOUNG')
  const current = types.find((t) => t.id === active)

  return (
    <section className="startup-types">
      <div className="startup-types__inner">
        <div className="startup-types__header">
          <p className="section-tag">Who We Welcome</p>
          <h2 className="section-title">어떤 분이 시작하시나요?</h2>
        </div>
        <div className="startup-types__tabs">
          {types.map((t) => (
            <button
              key={t.id}
              className={`startup-types__tab${active === t.id ? ' active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="startup-types__content">
          <div className="startup-types__content-img">
            {/* 이미지 에셋 수령 후 <img> 태그로 교체 */}
            이미지 준비 중
          </div>
          <div>
            <h3 className="startup-types__content-title">{current.title}</h3>
            <p className="startup-types__content-desc">{current.desc}</p>
            <div>
              {current.tags.map((tag) => (
                <span className="startup-types__tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
