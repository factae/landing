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
          <Logo />
        </span>
        <Link className={classes.link} to="/#">
          Présentation
        </Link>
        <Link className={classes.link} to="/#">
          Fonctionnalités
        </Link>
        <Link className={classes.link} to="/#">
          Blog
        </Link>
        <Link className={classes.button} to="/#">
          Créer un compte
        </Link>
      </nav>
    </Container>
  )
}

export default Navbar
