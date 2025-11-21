import { useState } from 'react'
import { motion } from 'framer-motion'
import Cursor from './components/Cursor'
import Spotlight from './components/Spotlight'
import FourCorners from './components/FourCorners'
import Hero from './components/Hero'
import ParallaxStrip from './components/ParallaxStrip'
import SideDrawer from './components/SideDrawer'

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen bg-night text-cream relative overflow-x-hidden">
      {/* Interactive background spotlight */}
      <Spotlight />

      {/* Custom cursor (desktop only) */}
      <div className="hidden md:block"><Cursor /></div>

      {/* Four corner navigation */}
      <FourCorners />

      {/* Center stage: Hero */}
      <Hero />

      {/* Featured events strip with parallax */}
      <ParallaxStrip onOpen={() => setDrawerOpen(true)} />

      {/* Campaign side drawer */}
      <SideDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Mouse trail glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        style={{ background: 'radial-gradient(600px at 50% 50%, rgba(131,113,121,0.15), transparent 60%)' }}
      />
    </div>
  )
}

export default App
