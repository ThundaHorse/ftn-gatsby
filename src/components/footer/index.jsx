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
            <Link
              to="/help-me"
              state={{
                title: "Help me Package",
                pricing: "50",
                validPeriod: "Every month",
                planIntro:
                  "Join our FTN community where you can grow with our Nerds and previous clients",
                planDescription: [
                  "Assistance with navigating corporate bureaucracy",
                  "24/7 access to all Nerds to guide you through any escalations or issues you may face on a day to day basis",
                  "Guidance on key deliverables to ensure your quality of work reflects your professional brand",
                  "Assistance on basic technical needs",
                ],
              }}
              className="plan-link"
            >
              Help me Package
            </Link>
          </li>
          <li className="footer-link">
            <Link
              to="/mock-interview"
              state={{
                title: "Mock Interview",
                pricing: "149",
                validPeriod: "Valid for one week",
                planIntro: "Ready to ace your interview? This is for you",
                planDescription: [
                  "Recorded live session from the interviewer",
                  "Feedback and suggestion on areas of focus",
                  "Receive insights to a successful interview response",
                  "Resume review",
                ],
              }}
              className="plan-link"
            >
              Mock Interview
            </Link>
          </li>
          <li className="footer-link">
            <Link
              to="/resume-package"
              state={{
                title: "Resume Package",
                pricing: "500",
                validPeriod: "Valid for one month",
                planIntro:
                  "Receive a FTN certified resume to land you the job of your dreams",
                planDescription: [
                  "Understand and learn how to phrase and document key points needed for resumes for future knowledge",
                  "In-depth review of current resume",
                  "1 on 1 sessions with your personal Nerd to do an in depth review of your resume and roadmap a strategy for success on your desired role or industry",
                ],
              }}
              className="plan-link"
            >
              Resume Package
            </Link>
          </li>
          <li className="footer-link">
            <Link
              to="/find-me-a-job"
              state={{
                title: "Find me a Job!",
                pricing: "700",
                validPeriod: "Valid for one month",
                planIntro:
                  "A personal Nerd to be by your side through the start to end process of your job search",
                planDescription: [
                  "1 on 1 sessions with your personal Nerd to do an in depth review of your resume and roadmap a strategy for success on your desired role or industry",
                  "Bi-weekly interview prep sessions to ensure your on top of all potential behavioral questions that could be asked ",
                  "Consultation on navigating offers and identify your best fit",
                ],
              }}
              className="plan-link"
            >
              Find me a Job!
            </Link>
          </li>
          <li className="footer-link">
            <Link
              to="/portfolio-revamp"
              state={{
                title: "Portfolio Revamp",
                pricing: "800",
                validPeriod: "Until completion",
                planIntro: "Ready to seek new opportunities and career growth?",
                planDescription: [
                  "Your portfolio defines your brand!",
                  "Have a design certified Nerd review and revamp your portfolio to highlight your key strengths and abilities.",
                  "They’ll partner with you to guide you along your journey and support you through your development process to ensure a high quality product.",
                ],
              }}
              className="plan-link"
            >
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
