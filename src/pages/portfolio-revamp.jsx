import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/pages/program.scss"

const HelpMe = () => {
  const plan = {
    title: "Portfolio Revamp",
    pricing: "800",
    validPeriod: "Until completion",
    planIntro: "Ready to seek new opportunities and career growth?",
    planDescription: [
      "Your portfolio defines your brand!",
      "Have a design certified Nerd review and revamp your portfolio to highlight your key strengths and abilities.",
      "They’ll partner with you to guide you along your journey and support you through your development process to ensure a high quality product.",
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
