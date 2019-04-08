import React from "react"
import Link from "gatsby-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <div class="blog-post-template">
        <h1>{post.frontmatter.title}</h1>
        <h4>{post.frontmatter.date}</h4>
        <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date(formatString: "DD MMMM, YYYY")
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
