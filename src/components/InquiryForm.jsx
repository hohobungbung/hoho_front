import { useState } from 'react'

const API_URL = 'http://localhost:8080/api/inquiries'
const initial = { name:'', phone:'', startupType:'', region:'', message:'', privacyConsent:false }

/* 지그재그 입구 */
function BagZigzag({ fillColor }) {
  const W=1000, H=32, peaks=30
  const pw = W/peaks
  let d = `M 0 ${H}`
  for (let i=0; i<=peaks; i++) d += ` L ${i*pw} ${i%2===0?0:H}`
  d += ` L ${W} ${H} Z`
  return (
    <svg width="100%" height={H} viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none"
      style={{ display:'block', marginBottom:-1 }}>
      <path d={d} fill={fillColor} />
    </svg>
  )
}

function PrivacyModal({ onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e=>e.stopPropagation()}>
        <h3 className="modal-title">개인정보 수집·이용 동의</h3>
        <div className="modal-body">
          <h4>수집 목적</h4><p>가맹 상담 신청 처리 및 안내 연락</p>
          <h4>수집 항목</h4><p>이름, 연락처, 창업 유형, 관심 지역, 문의 내용</p>
          <h4>보유 및 이용기간</h4><p>상담 완료 후 6개월</p>
          <h4>제3자 제공</h4><p>수집된 개인정보는 가맹 상담 목적 외 제3자에게 제공되지 않습니다.</p>
          <h4>동의 거부 권리</h4><p>동의를 거부하실 수 있으나, 거부 시 상담 신청이 제한될 수 있습니다.</p>
        </div>
        <button className="modal-close" onClick={onClose}>확인했습니다</button>
      </div>
    </div>
  )
}

export default function InquiryForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = '이름을 입력해주세요'
    if (!form.phone.trim()) e.phone = '연락처를 입력해주세요'
    else if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(form.phone)) e.phone = '올바른 전화번호 형식 (예: 010-1234-5678)'
    if (!form.privacyConsent) e.privacyConsent = '개인정보 수집에 동의해주세요'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(p => ({ ...p, [name]: type==='checkbox' ? checked : value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]:'' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name:form.name, phone:form.phone, startupType:form.startupType||null, region:form.region||null, message:form.message||null, privacyConsent:form.privacyConsent }),
      })
      if (!res.ok) { const d = await res.json(); if (d&&typeof d==='object') setErrors(d); else alert('오류가 발생했습니다.'); return }
      setSuccess(true); setForm(initial)
    } catch { alert('서버에 연결할 수 없습니다.') }
    finally { setLoading(false) }
  }

  if (success) return (
    <section className="inquiry" id="inquiry">
      <div className="envelope-outer">
        <BagZigzag fillColor="#c9874a" />
        <div className="envelope-body" style={{ padding:60, textAlign:'center' }}>
          <div style={{ fontSize:52, marginBottom:16 }}>🎉</div>
          <h3 style={{ fontFamily:'var(--font-korean)', fontSize:22, fontWeight:700, color:'var(--burgundy)', marginBottom:8 }}>상담 신청이 완료되었습니다!</h3>
          <p style={{ fontSize:14, color:'#8a6a50', lineHeight:1.8 }}>1~2 영업일 내로 담당자가 연락드릴 예정입니다 😊</p>
        </div>
        <div className="envelope-bottom" />
      </div>
    </section>
  )

  return (
    <>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
      <section className="inquiry" id="inquiry">
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <p className="section-tag">Contact Us</p>
        </div>

        {/* 봉투 전체 */}
        <div className="envelope-outer">
          {/* 지그재그 입구 — 카드 전체 너비 */}
          <BagZigzag fillColor="#c9874a" />

          {/* 좌우 본문 */}
          <div className="envelope-body">
            {/* 왼쪽: 브랜딩 (짙은 크라프트) */}
            <div className="envelope-left">
              <p className="envelope-left__tag">HOHO BUNGBUNG</p>
              <h2 className="envelope-left__title">
                호호붕붕과<br />함께하세요
              </h2>
              <p className="envelope-left__sub">
                남겨주신 연락처로<br />
                1~2 영업일 내 담당자가<br />
                연락드립니다.
              </p>
              <p className="envelope-left__phone">📞 010.5518.3807</p>
              {/* 🖼 빵 에셋 교체:
                  <img src="/images/bread-popup.png" className="envelope-left__bread" alt="" />
                  받으면 아래 플레이스홀더 교체 */}
              <div className="envelope-left__bread-placeholder">
                <span>🐟</span><span>🪙</span>
              </div>
            </div>

            {/* 오른쪽: 폼 (연한 크라프트/흰색) */}
            <div className="envelope-right">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">이름 <span>*</span></label>
                    <input className={`form-input${errors.name?' error':''}`} type="text" name="name" value={form.name} onChange={handleChange} placeholder="홍길동" />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label className="form-label">연락처 <span>*</span></label>
                    <input className={`form-input${errors.phone?' error':''}`} type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="010-1234-5678" />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">창업 유형</label>
                    <select className="form-select" name="startupType" value={form.startupType} onChange={handleChange}>
                      <option value="">선택 (선택사항)</option>
                      <option value="YOUNG">청년 & 1인창업</option>
                      <option value="COUPLE">부부창업</option>
                      <option value="SHOP">샵앤샵</option>
                      <option value="OTHER">기타</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">관심 지역</label>
                    <input className="form-input" type="text" name="region" value={form.region} onChange={handleChange} placeholder="예: 서울 강동구 (선택)" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">문의 내용</label>
                  <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange}
                    placeholder="궁금하신 점을 자유롭게 적어주세요 (선택)" style={{ resize:'none' }} />
                </div>
                <div className="form-group">
                  <div className="form-privacy">
                    <label className="form-checkbox">
                      <input type="checkbox" name="privacyConsent" checked={form.privacyConsent} onChange={handleChange} />
                      <span className="form-checkbox-label"><strong>개인정보 수집·이용에 동의합니다</strong> (필수)</span>
                    </label>
                    <button type="button" className="form-detail-btn" onClick={() => setShowPrivacy(true)}>자세히</button>
                  </div>
                  {errors.privacyConsent && <span className="form-error">{errors.privacyConsent}</span>}
                </div>
                <button type="submit" className="form-submit" disabled={loading}>
                  {loading ? '신청 중...' : '무료 상담 신청하기'}
                </button>
              </form>
            </div>
          </div>

          {/* 봉투 바닥 마감 */}
          <div className="envelope-bottom" />
        </div>
      </section>
    </>
  )
}
