
import { useEffect, useState } from 'react'

const types = [
  {
    id: 'YOUNG',
    label: '청년 창업',
    title: '사회 초년생도 시작할 수 있어요',
    desc: '자본이 많지 않아도 괜찮습니다. 총 2,500만원 이내로 시작할 수 있는 가장 현실적인 창업 모델입니다. 교육 기간 동안 실전 노하우를 모두 전수해드립니다.',
    tags: ['초기 비용 낮음', '실전 교육 제공', '빠른 시작 가능'],
    image: '/images/type-young.jpg',
  },

  {
    id: 'COUPLE',
    label: '부부·커플 창업',
    title: '함께 운영하면 더 효율적입니다',
    desc: '두 명이 운영하면 매대 2개 동시 운영이 가능합니다. 한 명이 굽는 동안 한 명이 판매하면 회전율이 크게 올라가 매출이 더 높아집니다.',
    tags: ['매대 2개 운영', '역할 분담', '매출 극대화'],
    image: '/images/type-couple.jpg',
  },

  {
    id: 'SHOP',
    label: '가게 부업 창업',
    title: '기존 매장에 붕어빵 라인 추가',
    desc: '이미 운영 중인 가게가 있다면 겨울 시즌 매출을 올리는 가장 좋은 방법입니다. 공간만 있으면 설치부터 교육까지 지원해드립니다.',
    tags: ['기존 매장 활용', '겨울 시즌 매출 UP', '공간 최소화'],
    image: '/images/type-shop.jpg',
  },

  {
    id: 'OTHER',
    label: '기타 창업',
    title: '나만의 방식으로 시작하세요',
    desc: '축제, 마켓, 플리마켓 등 다양한 형태로 운영하는 분들도 계십니다. 어떤 형태로 시작하고 싶으신지 상담을 통해 맞춤 안내해드립니다.',
    tags: ['유연한 운영', '다양한 형태', '맞춤 상담'],
    image: '/images/type-other.jpg',
  },
]

export default function StartupTypes() {

  const [active, setActive] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const section = document.querySelector('.startup-types')

      if (!section) return

      const rect = section.getBoundingClientRect()

      const scrollHeight =
        section.offsetHeight - window.innerHeight

      const progress =
        Math.min(
          Math.max(-rect.top / scrollHeight, 0),
          1
        )

      const index =
        Math.min(
          types.length - 1,
          Math.floor(progress * types.length)
        )

      setActive(index)
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)

  }, [])

  const current = types[active]

  const handleTabClick = (index) => {

    const section =
      document.querySelector('.startup-types')

    if (!section) return

    const scrollPerSection =
      (section.offsetHeight - window.innerHeight)
      / types.length

    const target =
      section.offsetTop +
      scrollPerSection * index

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    })
  }

  return (

    <section
      className="startup-types"
      style={{
        height: `${types.length * 100}vh`
      }}
    >

      <div className="startup-types__sticky">

        <div className="startup-types__inner">

          {/* Header */}
          <div className="startup-types__header">

            <p className="section-tag">
              Who We Welcome
            </p>

            <h2 className="section-title">
              어떤 분이 시작하시나요?
            </h2>

          </div>

          {/* Tabs */}
          <div className="startup-types__tabs">

            {types.map((t, index) => (

              <button
                key={t.id}
                className={`startup-types__tab ${
                  active === index ? 'active' : ''
                }`}
                onClick={() => handleTabClick(index)}
              >
                {t.label}
              </button>

            ))}

          </div>

          {/* Content */}
          <div className="startup-types__content">

            {/* Image */}
            <div className="startup-types__content-img">

              <img
                src={current.image}
                alt={current.title}
              />

            </div>

            {/* Text */}
            <div className="startup-types__content-text">

              <span className="startup-types__badge">
                {current.label}
              </span>

              <h3 className="startup-types__content-title">
                {current.title}
              </h3>

              <p className="startup-types__content-desc">
                {current.desc}
              </p>

              <div className="startup-types__tags">

                {current.tags.map((tag) => (

                  <span
                    className="startup-types__tag"
                    key={tag}
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
