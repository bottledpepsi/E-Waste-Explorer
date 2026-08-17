import { Globe, Lightbulb, Ship } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { REGIONS } from '@/lib/ewaste-data'

const MAX = Math.max(...REGIONS.map((r) => r.value))

export function Where() {
  return (
    <section id="where" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-blue-soft text-brand-blue">
            <Globe className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            Where Is It Happening?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            E-waste is a <strong className="text-brand-blue">global</strong>{' '}
            problem — every country makes it. Here is how much each region made in
            2022 (in millions of tonnes, Mt).
          </p>
        </Reveal>

        {/* Bar visual */}
        <Reveal className="mt-12">
          <div className="rounded-3xl border border-brand-blue/10 bg-card p-6 shadow-sm sm:p-8">
            <ul className="flex flex-col gap-5">
              {REGIONS.map(({ name, value, color }) => (
                <li key={name}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="font-display text-lg font-bold text-brand-navy">{name}</span>
                    <span className="text-sm font-bold text-foreground/70">{value} Mt</span>
                  </div>
                  <div className="h-6 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${(value / MAX) * 100}%`, backgroundColor: color }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Did you know callout */}
        <Reveal className="mt-8">
          <div className="flex items-start gap-4 rounded-3xl border border-brand-amber/30 bg-brand-amber-soft p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-amber text-white">
              <Lightbulb className="size-6" aria-hidden="true" />
            </span>
            <p className="text-base leading-relaxed font-semibold text-brand-navy sm:text-lg">
              <span className="text-brand-amber">Did you know?</span> In
              Australia, e-waste is growing about{' '}
              <span className="text-brand-amber">3 times faster</span> than
              regular household rubbish.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <div className="flex items-start gap-4 rounded-3xl border border-brand-navy/15 bg-brand-navy p-6 text-white">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/15">
              <Ship className="size-6" aria-hidden="true" />
            </span>
            <p className="text-base leading-relaxed sm:text-lg">
              A lot of e-waste from wealthy countries — including Australia — is
              shipped overseas to places like{' '}
              <strong className="text-brand-teal">Ghana, Nigeria and parts of Asia</strong>,
              where it is often taken apart by hand in unsafe ways.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
