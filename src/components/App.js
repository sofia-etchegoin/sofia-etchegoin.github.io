import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Header />

      <Nav />

      <AnimatedSection>
        <Intro />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Projects />
      </AnimatedSection>

      <AnimatedSection>
        <Contact />
      </AnimatedSection>
    </>
  )
}
