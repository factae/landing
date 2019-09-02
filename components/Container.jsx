import React from 'react'

import classes from './Container.styles.scss'

function Container({children}) {
  return <div className={classes.container}>{children}</div>
}

export default Container
