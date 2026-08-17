import {PackageX, RefreshCw, Trash2, Users, Wrench, Zap} from 'lucide-react'
import {Reveal} from '@/components/reveal'
import {CAUSES} from '@/lib/ewaste-data'

const ICONS = {RefreshCw, Wrench, PackageX, Users, Trash2} as const

export function Causes() {
    return (
        <section id="causes" className="bg-brand-teal-soft py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto size-14 place-items-center rounded-2xl bg-brand-teal/20 text-brand-teal">
          </span>
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        What Causes E-Waste?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        E-waste is piling up for a few big reasons. Here are the main ones:
                    </p>
                </Reveal>

                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {CAUSES.map(({icon, title, text}, i) => {
                        const Icon = ICONS[icon]
                        return (
                            <Reveal as="li" key={title} delay={i * 70}>
                                <div
                                    className="flex h-full flex-col gap-4 rounded-3xl border border-brand-teal/15 bg-card p-6 shadow-sm transition-transform hover:-translate-y-1">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-teal/15 text-brand-teal">
                    <Icon className="size-7" aria-hidden="true"/>
                  </span>
                                    <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
                                    <p className="text-base leading-relaxed text-foreground/75">{text}</p>
                                </div>
                            </Reveal>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
