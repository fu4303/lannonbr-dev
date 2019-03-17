import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import SEO from "../components/seo"
import EditSVG from "../images/edit.svg"

const MDXTemplate = ({ data }) => {
  let fileName = data.mdx.fileAbsolutePath.split("/").pop()

  return (
    <>
      <SEO title={data.mdx.frontmatter.title} />
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
      <p style={{ display: "flex", justifyContent: "flex-end" }}>
        <a
          href={`https://github.com/lannonbr/lannonbr.dev/blob/master/src/content/${fileName}`}
          style={{ display: "inline-flex", fontSize: 16 }}
        >
          <img src={EditSVG} alt="Edit SVG" />
          Edit this page on GitHub
        </a>
      </p>
    </>
  )
}

export const PageQuery = graphql`
  query MDXPageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
      fileAbsolutePath
      frontmatter {
        title
      }
    }
  }
`

export default MDXTemplate
