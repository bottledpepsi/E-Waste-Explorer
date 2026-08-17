import { CloudRain, Sun, Telescope } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const BAD = [
  'E-waste could reach 82 million tonnes by 2030.',
  'Recycling rates could stay low.',
  'More toxic pollution in soil, water and air.',
  'More valuable resources wasted forever.',
]

const GOOD = [
  'Raising recycling to 60% by 2030 could bring benefits worth over $38 billion.',
  'Fewer toxic chemicals released into nature.',
  'More materials reused instead of mined.',
  'New safe, green jobs created.',
]

export function LookingAhead() {
  return (
    <section id="looking-ahead" className="bg-brand-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/10 text-brand-teal">
            <Telescope className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
            What Might Happen in the Future?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-white/80 sm:text-xl">
            The future is not decided yet. It depends on the choices we make now.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-brand-red/40 bg-brand-red/15 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-red text-white">
                  <CloudRain className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-extrabold">If nothing changes</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {BAD.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-white/85">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full rounded-3xl border border-brand-green/40 bg-brand-green/15 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-green text-white">
                  <Sun className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-display text-2xl font-extrabold">If we take action</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {GOOD.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-white/85">
                    <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand-green" />
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
