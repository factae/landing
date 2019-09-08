import React from 'react'

import avatar from '../images/clement-douin.jpeg'
import Container from './Container'

import classes from './About.styles.scss'

function About() {
  return (
    <Container id="about" className={classes.container}>
      <h2 className={classes.title}>Pourquoi factAE ?</h2>
      <p className={classes.about}>
        factAE est un outil d'aide à la facturation dédié aux <strong>micro-entrepreneurs</strong>{' '}
        (anciennement auto-entrepreneurs). Son objectif est simple : permettre à tout
        micro-entrepreneur de gérer facilement et efficacement sa comptabilité pour 1€ par mois.
        Rien de plus.
      </p>
      <img className={classes.avatar} src={avatar} alt="Clément DOUIN" />
      <h3 className={classes.subtitle}>
        <strong>Clément DOUIN, </strong>
        fondateur
      </h3>
      <blockquote className={classes.biography}>
        &laquo; La comptabilité est le point noir de toutes entreprises. En tant que
        micro-entrepreneurs, nous avons la chance d'en avoir une simplifiée. Je trouvais les outils
        sur le marché bien trop complexes pour notre statut. C’est ainsi qu'est né factAE, un outil
        intuitif, économique et adapté au besoins comptables minimalistes des micro-entrepreneurs.
        &raquo;
      </blockquote>
    </Container>
  )
}

export default About
