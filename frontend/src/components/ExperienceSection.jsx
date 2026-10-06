import { BriefcaseBusiness } from 'lucide-react'
import Reveal from './Reveal'
import { experience } from '../data/experience'

export default function ExperienceSection() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Career</span>
            <h2 className="section-title" id="experience-title">Experience</h2>
            <p className="section-desc">
              A look at the roles, teams, and technologies behind my work.
            </p>
          </div>
        </Reveal>

        <div className="pm-experience-list">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}-${item.startDate}`} delay={index * 0.08}>
              <article className="pm-experience-card glass-card">
                <div className="pm-experience-card__mark" aria-hidden="true">
                  {item.logo ? (
                    <>
                      <span>{item.company.slice(0, 1)}</span>
                      <img src={item.logo} alt="" onError={(event) => event.currentTarget.remove()} />
                    </>
                  ) : (
                    <BriefcaseBusiness />
                  )}
                </div>
                <div className="pm-experience-card__body">
                  <div className="pm-experience-card__heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="pm-experience-card__company">{item.company}</p>
                    </div>
                    <p className="pm-experience-card__dates">
                      {item.startDate} <span aria-hidden="true">/</span> {item.endDate || 'Present'}
                    </p>
                  </div>
                  <p className="pm-experience-card__description">{item.description}</p>
                  {item.technologies?.length > 0 && (
                    <ul className="pm-experience-card__tech" aria-label="Technologies used">
                      {item.technologies.map((technology) => (
                        <li className="tag" key={technology}>{technology}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}