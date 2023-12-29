import { Link } from 'react-scroll'

export default function Intro() {
  return (
    <>
      <div className="intro">
        <h1>Hi! I'm Sofia Etchegoin.</h1>
        <h2>I'm a full stack developer from Wellington.</h2>
        <Link to="contact" smooth={true} duration={500}>
          <button className="contact-me">Contact me</button>
        </Link>
      </div>
    </>
  )
}
