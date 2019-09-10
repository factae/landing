import React from 'react'
import NextLink from 'next/link'
import classNames from 'classnames'

import {useScroll} from '../utils/scroll'
import classes from './Link.styles.scss'

function Link({to, className: customClassName, children, ...props}) {
  const className = classNames(classes.link, customClassName)
  const scrollTo = useScroll()

  function scrollToId(event) {
    event.preventDefault()
    scrollTo(to === '#' ? '#' : to.slice(1))
  }

  if (to.startsWith('/')) {
    return (
      <NextLink href={to}>
        <a className={className} {...props}>
          {children}
        </a>
      </NextLink>
    )
  }

  if (to.startsWith('#')) {
    return (
      <NextLink href={to}>
        <a className={className} onClick={scrollToId} {...props}>
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <NextLink href={to}>
      <a className={className} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export default Link
