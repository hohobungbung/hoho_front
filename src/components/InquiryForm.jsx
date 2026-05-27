import { useState } from 'react'

const API_URL = 'http://localhost:8080/api/inquiries'

const initialForm = {
  name: '',
  phone: '',
  startupType: '',
  region: '',
  message: '',
  privacyConsent: false,
}

export default function InquiryForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = '이름을 입력해주세요'
    if (!form.phone.trim()) {
      e.phone = '연락처를 입력해주세요'
    } else if (!/^01[016789]-?\d{3,4}-?\d{4}$/.test(form.phone)) {
      e.phone = '올바른 전화번호 형식을 입력해주세요 (예: 010-1234-5678)'
    }
    if (!form.privacyConsent) e.privacyConsent = '개인정보 수집에 동의해주세요'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          startupType: form.startupType || null,
          region: form.region || null,
          message: form.message || null,
          privacyConsent: form.privacyConsent,
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        // 서버 유효성 검증 에러 처리
        if (data && typeof data === 'object') {
          setErrors(data)
        } else {
          alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
        }
        return
      }

      setSuccess(true)
      setForm(initialForm)
    } catch (err) {
      alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <section className="inquiry" id="inquiry">
        <div className="inquiry__inner">
          <div className="form-success">
            <div className="form-success__icon">🎉</div>
            <h3 className="form-success__title">상담 신청이 완료되었습니다!</h3>
            <p className="form-success__desc">
              1~2 영업일 내로 담당자가 연락드릴 예정입니다.<br />
              감사합니다 😊
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="inquiry" id="inquiry">
      <div className="inquiry__inner">
        <div className="inquiry__header">
          <p className="section-tag">Contact Us</p>
          <h2 className="section-title">가맹 상담 신청</h2>
          <p style={{ marginTop: 12, fontSize: 15, color: '#888' }}>
            남겨주신 연락처로 1~2 영업일 내 연락드립니다
          </p>
        </div>

        <form className="inquiry__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">
                이름 <span>*</span>
              </label>
              <input
                className={`form-input${errors.name ? ' error' : ''}`}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="홍길동"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                연락처 <span>*</span>
              </label>
              <input
                className={`form-input${errors.phone ? ' error' : ''}`}
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="010-1234-5678"
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">창업 유형</label>
              <select
                className="form-select"
                name="startupType"
                value={form.startupType}
                onChange={handleChange}
              >
                <option value="">선택해주세요 (선택)</option>
                <option value="YOUNG">청년 창업</option>
                <option value="COUPLE">부부·커플 창업</option>
                <option value="SHOP">가게 부업 창업</option>
                <option value="OTHER">기타</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">관심 지역</label>
              <input
                className="form-input"
                type="text"
                name="region"
                value={form.region}
                onChange={handleChange}
                placeholder="예: 서울 강동구 (선택)"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">문의 내용</label>
            <textarea
              className="form-textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="궁금하신 점을 자유롭게 적어주세요 (선택)"
            />
          </div>

          <div className="form-group">
            <label className="form-checkbox">
              <input
                type="checkbox"
                name="privacyConsent"
                checked={form.privacyConsent}
                onChange={handleChange}
              />
              <span className="form-checkbox-label">
                <strong>개인정보 수집·이용에 동의합니다</strong> (필수)<br />
                수집 항목: 이름, 연락처 / 목적: 가맹 상담 / 보유 기간: 상담 완료 후 6개월
              </span>
            </label>
            {errors.privacyConsent && (
              <span className="form-error">{errors.privacyConsent}</span>
            )}
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={loading}
          >
            {loading ? '신청 중...' : '무료 상담 신청하기'}
          </button>
        </form>
      </div>
    </section>
  )
}
