//screenshot imports
import missingPurrson from '../images/Screenshot_Missing_Purrson.png'
import confessionsForCats from '../images/Screenshot_Confessions_For_Cats.png'
import trollTollCalculate from '../images/Screenshot_Troll_Toll_Calculator.png'
import testing from '../images/Screenshot_Testing.png'
import githubLogo from '../images/github_logo.png'

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        <div className="project">
          <img
            className="screen-shot"
            alt="Missing Purrson"
            src={missingPurrson}
          />
          <div className="project-title">Missing Purrson</div>
        </div>
        <div className="project">
          <img
            className="screen-shot"
            alt="Troll Toll Calculator"
            src={trollTollCalculate}
          />
          <div className="project-title">Troll Toll Calculator</div>
        </div>
        <div className="project">
          <img
            className="screen-shot"
            alt="Confessions for Cats"
            src={confessionsForCats}
          />
          <div className="project-title">Confessions for Cats</div>
        </div>
        <div className="project">
          <img className="screen-shot" alt="Testing Exercise" src={testing} />
          <div className="project-title">Testing Exercise</div>
        </div>
      </div>
    </div>
  )
}
