import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'

const Navbar = () => {
   return (
  <nav className="" role="navigation" aria-label="main-navigation"
    style={{
      backgroundColor: '#0e2439',
    }}
  >
    <div className="container"
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="navbar-brand"
        style={{
          flexGrow: '1',
        }}
      >
        <Link to="/" className="navbar-item" title="Logo"
          style={{
            fontSize: '2rem',
            textTransform: 'uppercase',
            fontFamily: 'Monoton',
            color: '#FF1177',
            textShadow: `0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #FF1177, 0 0 35px #FF1177, 0 0 40px #FF1177, 0 0 50px #FF1177, 0 0 75px #FF1177`
          }}
        >
          JonKurtis
        </Link>
      </div>
      <div id="navMenu" 
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
      <div className=" has-text-centered"
      style={{
        display: 'flex',
        fontSize: '1.25rem',
        textTransform: 'uppercase',
      }}
      >
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-end has-text-centered"
      style={{
        display: 'flex',
      }}
      >
        <a
          className="navbar-item"
          href="https://github.com/JonKurtis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">
            <img src={github} alt="Github" />
          </span>
        </a>
      </div>
      </div>
    </div>
  </nav>
  )}

export default Navbar
