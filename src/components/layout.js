import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header/"
import Footer from "./footer"

// import image from "../images/company-hero-light.webp"

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css"

// Importing Materialize CSS & JS
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
