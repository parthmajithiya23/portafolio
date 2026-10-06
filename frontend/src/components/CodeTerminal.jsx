import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './CodeTerminal.css'

const LINES = [
  { text: 'const developer = {', cls: '' },
  { text: '  name: ', cls: '', cont: "'Parth Majithiya'," , clsCont: 'str' },
  { text: '  role: ', cls: '', cont: "'MERN Stack Developer'," , clsCont: 'str' },
  { text: '  stack: ', cls: '', cont: "['React', 'Node', 'Express', 'MongoDB']," , clsCont: 'arr' },
  { text: '  focus: ', cls: '', cont: "'Production web apps'," , clsCont: 'str' },
  { text: '  available: ', cls: '', cont: 'true,', clsCont: 'bool' },
  { text: '};', cls: '' },
]

const FULL_TEXT = LINES.map((l) => l.text + (l.cont || '')).join('\n')

export default function CodeTerminal() {
  const [typed, setTyped] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let raf
    let last = performance.now()
    const speed = 18 // ms per character

    const tick = (now) => {
      if (now - last >= speed) {
        last = now
        i += 1
        setTyped(FULL_TEXT.slice(0, i))
        if (i >= FULL_TEXT.length) {
          setDone(true)
          return
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const shownLines = typed.split('\n')

  return (
    <motion.div
      className="terminal glass"
      initial={{ y: 30, rotate: -1 }}
      animate={{ y: 0, rotate: -1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red" />
        <span className="terminal__dot terminal__dot--yellow" />
        <span className="terminal__dot terminal__dot--green" />
        <span className="terminal__title">profile.js</span>
      </div>
      <pre className="terminal__body">
        <code>
          {shownLines.map((line, idx) => (
            <div className="terminal__line" key={idx}>
              <span className="terminal__lineno">{idx + 1}</span>
              <span className="terminal__code">{line || '\u00A0'}</span>
            </div>
          ))}
          <span className={`terminal__cursor ${done ? 'terminal__cursor--blink' : ''}`}>▍</span>
        </code>
      </pre>
    </motion.div>
  )
}
