import {CheckCircle2} from 'lucide-react'
import {Reveal} from '@/components/reveal'
import {ACTIONS} from '@/lib/ewaste-data'

export function TakeAction() {
    return (
        <section id="take-action" className="bg-brand-green-soft py-20 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        What Can You Do?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        Here is a practical e-waste action checklist.
                    </p>
                </Reveal>

                <ul className="mt-12 grid gap-4">
                    {ACTIONS.map((action, i) => (
                        <Reveal as="li" key={i} delay={i * 70}>
                            <div
                                className="flex items-center gap-4 rounded-2xl border border-brand-green/20 bg-card p-5 shadow-sm transition-transform hover:translate-x-1">
                                <CheckCircle2 className="size-7 shrink-0 text-brand-green" aria-hidden="true"/>
                                <span className="text-base leading-relaxed font-semibold text-brand-navy sm:text-lg">
                  {action}
                </span>
                            </div>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    )
}
