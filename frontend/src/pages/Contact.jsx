import { useState } from 'react'
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import AnimatedBackground from '../components/AnimatedBackground'
import Reveal from '../components/Reveal'
import { socials } from '../data/socials'
import './Contact.css'

// Contact.jsx madhe initial state badlo
// Get your free key at https://web3forms.com (enter your email, key arrives in your inbox) and paste it here.
const WEB3FORMS_KEY = 'de25fb1c-6268-4428-b1fb-29a0978b953f'

const INITIAL = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  // Phone validation (optional or required mujab)
  if (!values.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (!/^\+?[0-9\s-]{10,15}$/.test(values.phone)) {
    errors.phone = 'Please enter a valid phone number.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please write a message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (WEB3FORMS_KEY.startsWith('PASTE')) {
      setErrors((er) => ({ ...er, form: 'Contact form is not configured yet. Please email me directly.' }))
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error('send failed')
      setStatus('success')
      setValues(INITIAL)
    } catch {
      setStatus('idle')
      setErrors((er) => ({ ...er, form: 'Could not send your message. Please try again or email me directly.' }))
    }
  }

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Get in touch with Parth Majithiya for freelance work, full-time roles or collaboration on MERN Stack projects."
      />

      <section className="section contact-hero">
        <AnimatedBackground variant="section" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">Get In Touch</span>
            <h1 className="section-title">Let&rsquo;s build something great.</h1>
            <p className="section-desc">
              Have a role, project or idea in mind? Fill out the form and
              I&rsquo;ll get back to you as soon as I can.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-body">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <div className="glass-card contact-info__card">
              <p className="project-detail__card-label mono">Contact Info</p>
              <a href={`mailto:${socials.email}`} className="contact-info__row">
                <Mail /> {socials.email}
              </a>
              <a href="tel:+918866598170" className="contact-info__row">
                <Phone /> +91 88665 98170
              </a>
              <div className="divider" style={{ margin: '18px 0' }} />
              <p className="project-detail__card-label mono">Elsewhere</p>
              <a href={socials.github} target="_blank" rel="noreferrer" className="contact-info__row">
                <Github /> GitHub
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="contact-info__row">
                <Linkedin /> LinkedIn
              </a>
              <div className="divider" style={{ margin: '18px 0' }} />
              <p className="contact-info__note">
                Currently open to freelance projects, internships and
                full-time MERN Stack roles.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="contact-form-wrap">
            {status === 'success' ? (
              <div className="glass-card contact-success">
                <CheckCircle2 />
                <h3>Message sent</h3>
                <p>
                  Thanks for reaching out — your message has been received. I’ll get back to you as soon as I can.
                </p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                {errors.form && <p className="field-error" role="alert" style={{ marginBottom: 14 }}>{errors.form}</p>}
                <form className="glass-card contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="contact-form__row">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" type="text" placeholder="Your full name" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
                      {errors.name && <span className="field-error">{errors.name}</span>}
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
                      {errors.email && <span className="field-error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="Your phone number" value={values.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
                    {errors.phone && <span className="field-error">{errors.phone}</span>}
                  </div>



                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                      value={values.subject}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.subject)}
                    />
                    {errors.subject && <span className="field-error">{errors.subject}</span>}
                  </div>

                  <div className="field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me a bit about the project or role..."
                      value={values.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message && <span className="field-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : (<>Send Message <Send /></>)}
                  </button>
                </form>
              </>
            )}
          </Reveal>
        </div>
      </section>
    </PageTransition>
  )
}
