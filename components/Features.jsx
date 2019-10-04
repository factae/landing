import React, {Fragment, useEffect, useRef} from 'react'
import {useSpring, animated} from 'react-spring'

import featureA from '../images/feature-a.jpeg'
import featureB from '../images/feature-b.jpeg'
import featureC from '../images/feature-c.jpeg'
import featureD from '../images/feature-d.jpeg'
import featureE from '../images/feature-e.jpeg'
import featureSoon from '../images/hero-screenshot.jpeg'
import Container from './Container'

import classes from './Features.styles.scss'

const features = [
  {
    image: featureA,
    title: 'Gestion simplifiée',
    content: `Gérez vos clients. Gérez vos documents (devis, factures, avoirs). Visualisez votre chiffre d'affaire, vos devis en cours, vos paiements en attente, vos seuils.`,
  },
  {
    image: featureB,
    title: 'Registre automatique',
    content: `Tenir un livre des recettes est obligatoire. factAE le fait pour vous, en se basant sur vos factures. Vous avez également accès à un registre des achats si votre activité le requiert.`,
  },
  {
    image: featureC,
    title: 'Paiement sécurisé en anonyme',
    content: `L'abonnement est payable par carte bancaire. Le paiement est totalement sécurisé et anonyme (aucune donnée n'est collectée).`,
  },
  {
    image: featureD,
    title: 'Support',
    content: `Une question ? Un avis ? Un bug ? Une nouvelle fonctionnalité à proposer ? N'hésitez-pas à nous contacter, nous nous ferons un plaisir de vous répondre.`,
  },
  {
    image: featureE,
    title: 'Envoi / relance automatique',
    content: `Envoyez directement vos documents par mail via l'application. Réduisez vos impayés grâce aux relances automatiques.`,
  },
  {
    soon: true,
    image: featureSoon,
    title: 'Ne renseignez plus vous-même vos fiches clients',
    content: `factAE offre la possibilité de demander à vos clients leurs informations via un formulaire. Une fois saisies, les informations s'intègrent directement à votre compte.`,
  },
  {
    soon: true,
    image: featureSoon,
    title: 'Signature et règlement en ligne',
    content: `Grâce à la blockchain, faites signer vos devis et faites-vous régler en ligne rapidement.`,
  },
]

function mapFeatures(callback) {
  return features.map((feature, index) => (
    <Fragment key={index}>
      {callback({feature, gridRow: index + 2, direction: index % 2 ? 'normal' : 'reverse'})}
    </Fragment>
  ))
}

const transform = (x, y, z) => `translateX(${x}px) perspective(600px) rotateY(${y}deg) scale(${z})`

function Feature({direction, gridRow, feature}) {
  const ratio = direction === 'normal' ? 1 : -1
  const ref = useRef()
  const [spring, set] = useSpring(() => ({
    config: {mass: 1, tension: 150, friction: 40},
    opacity: 0,
    transform: [750 * ratio, 100 * ratio, 0],
  }))

  function handleScroll() {
    if (!ref.current) return
    const top = ref.current.offsetTop
    const scroll = window.scrollY

    if (top < scroll + window.innerHeight * 0.7) {
      set({opacity: 1, transform: [0, 0, 1]})
      window.removeEventListener('scroll', handleScroll)
    }
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className={classes.featureContent} data-direction={direction} style={{gridRow}}>
        <h3 className={classes.featureTitle}>{feature.title}</h3>
        <p className={classes.featureDesc}>{feature.content}</p>
      </div>
      <animated.img
        ref={ref}
        className={classes.featureImage}
        src={feature.image}
        alt={feature.title}
        data-soon={feature.soon}
        data-direction={direction}
        style={{
          gridRow,
          opacity: spring.opacity,
          transform: spring.transform.interpolate(transform),
        }}
      />
      {feature.soon && (
        <animated.div
          className={classes.featureSoon}
          data-direction={direction}
          style={{
            gridRow,
            opacity: spring.opacity,
            transform: spring.transform.interpolate(transform),
          }}
        />
      )}
    </>
  )
}

function Features() {
  return (
    <Container id="features" className={classes.container}>
      <h2 className={classes.title}>Fonctionnalités</h2>
      {mapFeatures(props => (
        <Feature {...props} />
      ))}
    </Container>
  )
}

export default Features
