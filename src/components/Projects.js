//screenshot imports
import missingPurrson from '../images/Screenshot_Missing_Purrson.png'
import confessionsForCats from '../images/Screenshot_Confessions_For_Cats.png'
import trollTollCalculator from '../images/Screenshot_Troll_Toll_Calculator.png'
import testing from '../images/Screenshot_Testing.png'
import gitHubLogo from '../images/github_logo.png'

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project">
          <img
            className="screen-shot"
            alt="Missing Purrson"
            src={missingPurrson}
          />
          <div className="project-title">Missing Purrson</div>
          {/* GitHub link */}
          <a
            href="https://github.com/sofia-etchegoin/missing-purrson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo" alt="GitHub Logo" src={gitHubLogo} />
          </a>
        </div>

        {/* Project 2 */}
        <div className="project">
          <img
            className="screen-shot"
            alt="Troll Toll Calculator"
            src={trollTollCalculator}
          />
          <div className="project-title">Troll Toll Calculator</div>
          {/* GitHub link */}
          <a
            href="https://github.com/sofia-etchegoin/troll-toll-calculator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo" alt="GitHub Logo" src={gitHubLogo} />
          </a>
        </div>

        {/* Project 3 */}
        <div className="project">
          <img
            className="screen-shot"
            alt="Confessions for Cats"
            src={confessionsForCats}
          />
          <div className="project-title">Confessions for Cats</div>
          {/* GitHub link */}
          <a
            href="https://github.com/sofia-etchegoin/confessions-for-cats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo" alt="GitHub Logo" src={gitHubLogo} />
          </a>
        </div>

        {/* Project 4 */}
        <div className="project">
          <img className="screen-shot" alt="Testing Exercise" src={testing} />
          <div className="project-title">Testing Exercise</div>
          {/* GitHub link */}
          <a
            href="https://github.com/sofia-etchegoin/testing-exercise"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github-logo" alt="GitHub Logo" src={gitHubLogo} />
          </a>
        </div>
      </div>
    </div>
  )
}
