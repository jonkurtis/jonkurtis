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
    }}>
      <div style={{
        //maxWidth: '800px',
        //display: 'flex',

      }}>
        <h1 style={{
          fontSize: '2rem'
        }}
        >Hi, I'm Jon Kurtis. I make lightning fast web experiences.</h1>
        <div style={{
          maxWidth: '150px',
          borderRadius: '50%',
          }}>
          <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.image} styles={{borderRadius: '50%'}}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
