import React from 'react'

import Container from './Container'
import IconFree from './IconFree'
import IconSimple from './IconSimple'
import IconSecure from './IconSecure'

import classes from './Engagements.styles.scss'

function Engagements() {
  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>factAE s'engage</h2>
      <div className={classes.engagement}>
        <IconFree />
        <h3 className={classes.engagementTitle}>Un essai gratuit de 30 jours</h3>
        <div className={classes.engagementDesc}>
          Testez factAE gratuitement et sans engagement pendant 30 jours.
        </div>
      </div>
      <div className={classes.engagement}>
        <IconSimple />
        <h3 className={classes.engagementTitle}>Un outil simple</h3>
        <div className={classes.engagementDesc}>
          factAE se veut simple et intuitif, afin que n'importe quel micro-entrepreneur puisse tenir
          sa comptabilité.
        </div>
      </div>
      <div className={classes.engagement}>
        <IconSecure />
        <h3 className={classes.engagementTitle}>Un espace sécurisé</h3>
        <div className={classes.engagementDesc}>
          Vos données personnelles ne sont en aucun cas cédées ou vendues à des tiers. Le paiement
          par carte bancaire est sécurisé et anonyme.
        </div>
      </div>
    </Container>
  )
}

export default Engagements
