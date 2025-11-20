import { useState } from 'react'
import { Menu } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-5 py-3">
          <button onClick={() => scrollTo('home')} className="text-white text-sm tracking-[0.25em] font-semibold">
            ALEX DESIGN
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('work')} className="text-white/80 hover:text-white text-xs tracking-[0.3em] uppercase">Work</button>
            <button onClick={() => scrollTo('about')} className="text-white/80 hover:text-white text-xs tracking-[0.3em] uppercase">About</button>
            <button onClick={() => scrollTo('contact')} className="text-white/80 hover:text-white text-xs tracking-[0.3em] uppercase">Contact</button>
          </nav>

          <button className="md:hidden text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md p-4 md:hidden">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollTo('work')} className="text-white/90 text-sm tracking-[0.3em] uppercase text-left">Work</button>
              <button onClick={() => scrollTo('about')} className="text-white/90 text-sm tracking-[0.3em] uppercase text-left">About</button>
              <button onClick={() => scrollTo('contact')} className="text-white/90 text-sm tracking-[0.3em] uppercase text-left">Contact</button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
