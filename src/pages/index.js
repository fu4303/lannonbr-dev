import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Folder from "../images/folder.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="splitBox">
      <div
        style={{
          paddingRight: 20,
        }}
      >
        <h1>Hello!</h1>
        <p>
          This site will be a place where I can use to reference resources that
          I reccomend to others.
        </p>
      </div>
      <img src={Folder} alt={`man standing near folder`} />
    </div>
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
