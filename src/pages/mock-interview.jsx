import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/pages/program.scss"

const HelpMe = () => {
  const plan = {
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
