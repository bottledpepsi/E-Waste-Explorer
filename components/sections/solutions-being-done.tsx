import { Building2, FlaskConical, HandHeart, Landmark, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CARDS = [
  {
    Icon: Landmark,
    title: 'Governments',
    text: 'Australia runs the National Television and Computer Recycling Scheme (started 2011). Companies that import TVs and computers must help pay for recycling — with a target rising to 80% by 2026–27.',
  },
  {
    Icon: Building2,
    title: 'Businesses',
    text: 'Programs like MobileMuster let people hand back old mobile phones for free so they can be recycled safely instead of ending up in the bin.',
  },
  {
    Icon: HandHeart,
    title: 'Communities',
    text: 'Local councils set up e-waste drop-off points and run collection events so families have an easy, safe place to take old devices.',
  },
  {
    Icon: FlaskConical,
    title: 'Scientists',
    text: 'Researchers and international organisations study e-waste and invent better, cleaner ways to recover valuable materials from old electronics.',
  },
]

export function SolutionsBeingDone() {
  return (
    <section id="solutions-being-done" className="bg-brand-teal-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-teal/20 text-brand-teal">
            <ShieldCheck className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            What Is Being Done?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            Lots of different groups are already working together to tackle the
            e-waste problem.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {CARDS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <div className="flex h-full gap-4 rounded-3xl border border-brand-teal/15 bg-card p-6 shadow-sm">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-teal/15 text-brand-teal">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/75">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
