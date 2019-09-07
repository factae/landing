import React from 'react'

import Container from './Container'

import classes from './Try.styles.scss'

function Try() {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <h2 className={classes.title}>Essayez gratuitement</h2>
        <div className={classes.form}>
          <input className={classes.input} type="text" placeholder="Email" />
          <button className={classes.button}>Essayer</button>
        </div>
      </Container>
    </div>
  )
}

export default Try
