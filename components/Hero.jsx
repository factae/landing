import React from 'react'
import {useSpring, animated, interpolate} from 'react-spring'

import background from '../images/hero-background.png'
import screenshot from '../images/hero-screenshot.jpeg'
import Container from './Container'
import Navbar from './Navbar'

import classes from './Hero.styles.scss'

const setPerspective = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 80,
]

const perspective = (x, y) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg)`
const scale = x => `scale(${x})`
const shadow = x => `0 2px ${x}px 0 rgba(0, 0, 0, 0.4)`

function Hero() {
  const [spring, set] = useSpring(() => ({
    config: {mass: 2, tension: 350, friction: 40},
    from: {
      perspective: [0, 0],
      scale: 0,
      shadow: 4,
    },
    to: {
      scale: 1,
    },
  }))

  return (
    <section
      className={classes.background}
      onMouseMove={({clientX: x, clientY: y}) => set({perspective: setPerspective(x, y)})}
      style={{backgroundImage: `url(${background})`}}
    >
      <Navbar />
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <div>
              <h1 className={classes.h1}>
                <span>Un outil de facturation ...</span>
                <span className={classes.h1sub}>... au prix d'une baguette !?</span>
              </h1>
            </div>
            <div>
              <input className={classes.input} type="text" placeholder="Email" />
              <button className={classes.button}>Essayer</button>
            </div>
          </div>
          <div className={classes.right}>
            <h2 className={classes.h2}>
              1€
              <span className={classes.h2slash}>/</span>
              <span className={classes.h2unit}>mois</span>
            </h2>
            <div className={classes.h2sub}>Gratuit la première année</div>
            <animated.img
              className={classes.screenshot}
              src={screenshot}
              alt="Capture d'écran de factAE"
              onMouseEnter={() => set({scale: 1.1, shadow: 80})}
              onMouseLeave={() => set({scale: 1, shadow: 4})}
              style={{
                boxShadow: spring.shadow.interpolate(shadow),
                transform: interpolate(
                  [spring.perspective.interpolate(perspective), spring.scale.interpolate(scale)],
                  (...transform) => transform.join(' '),
                ),
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
