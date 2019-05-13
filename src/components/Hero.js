import React from 'react'

const Hero = () => {
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
    </div>
  )
}

export default Hero
