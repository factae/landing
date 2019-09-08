import {useEffect, useState} from 'react'

const scrolls = {}

export function registerScroll(id, ref) {
  scrolls[id] = ref
}

export function useScroll() {
  const [id, setId] = useState()

  useEffect(() => {
    if (id === '#') {
      history.pushState(null, null, '/')
      window.scrollTo({top: 0, behavior: 'smooth'})
      setId(null)
    } else if (scrolls[id]) {
      history.pushState(null, null, '#' + id)
      scrolls[id].scrollIntoView({behavior: 'smooth'})
      setId(null)
    }
  }, [id])

  return setId
}
