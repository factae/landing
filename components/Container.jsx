import React from 'react'
import classNames from 'classnames'

import classes from './Container.styles.scss'

function Container({children, className}) {
  return <section className={classNames(classes.container, className)}>{children}</section>
}

export default Container
