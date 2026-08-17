import { Recycle } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-blue/10 bg-brand-navy py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2">
          <Recycle className="size-6 text-brand-teal" aria-hidden="true" />
          <span className="font-display text-xl font-extrabold">E-Waste Explorer</span>
        </div>
      </div>
    </footer>
  )
}
