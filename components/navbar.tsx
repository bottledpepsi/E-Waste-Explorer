'use client'

import { useEffect, useState } from 'react'
import { Menu, Recycle, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/ewaste-data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-blue/10 bg-background/90 backdrop-blur-md">
      <nav className="mx-1 flex max-w-7xl items-center gap-2 px-4 py-3 sm:px-6">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 rounded-full bg-brand-blue px-3 py-1 font-display text-base font-extrabold text-white shadow-sm sm:text-lg">
          <Recycle className="size-5" aria-hidden="true" />
          <span>E-Waste Explorer</span>
        </a>

        {/* Desktop: scrollable jump links */}
        <div className="hidden min-w-0 flex-1 overflow-x-auto xl:block [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max items-center justify-center gap-1 mx-auto">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  className={cn(
                    'rounded-full px-3 py-1.5 text-sm font-semibold whitespace-nowrap transition-colors',
                    active === id
                      ? 'bg-brand-blue-soft text-brand-blue'
                      : 'text-foreground/70 hover:bg-muted hover:text-foreground',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-blue/20 bg-card px-3 py-2 text-sm font-bold text-brand-blue xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span>Menu</span>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-brand-blue/10 bg-background xl:hidden">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-1.5 px-4 py-4 sm:grid-cols-3">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-xl px-3 py-2.5 text-center text-sm font-semibold transition-colors',
                    active === id
                      ? 'bg-brand-blue text-white'
                      : 'bg-muted text-foreground/80 hover:bg-brand-blue-soft hover:text-brand-blue',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
