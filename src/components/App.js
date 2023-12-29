import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function App() {
  return (
    <>
      <div>
        <Header />
        <Nav />
        <Intro />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
