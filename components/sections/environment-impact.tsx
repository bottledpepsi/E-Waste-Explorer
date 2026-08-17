import { Droplets, Factory, Leaf, Wind } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CARDS = [
  {
    Icon: Droplets,
    title: 'Soil & Water',
    text: 'When e-waste sits in landfill, toxic metals like lead, mercury and cadmium can leak out into the soil and into the water underground.',
  },
  {
    Icon: Wind,
    title: 'Air',
    text: 'Burning e-waste to get the metals out — common in unsafe recycling — releases poisonous fumes and smoke straight into the air.',
  },
  {
    Icon: Factory,
    title: 'Wasted Resources',
    text: 'When we do not recycle, we have to mine brand-new gold, copper and rare metals from the Earth, which damages more land and nature.',
  },
]

export function EnvironmentImpact() {
  return (
    <section id="environment-impact" className="bg-brand-green-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-green/20 text-brand-green">
            <Leaf className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            Impact on the Environment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            When e-waste is not handled properly, it hurts the planet in three
            big ways.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-brand-green/15 bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-green/15 text-brand-green">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
                <p className="text-base leading-relaxed text-foreground/75">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
