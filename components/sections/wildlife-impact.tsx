import {Bird, Fish, Sprout} from 'lucide-react'
import {Reveal} from '@/components/reveal'

const CARDS = [
    {
        Icon: Fish,
        title: 'Rivers & Fish',
        text: 'Toxic chemicals can wash into rivers and lakes, poisoning fish and the animals that eat them.',
    },
    {
        Icon: Bird,
        title: 'The Food Chain',
        text: 'Poisons build up as they move from small creatures to bigger animals, and can end up in the food people eat.',
    },
    {
        Icon: Sprout,
        title: 'Habitats',
        text: 'Land and soil near e-waste dump sites become contaminated, making it hard for plants and animals to live there safely.',
    },
]

export function WildlifeImpact() {
    return (
        <section id="wildlife-impact" className="bg-background py-20 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="mt-4 font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        Impact on Plants &amp; Animals
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        Wildlife cannot choose where to live, so pollution from e-waste impacts
                        them hard.
                    </p>
                </Reveal>

                <ul className="mt-12 grid gap-6 md:grid-cols-3">
                    {CARDS.map(({Icon, title, text}, i) => (
                        <Reveal as="li" key={title} delay={i * 80}>
                            <div
                                className="flex h-full flex-col gap-4 rounded-3xl border border-brand-teal/15 bg-brand-teal-soft p-6 shadow-sm transition-transform hover:-translate-y-1">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-teal text-white">
                  <Icon className="size-7" aria-hidden="true"/>
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
