import React, {useRef} from 'react'

import Container from './Container'

import classes from './Try.styles.scss'

function Try() {
  const emailRef = useRef()

  function redirectToApp(event) {
    event.preventDefault()
    window.open(`${process.env.HOSTNAME_APP}/auth?email=${emailRef.current.value}`, '_blank')
  }

  return (
    <div className={classes.background}>
      <Container className={classes.container}>
        <h2 className={classes.title}>Essayez gratuitement</h2>
        <form className={classes.form} onSubmit={redirectToApp}>
          <label className={classes.label} htmlFor="try-email">
            Email
          </label>
          <input
            id="try-email"
            ref={emailRef}
            className={classes.input}
            type="text"
            placeholder="Email"
            required
          />
          <button className={classes.button}>Essayer</button>
        </form>
      </Container>
    </div>
  )
}

export default Try
