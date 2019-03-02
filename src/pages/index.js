import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello!</h1>
    <p>
      This site will be a place where I can use to reference resources that I
      reccomend to others.
    </p>
    <p>
      If you want to head to my current site, head to{" "}
      <a href="https://lannonbr.com">lannonbr.com</a>
    </p>
    <h2>Page Index</h2>
    <ul>
      {data.allMdx.edges.map(({ node }) => {
        return (
          <li>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        )
      })}
    </ul>
  </Layout>
)

export const PageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default IndexPage
