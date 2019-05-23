import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { kebabCase } from 'lodash'
import Hero from '../components/Hero'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Hero />
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="has-text-weight-bold is-size-2">Blog Posts</h2>
            </div>
            <div className="container" style={{
              display: 'flex'
            }}>
            {posts
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ 
                    width: '400px',
                    background: 'white',
                    boxShadow: `rgba(0, 0, 0, 0.1) 0px 10px 20px, rgba(0, 0, 0, 0.2) 0px 6px 6px`,
                    borderRadius: '10px',
                    margin: 'auto'
                  }}
                  key={post.id}
                >
                <Link to={post.fields.slug}>
                  <PreviewCompatibleImage imageInfo={post.frontmatter.image} />
                </Link>
                  <div
                    style={{padding: '2em 2em',}}
                  >
                    <p>
                      <Link className="has-text-primary" to={post.fields.slug}>
                        {post.frontmatter.title}
                      </Link>
                      <p style={{fontFamily: 'monospace'}} >
                        <small>{post.frontmatter.date}</small>
                      </p>
                      <ul className="taglist">
                        {post.frontmatter.tags.map(tag => (
                          <li key={tag + `tag`}>
                            <Link className="button is-small" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                          </li>
                        ))}
                      </ul>
                    </p>
                    <p>
                      <Link className="button is-link" to={post.fields.slug}>
                        Read Post →
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`
