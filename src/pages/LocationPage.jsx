export default function LocationPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero__inner">
          <p className="page-hero__tag">Store Location</p>
          <h1 className="page-hero__title">매장 위치</h1>
        </div>
      </div>
      <section className="location-page section section--light">
        <div className="location-page__inner">
          <div className="location-info">
            <div>
              <h2 className="location-info__title" style={{ color:'var(--brand-pink)' }}>
                상일동점 <span style={{ fontSize:14, color:'#aaa', fontWeight:400 }}>직영 1호점</span>
              </h2>
              {[
                { label:'주소', value:'서울특별시 강동구 상일동 (상세주소 추가 예정)' },
                { label:'운영시간', value:'(운영시간 추가 예정)' },
                { label:'전화', value:'010.5518.3807' },
                { label:'주차', value:'인근 공영주차장 이용' },
              ].map(r => (
                <div className="location-info__row" key={r.label}>
                  <span className="location-info__label">{r.label}</span>
                  <span className="location-info__value">{r.value}</span>
                </div>
              ))}
              <div style={{ marginTop:32 }}>
                <a href="https://map.kakao.com/?q=서울 강동구 상일동" target="_blank" rel="noopener noreferrer"
                  style={{ display:'inline-flex', alignItems:'center', gap:8, background:'#FEE500', color:'#3C1E1E', padding:'12px 24px', borderRadius:8, fontFamily:'var(--font-korean)', fontSize:14, fontWeight:700 }}>
                  🗺 카카오맵으로 보기
                </a>
              </div>
            </div>
            <div>
              <div className="location-map">
                {/* 🗺 카카오맵 API 연동 후 iframe 교체
                    <iframe src="https://map.kakao.com/link/map/호호붕붕,위도,경도" />
                    API 키: https://developers.kakao.com */}
                <div style={{ width:'100%', height:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'var(--light-pink)', gap:12 }}>
                  <span style={{ fontSize:48 }}>🗺</span>
                  <p style={{ fontFamily:'var(--font-korean)', fontSize:14, color:'#888', textAlign:'center' }}>카카오맵 API 연동 후<br />지도가 표시됩니다</p>
                  <a href="https://map.kakao.com/?q=서울 강동구 상일동" target="_blank" rel="noopener noreferrer"
                    style={{ color:'var(--brand-pink)', fontSize:13, fontWeight:600, borderBottom:'1px solid var(--brand-pink)' }}>
                    카카오맵에서 보기 →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="location-notice">
            📍 <strong>방문 안내</strong><br />
            상담 신청 후 방문하시면 실제 매출 데이터와 운영 현장을 직접 확인하실 수 있습니다.<br />
            사전 예약 없이 방문하실 경우 운영 시간을 꼭 확인해 주세요.<br /><br />
            현재 상일동 직영 1호점 운영 중입니다. 향후 가맹점 확대에 따라 매장이 추가됩니다.
          </div>
        </div>
      </section>
    </>
  )
}
