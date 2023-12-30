import React from 'react'

import linkedinLogo from '../images/linkedin_logo.png'
import githubLogo from '../images/github_logo.png'

export default function Header() {
  // Resume download
  const handleResumeDownload = () => {
    const resumePdfUrl = process.env.PUBLIC_URL + '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumePdfUrl
    link.download = 'Sofia_Etchegoin_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="element-logos">
      {/* LinkedIn Logo */}
      <a
        href="https://www.linkedin.com/in/sofia-etchegoin-094417220/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="element-linkedin-logo"
          alt="Element linkedin"
          src={linkedinLogo}
        />
      </a>

      {/* GitHub Logo */}
      <a
        href="https://github.com/sofia-etchegoin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="element-github-logo"
          alt="Element github logo"
          src={githubLogo}
        />
      </a>

      {/* My Resume button */}
      <button className="my-resume" onClick={handleResumeDownload}>
        My Resume
      </button>
    </div>
  )
}
