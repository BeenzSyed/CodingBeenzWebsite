import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import get from "lodash/get"

import Layout from "../components/layout"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id} class="blog-posts">
          <h3
            style={{
              marginBottom: "10px",
            }}
          >
            <Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </Link>
          </h3>
          <Img
            sizes={post.node.frontmatter.featuredImage.childImageSharp.sizes}
          />
          <small>{post.node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
            author
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
    }
  }
`

export default BlogPage
