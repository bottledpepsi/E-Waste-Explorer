import { CalendarClock, TrendingUp } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { TIMELINE } from '@/lib/ewaste-data'

const MAX = Math.max(...TIMELINE.map((t) => t.value))

export function OverTime() {
  return (
    <section id="over-time" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-blue-soft text-brand-blue">
            <CalendarClock className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            How Has It Changed Over Time?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            E-waste keeps climbing every year. These are the totals made
            worldwide (in millions of tonnes).
          </p>
        </Reveal>

        {/* Timeline / growing bars */}
        <Reveal className="mt-12">
          <div className="grid gap-5 rounded-3xl border border-brand-blue/10 bg-card p-6 shadow-sm sm:grid-cols-3 sm:p-8">
            {TIMELINE.map(({ year, value, note, projected }) => (
              <div key={year} className="flex flex-col">
                <div className="flex items-end gap-3">
                  <div className="flex h-40 flex-1 items-end rounded-2xl bg-muted p-2">
                    <div
                      className={`w-full rounded-xl ${projected ? 'bg-brand-amber' : 'bg-brand-blue'}`}
                      style={{ height: `${(value / MAX) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <span className="font-display text-2xl font-extrabold text-brand-navy">{year}</span>
                  <span className={`ml-2 text-lg font-bold ${projected ? 'text-brand-amber' : 'text-brand-blue'}`}>
                    {value} Mt{projected ? '*' : ''}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-foreground/70">{note}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <p className="mt-3 text-center text-sm text-foreground/50">* 2030 figure is a projection.</p>
        </Reveal>

        <Reveal className="mt-8">
          <div className="flex items-start gap-4 rounded-3xl border border-brand-red/20 bg-brand-amber-soft p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-red text-white">
              <TrendingUp className="size-6" aria-hidden="true" />
            </span>
            <p className="text-base leading-relaxed font-semibold text-brand-navy sm:text-lg">
              More people know about e-waste and recycling schemes have grown —
              but e-waste is being made about{' '}
              <span className="text-brand-red">5 times faster</span> than it is
              recycled. So the problem is still getting{' '}
              <span className="text-brand-red">worse, not better</span>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
