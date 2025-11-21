import { useEffect, useRef, useState } from 'react'

// Custom cursor: cream dot + mauve ring on interactive hover and image view label
export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [isImageHover, setIsImageHover] = useState(false)

  useEffect(() => {
    const move = (e) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${x + 16}px, ${y + 16}px, 0)`
      }
    }

    const handleOver = (e) => {
      const t = e.target
      if (t.closest('[data-cursor="interactive"]')) {
        setIsHover(true)
      }
      if (t.closest('[data-cursor="image"]')) {
        setIsImageHover(true)
      }
    }

    const handleOut = (e) => {
      const t = e.target
      if (t.closest('[data-cursor="interactive"]')) {
        setIsHover(false)
      }
      if (t.closest('[data-cursor="image"]')) {
        setIsImageHover(false)
      }
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('mouseover', handleOver, true)
    window.addEventListener('mouseout', handleOut, true)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('mouseover', handleOver, true)
      window.removeEventListener('mouseout', handleOut, true)
    }
  }, [])

  return (
    <>
      {/* Cream dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[1000] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out ${isImageHover ? 'opacity-0' : 'opacity-100'}`}
        style={{ mixBlendMode: 'normal' }}
      >
        <div className="w-2 h-2 rounded-full bg-cream" />
      </div>

      {/* Mauve ring on hover */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out ${isHover ? 'opacity-100 scale-125' : 'opacity-0 scale-100'}`}
      >
        <div className="w-8 h-8 rounded-full border border-mauve/80" />
      </div>

      {/* Image hover label */}
      <div
        ref={labelRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999] transition-opacity duration-150 ${isImageHover ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 text-xs backdrop-blur-md bg-stone/20">
          View
        </div>
      </div>
    </>
  )
}
