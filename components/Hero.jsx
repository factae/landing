import React from 'react'

import Container from './Container'
import Navbar from './Navbar'

import classes from './Hero.styles.scss'

function Hero() {
  return (
    <section className={classes.background}>
      <Navbar />
      <Container>
        <div className={classes.container}>
          <div className={classes.left}>
            <div>
              <h1 className={classes.h1}>
                <span>Facture. Envoie.</span>
                <span className={classes.h1sub}>au prix d'une baguette !</span>
              </h1>
            </div>
            <div>
              <input className={classes.input} type="text" placeholder="Email" />
              <button className={classes.button}>J'essaie</button>
            </div>
          </div>
          <div className={classes.right}>
            <h2 className={classes.h2}>
              1€
              <span className={classes.h2slash}>/</span>
              <span className={classes.h2unit}>mois</span>
            </h2>
            <div className={classes.h2sub}>Gratuit pendant 1 an</div>
            <img src="#" alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
