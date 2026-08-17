import {
  BatteryFull,
  Coins,
  HelpCircle,
  Headphones,
  Laptop,
  Plug,
  Printer,
  Skull,
  Smartphone,
  Tv,
  Watch,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { GOOD_STUFF, BAD_STUFF } from '@/lib/ewaste-data'

const ITEMS = [
  { Icon: Smartphone, label: 'Phones' },
  { Icon: Laptop, label: 'Laptops' },
  { Icon: Tv, label: 'TVs' },
  { Icon: BatteryFull, label: 'Batteries' },
  { Icon: Printer, label: 'Printers' },
  { Icon: Headphones, label: 'Headphones' },
  { Icon: Plug, label: 'Chargers' },
  { Icon: Watch, label: 'Smart Watches' },
]

export function WhatIsIt() {
  return (
    <section id="what-is-it" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="grid size-14 place-items-center rounded-2xl bg-brand-blue-soft text-brand-blue mx-auto">
            <HelpCircle className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            What Is E-Waste?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            E-waste is <strong className="text-brand-blue">any thrown-away device that has a plug or a battery</strong> —
            phones, laptops, TVs, batteries, chargers, game consoles, toys with
            circuits, and lots more.
          </p>
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {ITEMS.map(({ Icon, label }, i) => (
            <Reveal as="li" key={label} delay={i * 60}>
              <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-brand-blue/10 bg-card p-6 text-center shadow-sm transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-blue-soft text-brand-blue">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-bold text-brand-navy">{label}</span>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Good vs bad */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-green/20 bg-brand-green-soft p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-green text-white">
                  <Coins className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-extrabold text-brand-navy">Good stuff inside</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Devices are full of valuable materials we could reuse instead of
                digging up more from the ground:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {GOOD_STUFF.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-green/15 px-3 py-1.5 text-sm font-bold text-brand-green"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-brand-red/20 bg-brand-amber-soft p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-red text-white">
                  <Skull className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-extrabold text-brand-navy">Bad stuff inside</h3>
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                They also contain toxic materials that can harm people and nature
                if they are not handled safely:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {BAD_STUFF.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-red/15 px-3 py-1.5 text-sm font-bold text-brand-red"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
