import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515777315835-281b94c9589e?q=80&w=1200&auto=format&fit=crop',
]

export default function ParallaxStrip({ onOpen }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const [active, setActive] = useState(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const handleEnter = (idx) => setActive(idx)
    const handleLeave = () => setActive(null)
    const cards = container.querySelectorAll('[data-card]')
    cards.forEach((card, i) => {
      card.addEventListener('mouseenter', () => handleEnter(i))
      card.addEventListener('mouseleave', handleLeave)
    })
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mouseenter', handleEnter)
        card.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <section ref={ref} className="relative py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-cream text-5xl mb-10">Featured Events</h2>
      </div>

      <motion.div style={{ x }} className="flex gap-8 px-8">
        {images.map((src, idx) => (
          <div
            key={idx}
            data-card
            data-cursor="image"
            className={`group relative w-[360px] h-[520px] overflow-hidden rounded-3xl border ${active !== null && active !== idx ? 'opacity-40' : 'opacity-100'} transition-opacity duration-200 border-mauve/30`}
          >
            <img src={src} alt="event" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="backdrop-blur-md bg-stone/30 rounded-2xl p-4 border border-mauve/30">
                <div className="text-cream text-lg">Aurora Sessions</div>
                <div className="text-cream/70 text-sm">Berlin • Fri 11:30 PM</div>
                <button onClick={() => onOpen(idx)} data-cursor="interactive" className="mt-3 px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs">Quick View</button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
