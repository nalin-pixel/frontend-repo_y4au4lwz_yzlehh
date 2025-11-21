import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2])

  return (
    <section ref={ref} className="relative h-[140vh] flex items-center justify-center">
      {/* Big headline behind */}
      <motion.h1
        className="absolute inset-0 flex items-center justify-center text-[10vw] leading-none font-semibold text-cream/10 select-none"
        style={{ zIndex: 5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        UNLEASH THE NIGHT
      </motion.h1>

      {/* Floating 3D container */}
      <motion.div
        className="relative z-20 aspect-video w-[58vw] rounded-3xl overflow-hidden border border-mauve/30 shadow-[0_0_60px_rgba(131,113,121,0.25)] bg-night/40 backdrop-blur-md"
        style={{ scale }}
      >
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      {/* subtle grain overlay */}
      <div className="pointer-events-none absolute inset-0 z-30 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
    </section>
  )
}
