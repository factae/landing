import React from 'react'

import Container from './Container'
import Link from './Link'
import Logo from './Logo'

import classes from './Navbar.styles.scss'

function Navbar() {
  return (
    <div className={classes.container}>
      <Container>
        <nav className={classes.nav}>
          <div className={classes.left}>
            <Logo />
          </div>
          <div className={classes.right}>
            <Link className={classes.link} to="/#">
              À propos
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
          </div>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
