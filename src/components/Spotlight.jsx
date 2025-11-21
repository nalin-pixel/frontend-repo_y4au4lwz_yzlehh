import { useEffect, useRef } from 'react'

// Spotlight background that follows cursor using radial gradient of stone
export default function Spotlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const { clientX: x, clientY: y } = e
      const rect = document.documentElement
      const w = rect.clientWidth
      const h = rect.clientHeight
      const nx = (x / w) * 100
      const ny = (y / h) * 100
      el.style.background = `radial-gradient(200px at ${nx}% ${ny}%, rgba(92,82,91,0.35), transparent 60%)`
    }

    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  return <div ref={ref} className="pointer-events-none fixed inset-0 z-10" />
}
