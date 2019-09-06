import React from 'react'

import Container from './Container'

import background from '../images/about-background.jpeg'
import player from '../images/about-player.png'

import classes from './About.styles.scss'

function About() {
  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>À propos</h2>
      <img className={classes.video} src={background} alt="Vidéo de présentation de factAE" />
      <img className={classes.player} src={player} alt="" />
      <p className={classes.content}>
        Que vous soyez artisan, commerçant ou profession libérale, FactAE est un outil d'aide à la
        facturation pour micro-entrepreneurs à 1€/mois. C’est simple : il gére vos clients, les
        devis et les factures facilement et efficacement. Rien de plus.
      </p>
    </Container>
  )
}

export default About
