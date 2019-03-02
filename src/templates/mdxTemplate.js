import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MDXTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.mdx.frontmatter.title} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    </Layout>
  )
}

export const PageQuery = graphql`
  query MDXPageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      frontmatter {
        title
      }
    }
  }
`

export default MDXTemplate
