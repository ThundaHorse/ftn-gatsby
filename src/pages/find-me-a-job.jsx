import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/pages/program.scss"

const HelpMe = () => {
  const plan = {
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
  }

  const renderPlan = () => {
    return (
      <>
        <Row className="plan-title-and-price">
          <Col className="text-center">
            <h4 className="plan-title">{plan.title}</h4>
            <h5 className="plan-price">
              ${plan.pricing}{" "}
              <span className="plan-valid-period">{plan.validPeriod}</span>
            </h5>
          </Col>
        </Row>

        <Row className="plan-row">
          <Col>
            <h6 className="plan-intro text-center flow-text">
              {plan.planIntro}
            </h6>
          </Col>

          <Col>
            <blockquote>
              <div className="plan-description">
                <ul className="plan-features">
                  {plan.planDescription.map((des, idx) => (
                    <li key={idx}>{des}</li>
                  ))}
                </ul>
              </div>
            </blockquote>
          </Col>
        </Row>
      </>
    )
  }

  return (
    <Layout>
      <Container id="plan-page">
        <div className="plan-wrapper">{renderPlan()}</div>
      </Container>
    </Layout>
  )
}

export default HelpMe
