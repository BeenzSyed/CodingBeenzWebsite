// const path = require("path")

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators

//   const postTemplate = path.resolve("src/templates/blog-post.js")

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             html
//             id
//             frontmatter {
//               path
//               title
//               date(formatString: "DD MMMM, YYYY")
//               author
//               featuredImage {
//                 childImageSharp {
//                   sizes(maxWidth: 630) {
//                     src
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `).then(res => {
//     if (res.errors) {
//       return Promise.reject(res.errors)
//     }
//     res.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: postTemplate,
//       })
//     })
//   })
// }

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }
