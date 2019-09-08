import React from 'react'

import Container from './Container'

import classes from './Try.styles.scss'

function Try() {
  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <h2 className={classes.title}>Essayez gratuitement</h2>
        <div className={classes.form}>
          <label className={classes.label} htmlFor="try-email">
            Email
          </label>
          <input id="try-email" className={classes.input} type="text" placeholder="Email" />
          <button className={classes.button}>Essayer</button>
        </div>
      </Container>
    </div>
  )
}

export default Try
