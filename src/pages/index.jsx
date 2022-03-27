import * as React from "react"
import { Container, Col, Button, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCirclePlay,
  faCoffee,
  faCheckDouble,
  faMap,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons"
import "../styles/pages/home.scss"

import howItWorks from "../images/how-it-works-1.webp"
import businessBanner from "../images/business-banner.svg"
import goodHands from "../images/good-hands-intro.webp"
import adp from "../images/adp-logo.webp"
import salesForce from "../images/sales-force-logo.webp"
import delta from "../images/delta-logo.webp"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container id="intro-opening-1">
      <Row id="intro-hero">
        <Col md="6" lg="6" className="mt-4 mb-4">
          <div className="intro-image-1">
            <img src={businessBanner} alt="hero1" />
          </div>
        </Col>
        <Col className="my-auto hero-1">
          <div className="intro-text-wrapper">
            <h1 className="intro-call-to-action">Follow the Nerd</h1>

            <p className="intro-call-to-action-body">
              With our professional coaching services, you'll have access to
              one-on-one personal session with a career professional with
              industry experience, a custom tailored resume that tells your
              career story. Double the interviews, guaranteed!
            </p>

            <Button
              href="/book-online"
              className="desktop-book-now"
              variant={"primary"}
              size={"lg"}
            >
              Book Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>

    <hr className="grey lighten-5" />

    <Container id="intro-opening-2" fluid>
      <Container>
        <Row id="intro-opening">
          <Col className="my-auto intro-heading-2 p-4">
            <h1>You're in good hands</h1>
            <p>
              Atlanta's leading career consulting service. You’ll be in good
              hands with our professional writers. Our team of writers has
              expertise in more than 65 industries and includes certified career
              coaches, recruiters, and experienced hiring professionals.
            </p>

            <Button
              href="/plans-pricing"
              variant={"outline-secondary"}
              size={"lg"}
            >
              Learn More
            </Button>
          </Col>
          <Col md="7" lg="7" className="mt-4 mb-4">
            <div className="intro-image-2">
              <img src={goodHands} alt="good-hands-intro" />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>

    <hr className="grey lighten-5" />

    <Container id="intro-companies" fluid>
      <Row id="companies-heading">
        <Col className="text-center p-2 mt-4 companies-intro">
          <h2 className="companies-heading">
            We have consultants from all industries
          </h2>
        </Col>
      </Row>

      <Container>
        <Row className="mx-auto">
          <Col className="consultant-desc text-center m-2 p-4">
            <img className="homepage-about-companies" src={adp} alt="ADP" />
            <br />
            Experienced analytics professionals to educate you on data
            visualization, data science and data engineering. Automatic Data
            Processing
          </Col>
          <Col className="consultant-desc text-center m-2 p-4">
            <img
              className="homepage-about-companies"
              src={salesForce}
              alt="salesforce"
            />
            <br />
            Architects driven to educate and grow your knowledge beyond
            Salesforce Trailhead to fully understand the fundamentals and
            principles of Salesforce architecture. Salesforce
          </Col>
          <Col className="consultant-desc text-center m-2 p-4">
            <img className="homepage-about-companies" src={delta} alt="delta" />
            <br />
            Strategy consultants focused in growing your knowledge and
            understanding of pricing and marketing strategies. Delta Airlines
          </Col>
        </Row>
      </Container>
    </Container>

    <hr className="grey lighten-5" />

    <Container id="how-it-works">
      <Row className="how-it-works-intro">
        <Col md="6" lg="6">
          <img
            src={howItWorks}
            className="how-it-works-img mt-4"
            alt="how-it-works-1"
          />
        </Col>
        <Col className="mx-2 mb-4 mt-4">
          <h1 className="how-it-works-heading">How it works</h1>
          <p className="how-it-works-description">
            Based on your needs, we tailor our services to exceed expectations
          </p>

          <ul className="services-list d-sm-block d-md-flex p-0">
            <li>
              <div className="service-package">
                <FontAwesomeIcon className="service-icon" icon={faCirclePlay} />
                <div className="service-info">
                  <span className="package-title">
                    Resume review starter package
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="service-package">
                <FontAwesomeIcon className="service-icon" icon={faCoffee} />
                <div className="service-info">
                  <span className="package-title">
                    Comprehensive professional package
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="service-package">
                <FontAwesomeIcon
                  className="service-icon"
                  icon={faCheckDouble}
                />
                <div className="service-info">
                  <span className="package-title">
                    Mock interview comprehensive package
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div className="service-package">
                <FontAwesomeIcon className="service-icon" icon={faQuestion} />
                <div className="service-info">
                  <span className="package-title">Job search package</span>
                </div>
              </div>
            </li>
            <li>
              <div className="service-package">
                <FontAwesomeIcon className="service-icon" icon={faMap} />
                <div className="service-info">
                  <span className="package-title">
                    Portfolio revamp package
                  </span>
                </div>
              </div>
            </li>
          </ul>

          <Button href="/plans-pricing" variant={"secondary"} size={"lg"}>
            Plans & Pricing
          </Button>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
