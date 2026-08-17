import { BookMarked } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SOURCES } from '@/lib/ewaste-data'

export function Sources() {
  return (
    <section id="sources" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-brand-blue-soft text-brand-blue">
            <BookMarked className="size-7" aria-hidden="true" />
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
            Sources &amp; Bibliography
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <ol className="divide-y divide-brand-blue/10 overflow-hidden rounded-3xl border border-brand-blue/15 bg-card shadow-sm">
            {SOURCES.map((source, i) => (
              <li key={i} className="flex gap-4 p-5 sm:p-6">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-blue-soft font-display text-sm font-extrabold text-brand-blue">
                  {i + 1}
                </span>
                <div>
                  <p
                    className={`font-display text-lg font-bold ${
                      source.placeholder ? 'text-foreground/50' : 'text-brand-navy'
                    }`}
                  >
                    {source.title}
                  </p>
                  <p
                    className={`mt-1 text-sm leading-relaxed ${
                      source.placeholder ? 'text-foreground/40 italic' : 'text-foreground/70'
                    }`}
                  >
                    {source.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
