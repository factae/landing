import React from 'react'

import Container from './Container'
import Link from './Link'
import Logo from './Logo'

import classes from './Navbar.styles.scss'

function Navbar() {
  return (
    <Container className={classes.container}>
      <nav className={classes.nav}>
        <span className={classes.logo}>
          <Link to="#">
            <Logo />
          </Link>
        </span>
        <Link className={classes.link} to="#about">
          Pourquoi ?
        </Link>
        <Link className={classes.link} to="#features">
          Fonctionnalités
        </Link>
        <Link className={classes.button} to={process.env.HOSTNAME_APP + '/auth'}>
          Créer un compte
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
