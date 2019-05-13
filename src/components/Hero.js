import React from 'react'
//import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
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
            title
          }
        }
      }
  `)

  console.log(JSON.stringify(data))

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
        padding: '2rem 4rem',
        maxWidth: '800px',
      }}>
        <h1 style={{
          fontSize: '3rem'
        }}
        >Hi, I'm Jon Kurtis. I make lightning fast web experiences.</h1>
      </div>
      {/* <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.} /> */}
    </div>
  )
}

export default Hero
