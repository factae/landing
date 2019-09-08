import React, {useRef} from 'react'
import {useSpring, animated} from 'react-spring'

import background from '../images/hero-background.png'
import screenshot from '../images/hero-screenshot.jpeg'
import Container from './Container'
import Navbar from './Navbar'

import classes from './Hero.styles.scss'

const move = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 250]
const transform = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`

function Hero() {
  const emailRef = useRef()
  const [spring, set] = useSpring(() => ({
    config: {mass: 2, tension: 350, friction: 40},
    from: {
      xy: [0, 0],
      scale: 0,
    },
    to: {
      scale: 1,
    },
  }))

  function redirectToApp(event) {
    event.preventDefault()
    window.open(`${process.env.HOSTNAME_APP}/auth?email=${emailRef.current.value}`, '_blank')
  }

  return (
    <section
      className={classes.background}
      onMouseMove={({clientX: x, clientY: y}) => set({xy: move(x, y)})}
      style={{backgroundImage: `url(${background})`}}
    >
      <Navbar />
      <Container className={classes.container}>
        <h1 className={classes.title}>
          <span>L'outil comptable</span>
          <span>au prix d'une baguette !</span>
        </h1>
        <p className={classes.about}>
          factAE est un <strong>outil comptable</strong> dédié aux{' '}
          <strong>micro-entrepreneurs</strong> (anciennement auto-entrepreneurs). Son objectif est
          simple : permettre à tout micro-entrepreneur de gérer facilement et efficacement sa
          comptabilité pour <strong>1€/mois</strong>. Rien de plus.
        </p>
        <form className={classes.form} onSubmit={redirectToApp}>
          <label className={classes.label} htmlFor="hero-email">
            Email
          </label>
          <input
            ref={emailRef}
            id="hero-email"
            className={classes.input}
            type="email"
            placeholder="Email"
            required
          />
          <button className={classes.button}>Essayer</button>
        </form>
        <h2 className={classes.subtitle}>
          <span className={classes.subtitleAmount}>1€</span>
          <span className={classes.subtitleSlash}>/</span>
          <span className={classes.subtitleUnit}>mois</span>
          <div className={classes.subtitleContent}>Gratuit la première année</div>
        </h2>
        <animated.img
          className={classes.screenshot}
          src={screenshot}
          alt="Capture d'écran de factAE"
          style={{transform: spring.xy.interpolate(transform)}}
        />
      </Container>
    </section>
  )
}

export default Hero
