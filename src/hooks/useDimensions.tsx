import { useEffect, useState } from 'react'

import { getWindowDimensions } from '../services/util.service'

export function useDimensions() {
  const [dimensions, setDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimensions])

  return dimensions
}
