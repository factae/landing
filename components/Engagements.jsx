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
        <h3 className={classes.engagementTitle}>Gratuit sur 1 an</h3>
        <div className={classes.engagementDesc}>
          Le paiement par Carte Bancaire est sécurisé. Vos données restent évidemment
          confidentielles.
        </div>
      </div>
      <div className={classes.engagement}>
        <IconSimple />
        <h3 className={classes.engagementTitle}>Un outil simple</h3>
        <div className={classes.engagementDesc}>
          Le paiement par Carte Bancaire est sécurisé. Vos données restent évidemment
          confidentielles.
        </div>
      </div>
      <div className={classes.engagement}>
        <IconSecure />
        <h3 className={classes.engagementTitle}>Un espace sécurisé</h3>
        <div className={classes.engagementDesc}>
          Le paiement par Carte Bancaire est sécurisé. Vos données restent évidemment
          confidentielles.
        </div>
      </div>
    </Container>
  )
}

export default Engagements
