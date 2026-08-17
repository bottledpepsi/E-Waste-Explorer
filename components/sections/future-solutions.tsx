import {RotateCcw, Recycle, Wrench} from 'lucide-react'
import {Reveal} from '@/components/reveal'

const CARDS = [
    {
        Icon: Wrench,
        title: 'Right to Repair Laws',
        text: 'These laws make it easier and cheaper to fix devices with spare parts and repair guides available. If we can repair things, we replace them less often, so we make far less e-waste.',
    },
    {
        Icon: Recycle,
        title: 'Better Recycling',
        text: 'Building more recycling drop-off points and setting higher collection targets means more old devices get recycled properly instead of ending up in landfill.',
    },
    {
        Icon: RotateCcw,
        title: 'Circular Economy Design',
        text: 'Companies can design electronics to be easily taken apart and recycled. Materials get reused again and again, instead of being thrown away.',
    },
]

export function FutureSolutions() {
    return (
        <section id="future-solutions" className="bg-background py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        What Solutions Could Help?
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        Here are three big ideas that could really cut down how much e-waste
                        we make.
                    </p>
                </Reveal>

                <ol className="mt-12 grid gap-6 md:grid-cols-3">
                    {CARDS.map(({Icon, title, text}, i) => (
                        <Reveal as="li" key={title} delay={i * 90}>
                            <div
                                className="flex h-full flex-col gap-4 rounded-3xl border border-brand-blue/10 bg-brand-blue-soft p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-blue text-white">
                  <Icon className="size-7" aria-hidden="true"/>
                </span>
                                <h3 className="font-display text-xl font-bold text-brand-navy">{title}</h3>
                                <p className="text-base leading-relaxed text-foreground/75">{text}</p>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    )
}
