const costs = [
  { item: '장비 구입비', desc: '붕어빵 틀, 가스 버너, 매대 등', amount: '약 1,200만원' },
  { item: '초기 재료비', desc: '밀가루, 팥, 크림 등 1개월치', amount: '약 300만원' },
  { item: '교육비', desc: '3일 실전 교육 (원부자재 실비)', amount: '200만원' },
  { item: '기타 준비금', desc: '인허가, 예비 자금 등', amount: '약 800만원' },
]

export default function StartupCost() {
  return (
    <section className="startup-cost">
      <div className="startup-cost__inner">
        <p className="section-tag">Investment</p>
        <h2 className="section-title">창업 비용 안내</h2>
        <table className="startup-cost__table">
          <thead>
            <tr>
              <th>항목</th>
              <th>내용</th>
              <th style={{ textAlign: 'right' }}>금액</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((c) => (
              <tr key={c.item}>
                <td style={{ fontWeight: 600 }}>{c.item}</td>
                <td style={{ color: '#888' }}>{c.desc}</td>
                <td style={{ textAlign: 'right' }}>{c.amount}</td>
              </tr>
            ))}
            <tr className="total-row">
              <td colSpan={2} style={{ fontWeight: 700 }}>총 창업 비용</td>
              <td style={{ textAlign: 'right' }}>약 2,500만원</td>
            </tr>
          </tbody>
        </table>
        <p className="startup-cost__notice">
          * 위 금액은 예상 비용이며, 입지 조건 및 장비 선택에 따라 달라질 수 있습니다.<br />
          * 로열티, 가맹비, 의무 물류비는 없습니다.
        </p>
      </div>
    </section>
  )
}
