const steps = [
  {
    num: '1',
    title: '온라인 상담 신청',
    desc: '하단 폼으로 이름과 연락처를 남겨주시면 1~2 영업일 내로 연락드립니다.',
  },
  {
    num: '2',
    title: '전화 상담 및 현장 방문',
    desc: '상일동 직영점 방문 후 실제 운영 현장을 확인하고 매출 데이터를 직접 공유해드립니다.',
  },
  {
    num: '3',
    title: '창업 교육 (3일)',
    desc: '반죽 배합부터 굽는 기술, 재료 소싱, 위생 관리까지 실전 교육을 진행합니다. 교육비 200만원은 원부자재 실비입니다.',
  },
  {
    num: '4',
    title: '장비 세팅 및 오픈',
    desc: '장비 설치, 초기 재료 준비를 지원해드립니다. 준비가 완료되면 바로 오픈할 수 있습니다.',
  },
]

export default function StartupProcess() {
  return (
    <section className="startup-process">
      <div className="startup-process__inner">
        <div className="startup-process__header">
          <p className="section-tag">How to Start</p>
          <h2 className="section-title">창업 절차</h2>
        </div>
        <div className="startup-process__steps">
          {steps.map((s) => (
            <div className="startup-process__step" key={s.num}>
              <div className="startup-process__step-num">{s.num}</div>
              <div className="startup-process__step-content">
                <div className="startup-process__step-title">{s.title}</div>
                <p className="startup-process__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
