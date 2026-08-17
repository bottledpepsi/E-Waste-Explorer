import { MessageCircleQuestion } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const QUESTIONS = [
  'Why should people care about e-waste?',
  'Why is this issue significant to our community?',
  'Which solution do you think would be most effective, and why?',
]

export function Reflection() {
  return (
    <section id="reflection" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-[2rem] bg-brand-navy p-8 text-white shadow-lg sm:p-12">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-brand-teal">
                <MessageCircleQuestion className="size-7" aria-hidden="true" />
              </span>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">My Reflection</h2>
            </div>

            <p className="mt-6 text-lg text-white/80">
              Think about these questions and write your own answers:
            </p>

            <ul className="mt-6 space-y-3">
              {QUESTIONS.map((q) => (
                <li
                  key={q}
                  className="rounded-2xl bg-brand-navy-soft p-4 text-base leading-relaxed font-semibold text-white sm:text-lg"
                >
                  {q}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-dashed border-white/25 bg-white/5 p-6">
              <p className="text-base leading-relaxed text-white/60 italic">
                [Write your personal reflection here — e.g., I think ___ is
                significant because ___. I believe the most effective solution is
                ___ because ___.]
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
