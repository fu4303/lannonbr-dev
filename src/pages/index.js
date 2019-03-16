import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

import Folder from "../images/folder.svg"
import { createGlobalStyle } from "styled-components"

const SplitBoxStyles = createGlobalStyle`
  .splitBox {
    display: flex;
  }

  @media (max-width: 600px) {
    .splitBox {
      display: block;
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SplitBoxStyles />
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
      </div>
      <img src={Folder} alt={`man standing near folder`} />
    </div>
  </>
)

export const PageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___title }) {
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
