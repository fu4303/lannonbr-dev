/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import githubLogo from "../images/github.svg"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              © {new Date().getFullYear()} Benjamin Lannon, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
            <span>
              <img
                src={githubLogo}
                alt="GitHub logo"
                style={{ marginBottom: 0 }}
              />{" "}
              <a href="https://github.com/lannonbr/lannonbr.dev">
                Source on GitHub
              </a>
            </span>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
