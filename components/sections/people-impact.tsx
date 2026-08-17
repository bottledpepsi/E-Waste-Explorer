import { Coins, HeartPulse, Home, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const CARDS = [
  {
    Icon: HeartPulse,
    title: 'Health of Workers',
    text: 'In some countries, people — sometimes even children — take apart e-waste by hand without safety gear. Breathing toxic smoke and touching chemicals can cause lung and skin problems.',
  },
  {
    Icon: Home,
    title: 'Communities',
    text: 'Families who live near e-waste dump sites can end up with polluted water and soil, which affects their health and daily lives.',
  },
  {
    Icon: Coins,
    title: 'Wasted Money & Jobs',
    text: 'Billions of dollars of useful materials are thrown away instead of being recycled — money that could create safe "green jobs" instead.',
  },
]

export function PeopleImpact() {
  return (
    <section id="people-impact" className="bg-brand-amber-soft py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-amber/20 text-brand-amber">
            <Users className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            Impact on People
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
            E-waste does not just harm nature — it affects people&apos;s health,
            homes and jobs too.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map(({ Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={i * 80}>
              <div className="flex h-full flex-col gap-4 rounded-3xl border border-brand-amber/20 bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-amber/15 text-brand-amber">
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
