import React, {Fragment} from 'react'

import Container from './Container'

import screenshot from '../images/hero-screenshot.jpeg'

import classes from './Features.styles.scss'

const features = [
  {
    image: screenshot,
    title: 'Tout en un',
    content:
      'Vous pouvez suivre votre chiffre d’affaires encaissé sur 30 jours, les devis en cours et les factures en retard. factAE vous avertit si vous dépassez le plafond des micro-entrepreneurs. Pas besoin de vous creuser la tête !',
  },
  {
    image: screenshot,
    title: 'Devis, factures, avoirs',
    content:
      'Vous pouvez suivre votre chiffre d’affaires encaissé sur 30 jours, les devis en cours et les factures en retard. factAE vous avertit si vous dépassez le plafond des micro-entrepreneurs. Pas besoin de vous creuser la tête !',
  },
  {
    image: screenshot,
    title: 'Envoi et relance automatique',
    content:
      'Vous pouvez suivre votre chiffre d’affaires encaissé sur 30 jours, les devis en cours et les factures en retard. factAE vous avertit si vous dépassez le plafond des micro-entrepreneurs. Pas besoin de vous creuser la tête !',
  },
  {
    image: screenshot,
    title: 'Plus besoin de renseigner les infos de votre client !',
    content:
      'Vous pouvez suivre votre chiffre d’affaires encaissé sur 30 jours, les devis en cours et les factures en retard. factAE vous avertit si vous dépassez le plafond des micro-entrepreneurs. Pas besoin de vous creuser la tête !',
  },
]

function mapFeatures(callback) {
  return features.map((feature, index) => (
    <Fragment key={index}>
      {callback(feature, index + 2, index % 2 ? 'normal' : 'reverse')}
    </Fragment>
  ))
}

function Features() {
  return (
    <Container id="features" className={classes.container}>
      <h2 className={classes.title}>Fonctionnalités</h2>
      {mapFeatures((feature, gridRow, direction) => (
        <>
          <div className={classes.featureContent} data-direction={direction} style={{gridRow}}>
            <h3 className={classes.featureTitle}>{feature.title}</h3>
            <p className={classes.featureDesc}>{feature.content}</p>
          </div>
          <img
            className={classes.featureImage}
            src={feature.image}
            alt={feature.title}
            data-direction={direction}
            style={{gridRow}}
          />
        </>
      ))}
    </Container>
  )
}

export default Features
