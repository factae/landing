import React from 'react'

import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import linkedIn from '../images/icon-linkedin.svg'
import Container from './Container'
import Logo from './Logo'
import Link from './Link'

import classes from './Footer.styles.scss'

function Footer() {
  return (
    <footer className={classes.background}>
      <Container className={classes.container}>
        <Logo className={classes.logo} />
        <span className={classes.about}>
          <a href="#">Présentation</a>
        </span>
        <span className={classes.features}>
          <a href="#">Fonctionnalités</a>
        </span>
        <span className={classes.license}>
          <a href="#">Licence</a>
        </span>
        <span className={classes.confidentiality}>
          <a href="#">Confidentialité</a>
        </span>
        <span className={classes.mentions}>
          <a href="#">Mentions légales</a>
        </span>
        <div className={classes.medias} href="#">
          <span>
            <Link className={classes.media} to="https://www.facebook.com/">
              <img src={facebook} alt="Facebook" />
            </Link>
          </span>
          <span>
            <Link className={classes.media} to="https://twitter.com/">
              <img src={twitter} alt="Facebook" />
            </Link>
          </span>
          <span>
            <Link className={classes.media} to="https://www.linkedin.com">
              <img src={linkedIn} alt="Facebook" />
            </Link>
          </span>
        </div>
        <span className={classes.copyright}>© 2019 factAE. Tous droits réservés.</span>
      </Container>
    </footer>
  )
}

export default Footer
