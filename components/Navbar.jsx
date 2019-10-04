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
          <Link to="#" title="factAE">
            <Logo />
          </Link>
        </span>
        <Link className={classes.link} to="#features">
          Fonctionnalités
        </Link>
        <Link className={classes.greenButton} to={process.env.HOSTNAME_APP + '/auth'}>
          Créer un compte
        </Link>
        <Link className={classes.blueButton} to={process.env.HOSTNAME_APP + '/demo'}>
          Démo →
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
