const items = [
  {
    icon: '🚫',
    title: '로열티 없음',
    desc: '매출의 일정 비율을 본사에 납부하는 구조가 없습니다. 내가 번 돈은 온전히 내 것입니다.',
  },
  {
    icon: '💳',
    title: '가맹비 없음',
    desc: '계약 시 별도의 가맹비를 받지 않습니다. 교육비 200만원은 원부자재 실비로만 사용됩니다.',
  },
  {
    icon: '🙅',
    title: '운영 간섭 없음',
    desc: '영업시간, 운영 방식 모두 점주님이 결정합니다. 본사는 필요할 때만 지원합니다.',
  },
  {
    icon: '📦',
    title: '필수물류 없음',
    desc: '특정 업체를 통한 의무 구매가 없습니다. 좋은 재료를 합리적인 가격에 자유롭게 구매하세요.',
  },
]

export default function FourZero() {
  return (
    <section className="four-zero">
      <div className="four-zero__inner">
        <div className="four-zero__header">
          <p className="section-tag">Our Promise</p>
          <h2 className="section-title">호호붕붕의 4無 원칙</h2>
        </div>
        <div className="four-zero__grid">
          {items.map((item) => (
            <div className="four-zero__card" key={item.title}>
              <div className="four-zero__icon">{item.icon}</div>
              <div>
                <div className="four-zero__card-title">{item.title}</div>
                <p className="four-zero__card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
