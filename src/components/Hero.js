import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { useStaticQuery, graphql } from 'gatsby'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
        markdownRemark(frontmatter: {
          templateKey: {
            eq: "about-page"
          }
        }) {
          id
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
  `)

  console.log(JSON.stringify(data.markdownRemark.frontmatter.image))

  return (
    <div style={{
      background: '#2d3047',
      minHeight: '50vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 2rem',
      flexWrap: 'wrap'
    }}>
      <div style={{
        minWidth: '300px',
        maxWidth: '500px',
        margin: '0 1rem',

      }}>
        <h1 style={{
          fontSize: '2.25rem'
        }}
        >Hi, I'm Jon Kurtis. I make lightning fast web experiences.</h1>
      </div>
      <div style={{
        width: '150px',
        minWidth: '150px',
        borderRadius: '50%',
        margin: '2rem 2rem 0 2rem'
        }}>
        <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.image} styles={{borderRadius: '50%'}}/>
      </div>
    </div>
  )
}

export default Hero
