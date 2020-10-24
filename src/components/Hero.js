import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { useStaticQuery, graphql, Link } from 'gatsby'


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

  return (
    <div className="hero-container" style={{
      background: '#2d3047',
      backgroundImage: `
      radial-gradient(ellipse at center 50%,#18334f 0,#18334f 30%,#0e2439 60%,#0e2439 100%)
      `,
      minHeight: '50vh',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '3rem 1rem',
    }}>
      <div style={{
        minWidth: '300px',
        maxWidth: '500px',
        margin: '0 1rem',

      }}>
        <h1 style={{
          fontSize: '2rem'
        }}
        >Hi, I'm <Link to="/about" className="neon-glow-onHover">Jon Kurtis</Link>. I am a fullstack web developer and I make lightning fast web experiences on the JAMstack.</h1>
      </div>
      <div className="hero-image-container" style={{
        margin: '2rem 2rem 0 2rem',
        }}>
        <Link to="/about">
          <PreviewCompatibleImage imageInfo={data.markdownRemark.frontmatter.image} className="hero-image" />
        </Link>
      </div>
    </div>
  )
}

export default Hero
