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
        <span className={classes.logo}>
          <Link to="#">
            <Logo />
          </Link>
        </span>
        <span className={classes.about}>
          <Link to="#">À propos</Link>
        </span>
        <span className={classes.features}>
          <Link to="#features">Fonctionnalités</Link>
        </span>
        <span className={classes.license}>
          <Link to="#license">Licence</Link>
        </span>
        <span className={classes.confidentiality}>
          <Link to="#confidentiality">Confidentialité</Link>
        </span>
        <span className={classes.mentions}>
          <Link to="#legal-mentions">Mentions légales</Link>
        </span>
        <div className={classes.medias}>
          <span>
            <Link className={classes.media} to="https://www.facebook.com/factAE-114400436596751">
              <img src={facebook} alt="Facebook" />
            </Link>
          </span>
          <span>
            <Link className={classes.media} to="https://twitter.com/factaeOfficial">
              <img src={twitter} alt="Facebook" />
            </Link>
          </span>
          <span>
            <Link className={classes.media} to="https://www.linkedin.com/company/factae">
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
