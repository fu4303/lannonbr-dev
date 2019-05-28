import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
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
      <h2 style={{ fontSize: 16 }}>
        Posted: {moment(data.mdx.frontmatter.date).format("ll")}
      </h2>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <EditLink fileName={fileName} />
    </>
  )
}

export const PageQuery = graphql`
  query MDXPageQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fileAbsolutePath
      frontmatter {
        title
        date
      }
    }
  }
`

export default MDXTemplate
