import {Reveal} from '@/components/reveal'

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
                            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">My Reflection</h2>
                        </div>

                        <ul className="mt-6 space-y-3">
                            <p>
                                I think people should care about e-waste because it can harm the environment, wildlife,
                                and people when it is not disposed of properly. It is also a waste of valuable materials
                                that could be reused or recycled.
                                E-waste is significant to our community because almost everyone uses electronic devices,
                                meaning we all contribute to the problem. I think the most effective solution is better
                                recycling because it would help keep harmful materials out of the environment while
                                allowing valuable materials to be reused. We can all help by recycling our old
                                electronics properly and using our devices for longer.

                            </p>
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
