import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { Link } from "gatsby"
import "./footer.scss"
import image from "../../images/superhero-about-us.svg"

const Footer = () => {
  const renderPlanLinks = () => {
    return (
      <>
        <ul className="text-center">
          <li className="footer-link">
            <Link to="/help-me" className="plan-link">
              Help me Package
            </Link>
          </li>
          <li className="footer-link">
            <Link to="/mock-interview" className="plan-link">
              Mock Interview
            </Link>
          </li>
          <li className="footer-link">
            <Link to="/resume-package" className="plan-link">
              Resume Package
            </Link>
          </li>
          <li className="footer-link">
            <Link to="/find-me-a-job" className="plan-link">
              Find me a Job!
            </Link>
          </li>
          <li className="footer-link">
            <Link to="/portfolio-revamp" className="plan-link">
              Portfolio Revamp
            </Link>
          </li>
        </ul>
      </>
    )
  }

  return (
    <>
      <div className="footer-placeholder" />
      <footer className="main-footer orange lighten-5">
        <div className="container">
          <div className="row d-block">
            <div className="col s12 m12 l5 hide-on-small-only footer-column-first">
              <div className="footer-brand-logo">
                <h5 className="footer-title text-center">Follow the Nerd</h5>
                <img
                  className="footer-logo"
                  src={image}
                  loading="lazy"
                  alt="Follow the Nerd"
                ></img>
              </div>
            </div>
            <div className="col s12 m6 l4 footer-column">
              <h5 className="footer-title text-center">Programs</h5>
              {renderPlanLinks()}
            </div>
            <div className="col s12 m6 l3 footer-column-last">
              <h5 className="footer-title text-center">Contact Us</h5>
              <div className="contact-us">
                <FontAwesomeIcon icon={faEnvelope} />
                <a
                  href="mailto:followthenerd1@gmail.com"
                  className="footer-mail"
                >
                  Follow the Nerd
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
