import { Menu, Search, User } from 'lucide-react'

export default function FourCorners() {
  return (
    <>
      {/* Top Left: Logo */}
      <div className="fixed top-6 left-6 z-40 select-none" data-cursor="interactive">
        <div className="text-cream tracking-widest text-xl">NOCTURNE</div>
      </div>

      {/* Top Right: Menu + Search */}
      <div className="fixed top-6 right-6 z-40 flex items-center gap-6">
        <button className="text-cream/90 hover:text-cream transition-colors" data-cursor="interactive">
          <Search size={22} />
        </button>
        <button className="text-cream/90 hover:text-cream transition-colors" data-cursor="interactive">
          <Menu size={22} />
        </button>
      </div>

      {/* Bottom Left: Sound + Socials */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-6 text-cream/80">
        <button className="px-3 py-1 rounded-full border border-mauve/40 hover:border-mauve text-xs" data-cursor="interactive">Sound On</button>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-cream" data-cursor="interactive">IG</a>
          <a href="#" className="hover:text-cream" data-cursor="interactive">TW</a>
          <a href="#" className="hover:text-cream" data-cursor="interactive">YT</a>
        </div>
      </div>

      {/* Bottom Right: Account */}
      <div className="fixed bottom-6 right-6 z-40" data-cursor="interactive">
        <button className="px-3 py-1 rounded-full border border-mauve/40 text-cream/90 hover:border-mauve text-xs flex items-center gap-2">
          <User size={16} /> My Account
        </button>
      </div>
    </>
  )
}
