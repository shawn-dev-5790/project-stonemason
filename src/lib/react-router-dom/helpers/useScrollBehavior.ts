import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useScrollBehavior = (x: number = 0, y: number = 0) => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(x, y)
  }, [location.state, x, y])
}
