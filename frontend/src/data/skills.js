// Each skill has a name and an abbreviation shown in its badge.

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'Building fast, accessible interfaces.',
    skills: [
      { name: 'HTML5', abbr: 'HT' },
      { name: 'CSS3', abbr: 'CS' },
      { name: 'JavaScript', abbr: 'JS' },
      { name: 'React', abbr: 'Re' },
      { name: 'React Router', abbr: 'RR' },
      { name: 'Bootstrap', abbr: 'Bs' },
      { name: 'Tailwind CSS', abbr: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    description: 'APIs, servers and data that hold up in production.',
    skills: [
      { name: 'Node.js', abbr: 'Nd' },
      { name: 'Express.js', abbr: 'Ex' },
      { name: 'MongoDB', abbr: 'Mo' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Version control and day-to-day developer tooling.',
    skills: [
      { name: 'Git', abbr: 'Gt' },
      { name: 'GitHub', abbr: 'Gh' },
    ],
  },
]

const uniqueSkills = new Set()

export const allSkillsFlat = skillCategories.flatMap((category) =>
  category.skills.flatMap((skill) => {
    if (uniqueSkills.has(skill.name)) return []
    uniqueSkills.add(skill.name)
    return [{ ...skill, category: category.title }]
  })
)
