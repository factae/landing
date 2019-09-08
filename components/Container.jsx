import React, {useEffect, useRef} from 'react'
import classNames from 'classnames'

import {registerScroll} from '../utils/scroll'
import classes from './Container.styles.scss'

function Container({id, className, children}) {
  const ref = useRef()

  useEffect(() => {
    if (id && ref.current) {
      registerScroll(id, ref.current)
    }
  }, [ref.current])

  return (
    <section ref={ref} {...(id ? {id} : {})} className={classNames(classes.container, className)}>
      {children}
    </section>
  )
}

export default Container
