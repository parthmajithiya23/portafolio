import { useEffect, useRef, useState } from 'react'
import { Award, ExternalLink, Image as ImageIcon, X } from 'lucide-react'
import Reveal from './Reveal'
import { certificates } from '../data/certificates'

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [unavailableImages, setUnavailableImages] = useState(() => new Set())
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (selectedCertificate && !dialog.open) dialog.showModal()
    if (!selectedCertificate && dialog.open) dialog.close()
  }, [selectedCertificate])

  const markImageUnavailable = (image) => {
    setUnavailableImages((current) => new Set(current).add(image))
  }

  const imageIsAvailable = (image) => image && !unavailableImages.has(image)

  return (
    <>
      <section className="section" aria-labelledby="certificates-title">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Learning &amp; Credentials</span>
              <h2 className="section-title" id="certificates-title">Certificates</h2>
              <p className="section-desc">
                Courses and credentials that support my continued growth as a developer.
              </p>
            </div>
          </Reveal>

          <div className="pm-certificates-grid">
            {certificates.map((certificate, index) => (
              <Reveal key={`${certificate.title}-${certificate.issuer}`} delay={(index % 3) * 0.07}>
                <article className="pm-certificate-card glass-card">
                  <button
                    className="pm-certificate-card__preview"
                    type="button"
                    onClick={() => setSelectedCertificate(certificate)}
                    aria-label={`View certificate image: ${certificate.title}`}
                  >
                    {imageIsAvailable(certificate.image) ? (
                      <img
                        src={certificate.image}
                        alt={`${certificate.title} certificate issued by ${certificate.issuer}`}
                        loading="lazy"
                        onError={() => markImageUnavailable(certificate.image)}
                      />
                    ) : (
                      <span className="pm-certificate-card__placeholder">
                        <ImageIcon aria-hidden="true" />
                        <span>Certificate preview</span>
                      </span>
                    )}
                    <span className="pm-certificate-card__view">View Certificate</span>
                  </button>
                  <div className="pm-certificate-card__content">
                    <div className="pm-certificate-card__meta">
                      <span><Award aria-hidden="true" /> {certificate.issuer}</span>
                      <time>{certificate.date}</time>
                    </div>
                    <h3>{certificate.title}</h3>
                    {certificate.description && <p>{certificate.description}</p>}
                    {certificate.credentialUrl && (
                      <a
                        className="btn btn-outline btn-sm pm-certificate-card__credential"
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Verify Credential <ExternalLink aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <dialog
        className="pm-certificate-dialog"
        ref={dialogRef}
        aria-label={selectedCertificate?.title || 'Certificate preview'}
        onClose={() => setSelectedCertificate(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedCertificate(null)
        }}
      >
        <button
          className="pm-certificate-dialog__close"
          type="button"
          onClick={() => setSelectedCertificate(null)}
          aria-label="Close certificate preview"
        >
          <X aria-hidden="true" />
        </button>
        {selectedCertificate && (
          <div className="pm-certificate-dialog__content">
            {imageIsAvailable(selectedCertificate.image) ? (
              <img
                src={selectedCertificate.image}
                alt={`${selectedCertificate.title} certificate issued by ${selectedCertificate.issuer}`}
                onError={() => markImageUnavailable(selectedCertificate.image)}
              />
            ) : (
              <div className="pm-certificate-dialog__placeholder">
                <ImageIcon aria-hidden="true" />
                <p>Certificate image not added yet.</p>
              </div>
            )}
            <h2>{selectedCertificate.title}</h2>
            <p>{selectedCertificate.issuer} <span aria-hidden="true">/</span> {selectedCertificate.date}</p>
          </div>
        )}
      </dialog>
    </>
  )
}