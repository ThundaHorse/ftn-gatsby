import React from "react"
import { Container, Col, Button, Row, Tab, Tabs } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGears } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import "../styles/pages/bookNow.scss"

import review from "../images/review.webp"

const BookNow = () => {
  const packages = [
    {
      id: 1,
      position: "first",
      title: "Help Me",
      pricing: "50",
      pricingPeriod: "month",
      description:
        "Grow a professional relationship with your own personal Nerd who can coach and guide you through your first internship or first steps in your career. Your Nerd will provide specific industry knowledge and their personal experiences to sharpen your business acumen and add to your skillset. You will have 24 hours access to your nerd and bi weekly check-ins with them.",
    },
    {
      id: 2,
      position: "third",
      title: "Mock Interview",
      pricing: "149",
      pricingPeriod: "week",
      description:
        "Go through a FTN certified mock trial with a certified Nerd with previous recruiting / interview experience to give you a real life mock interview to give you the closest experience possible to prepare you for the real deal! Your nerd will work with you to structure key behavioral questions in our FTN methodology, so you won’t even have to think during the interview!",
    },
    {
      id: 3,
      position: "second",
      title: "Resume",
      pricing: "500",
      pricingPeriod: "month",
      description:
        "Partner with your own personal Nerd to review the current state of your resume and go through consultation services to identify areas of improvement and gaps to build a stronger and more desired resume. Your Nerd will go through iterative sessions with you to align on your next career move and update your resume to reflect your true passions and career goals!",
    },
    {
      id: 4,
      position: "fourth",
      title: "Complete",
      pricing: "700",
      pricingPeriod: "month",
      description:
        "Get the full FTN experience by working with your personal Nerd to revamp your resume to ensure your value is clearly displayed in your resume. Go through multiple mock interview sessions to practice your behavioral questions and body language to fully prepare you for a natural and comfortable interview process!",
    },
    {
      id: 5,
      position: "fifth",
      title: "Portfolio",
      pricing: "800",
      pricingPeriod: "completion",
      description:
        "Your portfolio defines your brand! Have a design certified Nerd review and revamp your portfolio to highlight your key strengths and abilities. They’ll partner with you to guide you along your journey and support you through your development process to ensure a high quality product.",
    },
  ]

  const renderTabs = () => {
    return (
      <>
        <Tabs
          defaultActiveKey="first"
          id="services-tabs"
          className="mb-3"
          transition
        >
          {packages.map((service, index) => (
            <Tab eventKey={service.position} key={index} title={service.title}>
              <Row className="mt-4" xs="auto" sm="auto" lg={2} md={2}>
                <Col className="my-auto">
                  <img
                    src={review}
                    className="service-image"
                    alt={`service-${service.id}-img`}
                  />
                </Col>

                <Col>
                  <div className="service-description-wrapper p-4">
                    <p className="service-description">{service.description}</p>

                    <div className="service-cost">
                      <span className="service-rate">
                        ${service.pricing} /{" "}
                      </span>
                      <span className="service-time">
                        {service.pricingPeriod}
                      </span>
                    </div>

                    <Button
                      href="/book-online"
                      className="book-service"
                      variant={"primary"}
                    >
                      Book Now
                    </Button>
                  </div>
                </Col>
              </Row>
            </Tab>
          ))}
        </Tabs>
      </>
    )
  }

  return (
    <Layout>
      <Container id="book-now">
        <Row>
          <Col className="text-center">
            <div className="our-services-content">
              <h3 className="book-now-title">
                Our Services
                <span>
                  <FontAwesomeIcon className="services-icon" icon={faGears} />
                </span>
              </h3>
            </div>
          </Col>

          {renderTabs()}
        </Row>
      </Container>
    </Layout>
  )
}

export default BookNow
