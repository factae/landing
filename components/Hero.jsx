import React from 'react'
import {useSpring, animated, interpolate} from 'react-spring'

import background from '../images/hero-background.png'
import screenshot from '../images/hero-screenshot.jpeg'
import Container from './Container'
import Navbar from './Navbar'

import classes from './Hero.styles.scss'

const move = (x, y) => [-(y - window.innerHeight / 2) / 200, (x - window.innerWidth / 2) / 250]
const transform = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`

function Hero() {
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

  return (
    <section
      className={classes.background}
      onMouseMove={({clientX: x, clientY: y}) => set({xy: move(x, y)})}
      style={{backgroundImage: `url(${background})`}}
    >
      <Navbar />
      <Container className={classes.container}>
        <h1 className={classes.title}>
          <span>Un outil comptable</span>
          <span>dédié aux micro-entrepreneurs &hellip;</span>
          <span>au prix d'une baguette !</span>
        </h1>
        <div className={classes.form}>
          <input className={classes.input} type="text" placeholder="Email" />
          <button className={classes.button}>Essayer</button>
        </div>
        <h2 className={classes.h2}>
          <span className={classes.h2amount}>1€</span>
          <span className={classes.h2slash}>/</span>
          <span className={classes.h2unit}>mois</span>
          <div className={classes.h2sub}>Gratuit la première année</div>
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
