import React, {Fragment, useEffect, useRef} from 'react'
import {useSpring, animated} from 'react-spring'

import screenshot from '../images/hero-screenshot.jpeg'
import Container from './Container'

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
      {callback({feature, gridRow: index + 2, direction: index % 2 ? 'normal' : 'reverse'})}
    </Fragment>
  ))
}

const transform = (x, y, z) => `translateX(${x}px) perspective(600px) rotateY(${y}deg) scale(${z})`

function Feature({direction, gridRow, feature}) {
  const ratio = direction === 'normal' ? 1 : -1
  const ref = useRef()
  const [spring, set] = useSpring(() => ({
    config: {mass: 4, tension: 550, friction: 100},
    opacity: 0,
    transform: [1000 * ratio, 50 * ratio, 0],
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
        data-direction={direction}
        style={{
          gridRow,
          opacity: spring.opacity,
          transform: spring.transform.interpolate(transform),
        }}
      />
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
