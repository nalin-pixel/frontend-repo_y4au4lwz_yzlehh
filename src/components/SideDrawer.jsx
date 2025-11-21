import { AnimatePresence, motion } from 'framer-motion'

export default function SideDrawer({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed right-0 top-0 bottom-0 z-50 w-1/2 bg-night border-l border-mauve/30 p-10 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
          >
            <div className="text-cream text-3xl mb-6">Aurora Sessions</div>
            <div className="text-cream/70 mb-8">Berlin • Fri 11:30 PM</div>

            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-7">
                <div className="aspect-video rounded-2xl overflow-hidden border border-mauve/30">
                  <img src="https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM3MTU4MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="col-span-5">
                <div className="space-y-6">
                  <div>
                    <div className="text-cream/80 text-sm mb-2">Ticket Type</div>
                    <div className="flex gap-3">
                      {['General', 'VIP', 'Balcony'].map((t) => (
                        <button key={t} className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs" data-cursor="interactive">{t}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-cream/80 text-sm mb-2">Quantity</div>
                    <div className="flex items-center gap-3">
                      <button className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs" data-cursor="interactive">-</button>
                      <div className="text-cream">2</div>
                      <button className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs" data-cursor="interactive">+</button>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="w-full px-4 py-3 rounded-xl border border-mauve/40 text-cream/90 hover:border-mauve" data-cursor="interactive">Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button onClick={onClose} className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs" data-cursor="interactive">Close</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
