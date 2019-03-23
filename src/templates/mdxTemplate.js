import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-mdx"
import SEO from "../components/seo"
import EditSVG from "../images/edit.svg"

const EditLink = ({ fileName }) => (
  <p style={{ display: "flex", justifyContent: "flex-end" }}>
    <a
      href={`https://github.com/lannonbr/lannonbr.dev/blob/master/src/content/${fileName}`}
      style={{ display: "inline-flex", fontSize: 16 }}
    >
      <img src={EditSVG} alt="Edit SVG" />
      Edit this page on GitHub
    </a>
  </p>
)

const MDXTemplate = ({ data }) => {
  let fileName = data.mdx.fileAbsolutePath.split("/").pop()
  let title = data.mdx.frontmatter.title

  return (
    <>
      <SEO title={title} />
      <h1>{title}</h1>
      <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
      <EditLink fileName={fileName} />
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
