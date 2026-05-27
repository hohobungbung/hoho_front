const stats = [
  { number: '180만+', label: '성수기 일평균 매출' },
  { number: '30~35%', label: '순이익률' },
  { number: '2,500만', label: '총 창업 비용' },
  { number: '4無', label: '로열티·가맹비·간섭·물류' },
]

export default function StatStrip() {
  return (
    <section className="stat-strip">
      <div className="stat-strip__inner">
        {stats.map((s) => (
          <div className="stat-strip__item" key={s.label}>
            <div className="stat-strip__number">{s.number}</div>
            <div className="stat-strip__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
