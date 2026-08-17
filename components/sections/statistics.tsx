import {Reveal} from '@/components/reveal'
import {STATS} from '@/lib/ewaste-data'

export function Statistics() {
    return (
        <section id="statistics" className="bg-brand-navy py-20 text-white sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance sm:text-5xl">
                        How Serious Is It? By the Numbers
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-white/80 sm:text-xl">
                        The size of the e-waste problem is huge. These numbers tell the story.
                    </p>
                </Reveal>

                <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {STATS.map(({number, unit, label}, i) => (
                        <Reveal as="li" key={label} delay={i * 70}>
                            <div
                                className="flex h-full flex-col rounded-3xl bg-brand-navy-soft p-6 ring-1 ring-white/10">
                <span className="font-display text-4xl font-extrabold text-brand-teal sm:text-5xl">
                  {number}
                </span>
                                {unit && (
                                    <span className="mt-1 text-sm font-bold tracking-wide text-white/60 uppercase">
                    {unit}
                  </span>
                                )}
                                <span className="mt-3 text-base leading-relaxed text-white/85">{label}</span>
                            </div>
                        </Reveal>
                    ))}
                </ul>

                <Reveal className="mt-8">
                    <p className="text-center text-sm text-white/50">
                        Source: The Global E-waste Monitor 2024 (UNITAR / ITU)
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
