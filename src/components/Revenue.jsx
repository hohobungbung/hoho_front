const numbers = [
  { value: '180만+', unit: '원 / 일', label: '성수기 일평균 매출\n(상일동 직영점 기준)' },
  { value: '30~35', unit: '%', label: '순이익률\n(재료비·운영비 제외 후)' },
  { value: '2,500', unit: '만원', label: '총 창업 비용\n(교육비 포함)' },
]

export default function Revenue() {
  return (
    <section className="revenue">
      <div className="revenue__inner">
        <p className="section-tag">Real Numbers</p>
        <h2 className="section-title">실제 매출로 말합니다</h2>
        <div className="revenue__numbers">
          {numbers.map((n) => (
            <div className="revenue__item" key={n.label}>
              <div className="revenue__value">{n.value}</div>
              <div className="revenue__unit">{n.unit}</div>
              <div className="revenue__label" style={{ whiteSpace: 'pre-line' }}>{n.label}</div>
            </div>
          ))}
        </div>
        <p className="revenue__notice">
          * 위 수치는 상일동 직영점 성수기(11월~2월) 기준이며, 입지·날씨·운영 방식에 따라 달라질 수 있습니다.
        </p>
      </div>
    </section>
  )
}
