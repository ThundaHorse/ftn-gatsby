import React from "react"
import "../styles/pages/about.scss"
import { Row, Col, Container } from "react-bootstrap"
import { Animated } from "react-animated-css"
import Layout from "../components/layout"

import aboutUsClipboard from "../images/about-us-clipboard.webp"
import superHeroEnd from "../images/superhero-about-us.svg"

const About = () => {
  return (
    <Layout>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <Container id="about-us-page" fluid>
          <div className="about-us-sec grey lighten-4">
            <Container>
              <Row className="about-us-sec-row-1">
                <Col className="about-sec-1">
                  <img
                    className="about-us-intro-tools"
                    src={aboutUsClipboard}
                    alt="about-us-intro-tools"
                  />
                </Col>

                <Col className="about-sec-2">
                  <h3 className="about-us-call-to-action">
                    FTN is a philosophy our company stands by to enable and
                    teach clients who may not be experts or experienced in their
                    professional career.
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <div className="section-wrapper">
            <Container>
              <Row className="about-us-sub-sec sub-1 center-align">
                <Col>
                  <h3 className="about-us-call-to-action-sub center-align">
                    Our mission is to support and guide individuals who possess
                    a hunger and passion to grow their careers. We wanted to
                    help those from non-target schools and non-traditional
                    backgrounds by leveraging our background and experience to
                    be the Nerds they could follow and learn from
                  </h3>
                </Col>
              </Row>
            </Container>
          </div>

          <Row className="about-us-end grey lighten-4">
            <Col className="about-us-end-sec-1">
              <h3 className="about-us-call-end flow-text">
                We've helped thousands secure offers from top companies
                including Salesforce, Microsoft, Deloitte, Slalom, and many
                more!
              </h3>
            </Col>

            <Col className="about-us-end-sec-2">
              <img
                className="end-image"
                src={superHeroEnd}
                alt="about-us-end-1"
              />
            </Col>
          </Row>
        </Container>
      </Animated>
    </Layout>
  )
}

export default About
