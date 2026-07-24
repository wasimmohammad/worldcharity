import { useState } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { HandHeartIcon, HandCoinsIcon, CheckmarkCircle02Icon, AlertCircleIcon } from '@hugeicons/core-free-icons'

const interests = [
  { value: 'Donor', icon: HandCoinsIcon, desc: 'I want to support programs financially' },
  { value: 'Volunteer', icon: HandHeartIcon, desc: 'I want to give my time and skills' },
]

export default function Contact() {
  const defaultForm = { name: '', email: '', interest: 'Donor', message: '' }
  const [form, setForm] = useState(defaultForm)
  const [status, setStatus] = useState('idle') // idle | submitting | error
  const [showModal, setShowModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    let error = null
    if (typeof supabase !== 'undefined' && supabase?.from) {
      const result = await supabase.from('contact_submissions').insert({
        name: form.name,
        email: form.email,
        interest: form.interest,
        message: form.message,
      })
      error = result?.error
    } else {
      await new Promise((resolve) => setTimeout(resolve, 800))
    }

    if (error) {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again in a moment.')
      return
    }

    setStatus('idle')
    setForm(defaultForm)
    setShowModal(true)
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">Get in touch</span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-4">
            Let's make a difference together
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Whether you want to donate, volunteer, or partner with us — tell us a little about yourself and we'll be in touch.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Interest selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">I want to help as a…</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {interests.map((opt) => {
                    const active = form.interest === opt.value
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, interest: opt.value }))}
                        className={`flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-left ${
                          active
                            ? 'border-green-500 bg-green-50 shadow-sm'
                            : 'border-gray-200 hover:border-green-300 bg-white'
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${active ? 'bg-green-600' : 'bg-gray-100'}`}>
                          <HugeiconsIcon icon={opt.icon} className={`w-6 h-6 ${active ? 'text-white' : 'text-gray-500'}`} />
                        </div>
                        <div>
                          <div className={`font-bold ${active ? 'text-green-800' : 'text-gray-900'}`}>{opt.value}</div>
                          <div className="text-xs text-gray-500">{opt.desc}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Name + email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-gray-900"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-gray-900"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how you'd like to get involved, any skills you can offer, or questions you have…"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition-all text-gray-900 resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-700 bg-red-50 px-4 py-3 rounded-xl text-sm">
                  <HugeiconsIcon icon={AlertCircleIcon} className="w-5 h-5 shrink-0" />
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-green-600 text-white font-semibold px-7 py-4 rounded-xl hover:bg-green-700 transition-all shadow-lg shadow-green-600/30 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
            </form>
          {showModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="max-w-md w-full rounded-3xl bg-white p-8 shadow-2xl">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Thank you for your support
                  </h3>
                  <p className="text-gray-600">
                    One of our team members will reach out to you in 24 to 48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
