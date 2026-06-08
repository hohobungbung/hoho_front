import { useEffect, useRef, useState } from 'react'

const KAKAO_JS_KEY = '706c1a332d3e9941572d5f35555deffe'
const STORE_LAT = 37.55666
const STORE_LNG = 127.16808
const STORE_NAME = '호호붕붕 상일동점'

export default function LocationPage() {
  const mapRef = useRef(null)
  const [mapError, setMapError] = useState(null)

  useEffect(() => {
    function renderMap() {
      if (!mapRef.current) return
      const map = new window.kakao.maps.Map(mapRef.current, {
        center: new window.kakao.maps.LatLng(STORE_LAT, STORE_LNG),
        level: 4,
      })
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(STORE_LAT, STORE_LNG),
      })
      marker.setMap(map)
      const infoWindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:8px 12px;font-size:13px;font-weight:700;color:#3C1E1E;">${STORE_NAME}</div>`,
      })
      infoWindow.open(map, marker)
    }

    // 이미 SDK가 로드된 경우 재사용
    if (window.kakao && window.kakao.maps) {
      renderMap()
      return
    }

    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JS_KEY}&autoload=false`
    script.onload = () => window.kakao.maps.load(renderMap)
    script.onerror = () => setMapError(true)
    document.head.appendChild(script)

    return () => {
      // 스크립트는 재사용을 위해 유지 (unmount 시 제거하지 않음)
    }
  }, [])

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
              <h2 className="location-info__title" style={{ color: 'var(--brand-pink)' }}>
                상일동점 <span style={{ fontSize: 14, color: '#aaa', fontWeight: 400 }}>직영 1호점</span>
              </h2>
              {[
                { label: '주소', value: '서울 강동구 고덕로 380 고덕아르테온 근린생활시설-2 1층' },
                { label: '운영시간', value: '11:00 – 22:00' },
                { label: '전화', value: '02-111-1111' },
                { label: '주차', value: '해당 상가 지하주차장 이용 시 1시간 무료' },
              ].map(r => (
                <div className="location-info__row" key={r.label}>
                  <span className="location-info__label">{r.label}</span>
                  <span className="location-info__value">{r.value}</span>
                </div>
              ))}
              <div style={{ marginTop: 32 }}>
                <a
                  href={`https://map.kakao.com/link/map/${STORE_NAME},${STORE_LAT},${STORE_LNG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FEE500', color: '#3C1E1E', padding: '12px 24px', borderRadius: 8, fontFamily: 'var(--font-korean)', fontSize: 14, fontWeight: 700 }}
                >
                  🗺 카카오맵으로 보기
                </a>
              </div>
            </div>
            <div>
              <div className="location-map">
                {mapError ? (
                  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--light-pink)', gap: 12 }}>
                    <span style={{ fontSize: 48 }}>🗺</span>
                    <p style={{ fontFamily: 'var(--font-korean)', fontSize: 14, color: '#888', textAlign: 'center' }}>
                      지도를 불러올 수 없습니다.<br />카카오맵에서 직접 확인해 주세요.
                    </p>
                    <a
                      href={`https://map.kakao.com/link/map/${STORE_NAME},${STORE_LAT},${STORE_LNG}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--brand-pink)', fontSize: 13, fontWeight: 600, borderBottom: '1px solid var(--brand-pink)' }}
                    >
                      카카오맵에서 보기 →
                    </a>
                  </div>
                ) : (
                  <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
                )}
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
