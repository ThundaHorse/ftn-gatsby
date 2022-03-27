import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import "../styles/pages/program.scss"

const HelpMe = () => {
  const plan = {
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
