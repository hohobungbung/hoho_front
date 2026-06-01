import { useState, useRef, useEffect } from 'react'

const API_URL = 'http://localhost:8080/api/inquiries'
const initial = { name:'', phone:'', startupType:'', region:'', message:'', privacyConsent:false }


function PrivacyModal({ onClose, onAgree }) {
  const bodyRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    const check = () => {
      if (el.scrollHeight - el.scrollTop - el.clientHeight < 10) setScrolled(true)
    }
    check()
    el.addEventListener('scroll', check)
    return () => el.removeEventListener('scroll', check)
  }, [])

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e=>e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">개인정보 수집·이용 동의</h3>
          <button className="modal-x" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body" ref={bodyRef}>

          <p className="modal-intro">
            호호붕붕(이하 "회사")은 「개인정보 보호법」 제15조에 따라 가맹 상담 신청 시
            아래와 같이 개인정보를 수집·이용합니다. 내용을 충분히 읽으신 후 동의 여부를 결정해 주십시오.
          </p>

          <h4>1. 개인정보 수집·이용 목적</h4>
          <p>가맹 상담 신청 접수, 상담 일정 안내 및 연락, 창업 관련 정보 제공</p>

          <h4>2. 수집하는 개인정보 항목</h4>
          <p><strong>[필수]</strong> 이름, 휴대전화번호</p>
          <p><strong>[선택]</strong> 창업 유형, 관심 지역, 문의 내용</p>
          <p className="modal-note">※ 선택 항목은 수집에 동의하지 않으셔도 상담 신청이 가능합니다.</p>

          <h4>3. 개인정보 보유 및 이용 기간</h4>
          <p>상담 완료일로부터 <strong>6개월</strong></p>
          <p className="modal-note">※ 단, 관계 법령에 따라 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관됩니다.</p>

          <h4>4. 개인정보의 파기</h4>
          <p>
            보유 기간이 경과하거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.
            전자 파일 형태의 정보는 복구·재생이 불가능한 방법으로 영구 삭제하며,
            출력물 등은 분쇄 또는 소각하여 파기합니다.
          </p>

          <h4>5. 개인정보의 제3자 제공</h4>
          <p>
            회사는 수집한 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.
            다만, 다음의 경우는 예외로 합니다.
          </p>
          <ul>
            <li>정보주체의 별도 동의가 있는 경우</li>
            <li>법률에 특별한 규정이 있거나 법령상 의무 이행을 위해 불가피한 경우</li>
          </ul>

          <h4>6. 개인정보 처리의 위탁</h4>
          <p>
            회사는 현재 개인정보 처리 업무를 외부에 위탁하지 않습니다.
            향후 위탁이 발생하는 경우 위탁 대상자 및 업무 내용을 사전에 고지합니다.
          </p>

          <h4>7. 정보주체의 권리·의무 및 행사 방법</h4>
          <p>정보주체는 회사에 대해 언제든지 다음의 권리를 행사할 수 있습니다.</p>
          <ul>
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
          </ul>
          <p className="modal-note">
            ※ 위 권리 행사는 서면, 전화, 전자우편 등을 통해 하실 수 있으며 회사는 이에 대해
            지체 없이 조치합니다.
          </p>

          <h4>8. 개인정보 보호책임자</h4>
          <table className="modal-table">
            <tbody>
              <tr><td>상호</td><td>호호붕붕</td></tr>
              <tr><td>대표자</td><td>개인정보 보호책임자</td></tr>
              <tr><td>주소</td><td>서울특별시 강동구 상일동</td></tr>
              <tr><td>연락처</td><td>010-5518-3807</td></tr>
            </tbody>
          </table>
          <p className="modal-note">
            ※ 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에 관한 사항은 위 연락처로
            문의해 주시기 바랍니다. 또한 개인정보 침해에 대한 신고 및 상담은
            개인정보 보호위원회(privacy.go.kr / 국번없이 182) 또는
            한국인터넷진흥원 개인정보침해신고센터(118.go.kr / 국번없이 118)에
            문의하실 수 있습니다.
          </p>

          <h4>9. 동의 거부 권리 및 불이익</h4>
          <p>
            위 개인정보 수집·이용에 대한 동의를 거부하실 수 있습니다.
            다만, <strong>필수 항목(이름, 연락처)</strong>에 동의하지 않으실 경우
            가맹 상담 신청 서비스 이용이 제한됩니다.
          </p>

        </div>
        <div className="modal-footer">
          {!scrolled && <p className="modal-scroll-hint">↓ 내용을 끝까지 스크롤해 주세요</p>}
          <button className="modal-close" onClick={() => { onAgree(); onClose(); }} disabled={!scrolled}>확인했습니다</button>
        </div>
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
        <div className="envelope-body" style={{ padding:60, textAlign:'center' }}>
          <div style={{ fontSize:52, marginBottom:16 }}>🎉</div>
          <h3 style={{ fontFamily:'var(--font-korean)', fontSize:22, fontWeight:700, color:'var(--brand-pink)', marginBottom:8 }}>상담 신청이 완료되었습니다!</h3>
          <p style={{ fontSize:14, color:'#8a6a50', lineHeight:1.8 }}>1~2 영업일 내로 담당자가 연락드릴 예정입니다 😊</p>
        </div>
      </div>
    </section>
  )

  return (
    <>
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} onAgree={() => setForm(p => ({ ...p, privacyConsent: true }))} />}
      <section className="inquiry" id="inquiry">
        <div className="inquiry__heading">
          <p className="section-tag">Contact Us</p>
          <h2 className="inquiry__title">호호붕붕과 함께하세요</h2>
        </div>

        {/* 봉투 래퍼 — 빵이 위에서 솟아오름 */}
        <div className="envelope-wrapper">
          <div className="bread-peeker">
            <span className="bread-peeker__coin bread-peeker__coin--1">🪙</span>
            <span className="bread-peeker__coin bread-peeker__coin--2">🪙</span>
          </div>
        <div className="envelope-outer">
          {/* 좌우 본문 */}
          <div className="envelope-body">
            {/* 왼쪽: 브랜딩 (짙은 크라프트) */}
            <div className="envelope-left">
              <p className="envelope-left__tag">HOHO BUNGBUNG</p>
              {/* 🖼 로고 교체: 컬러 변경한 SVG 저장 후 경로 입력 */}
              <img src="/inquiry_logo.svg" alt="호호붕붕" className="envelope-left__logo" />
              <p className="envelope-left__sub">
                남겨주신 연락처로<br />
                1~2 영업일 내 담당자가<br />
                연락드립니다.
              </p>
              <p className="envelope-left__phone">📞 010.5518.3807</p>
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

        </div>
        </div>{/* envelope-wrapper 닫기 */}
      </section>
    </>
  )
}
