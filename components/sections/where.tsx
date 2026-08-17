import {Reveal} from '@/components/reveal'
import {REGIONS} from '@/lib/ewaste-data'

const MAX = Math.max(...REGIONS.map((r) => r.value))

export function Where() {
    return (
        <section id="where" className="bg-background py-20 sm:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        Where Is It Happening?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        Here is how much e-waste each region made in
                        2022 (in millions of tonnes).
                    </p>
                </Reveal>

                {/* Bar visual */}
                <Reveal className="mt-12">
                    <div className="rounded-3xl border border-brand-blue/10 bg-card p-6 shadow-sm sm:p-8">
                        <ul className="flex flex-col gap-5">
                            {REGIONS.map(({name, value, color}) => (
                                <li key={name}>
                                    <div className="mb-1.5 flex items-baseline justify-between">
                                        <span className="font-display text-lg font-bold text-brand-navy">{name}</span>
                                        <span className="text-sm font-bold text-foreground/70">{value} Mt</span>
                                    </div>
                                    <div className="h-6 w-full overflow-hidden rounded-full bg-muted">
                                        <div
                                            className="h-full rounded-full"
                                            style={{width: `${(value / MAX) * 100}%`, backgroundColor: color}}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
