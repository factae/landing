import React from 'react'

import avatar from '../images/clement-douin.jpeg'
import Container from './Container'

import classes from './Biography.styles.scss'

function Biography() {
  return (
    <Container className={classes.container}>
      <img className={classes.avatar} src={avatar} alt="Clément DOUIN" />
      <h3 className={classes.title}>
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

export default Biography
