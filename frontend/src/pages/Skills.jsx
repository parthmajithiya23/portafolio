import PageTransition from '../components/PageTransition'
import SEO from '../components/SEO'
import AnimatedBackground from '../components/AnimatedBackground'
import Reveal from '../components/Reveal'
import SkillCard from '../components/SkillCard'
import { skillCategories } from '../data/skills'
import './Skills.css'

export default function Skills() {
  const renderedSkillNames = new Set()

  return (
    <PageTransition>
      <SEO
        title="Skills"
        description="Technical skills of Parth Majithiya — HTML, CSS, JavaScript, React, Node.js, Express.js and MongoDB."
      />

      <section className="section skills-hero">
        <AnimatedBackground variant="section" />
        <div className="container">
          <Reveal>
            <span className="eyebrow">What I Work With</span>
            <h1 className="section-title">Skills &amp; technologies</h1>
            <p className="section-desc">
              The tools I use to build production-ready MERN applications.
            </p>
          </Reveal>
        </div>
      </section>

      {skillCategories.map((cat, ci) => (
        <section className="section skills-category" key={cat.id}>
          <div className="container">
            <Reveal>
              <div className="skills-category__head">
                <h2 className="skills-category__title">{cat.title}</h2>
                <p className="skills-category__desc">{cat.description}</p>
              </div>
            </Reveal>
            <div className="grid skills-grid">
              {cat.skills.flatMap((skill, i) => {
                if (renderedSkillNames.has(skill.name)) return []
                renderedSkillNames.add(skill.name)
                return [<SkillCard key={skill.name} {...skill} index={ci * 4 + i} />]
              })}
            </div>
          </div>
        </section>
      ))}
    </PageTransition>
  )
}
