import React from 'react'
import '../styles/main.css'
import { Link } from 'react-scroll'

export default function Nav() {
  return (
    <div className="nav">
      <div className="nav-sections">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  )
}
