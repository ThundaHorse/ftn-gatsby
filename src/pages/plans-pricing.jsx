import React from "react"
import { Container, Col, Button, Row } from "react-bootstrap"
import { Animated } from "react-animated-css"
import Layout from "../components/layout"
import "../styles/pages/plansAndPricing.scss"

const PlansAndPricing = () => {
  const plans = [
    {
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
      bgColor: "grey darken-4 text-white",
    },
    {
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
      bgColor: "blue-grey lighten-4",
    },
    {
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
      bgColor: "grey darken-3 text-white",
    },
    {
      title: "Find me a job!",
      pricing: "700",
      validPeriod: "Valid for one month",
      planIntro:
        "A personal Nerd to be by your side through the start to end process of your job search",
      planDescription: [
        "1 on 1 sessions with your personal Nerd to do an in depth review of your resume and roadmap a strategy for success on your desired role or industry",
        "Bi-weekly interview prep sessions to ensure your on top of all potential behavioral questions that could be asked ",
        "Consultation on navigating offers and identify your best fit",
      ],
      bgColor: "grey darken-2 text-white",
    },
    {
      title: "Portfolio Revamp",
      pricing: "800",
      validPeriod: "until completion",
      planIntro: "Ready to seek new opportunities and career growth?",
      planDescription: [
        "Your portfolio defines your brand!",
        "Have a design certified Nerd review and revamp your portfolio to highlight your key strengths and abilities.",
        "They’ll partner with you to guide you along your journey and support you through your development process to ensure a high quality product.",
      ],
    },
  ]

  const renderSections = () => {
    return (
      <>
        {plans.map((plan, index) => (
          <Container className={`plan-section ${plan.bgColor}`} key={index}>
            <Row className="plan-section-row container valign-wrapper h-100">
              {index % 2 === 0 ? (
                <>
                  <Col className="pull-l1">
                    <h4 className="plan-title mt-4 mb-4">{plan.title}</h4>
                    <h5 className="plan-price">
                      ${plan.pricing}{" "}
                      <span className="plan-valid-period">
                        {plan.validPeriod}
                      </span>
                    </h5>

                    <Button
                      href="/book-online"
                      variant="primary"
                      className="mt-4"
                    >
                      Book now
                    </Button>
                  </Col>

                  <Col className="mt-3">
                    <h6 className="plan-intro">{plan.planIntro}</h6>
                    <hr />
                    <div className="plan-description">
                      <ul className="plan-features">
                        {plan.planDescription.map((des, idx) => (
                          <li key={idx}>{des}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col className="mt-3">
                    <h6 className="plan-intro">{plan.planIntro}</h6>
                    <hr />
                    <div className="plan-description">
                      <ul className="plan-features">
                        {plan.planDescription.map((des, idx) => (
                          <li key={idx}>{des}</li>
                        ))}
                      </ul>
                    </div>
                  </Col>

                  <Col className="push-l1">
                    <h4 className="plan-title mt-4 mb-4">{plan.title}</h4>
                    <h5 className="plan-price">
                      ${plan.pricing}{" "}
                      <span className="plan-valid-period">
                        {plan.validPeriod}
                      </span>
                    </h5>

                    <Button
                      href="/book-online"
                      variant="primary"
                      className="mt-4"
                    >
                      Book now
                    </Button>
                  </Col>
                </>
              )}
            </Row>
          </Container>
        ))}
      </>
    )
  }

  return (
    <Layout>
      <Container id="plan-and-pricing" fluid>
        <div className="plan-and-pricing-wrapper">
          <Row>
            <Col className="text-center">
              <h1 className="plan-and-pricing-title">
                Choose your pricing plan
              </h1>
            </Col>
          </Row>

          <Animated
            animationIn="fadeIn"
            animationOut="fadeOut"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            {renderSections()}
          </Animated>
        </div>
      </Container>
    </Layout>
  )
}

export default PlansAndPricing
