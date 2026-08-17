import {Battery, ChevronDown, Gamepad2, Laptop, Smartphone} from 'lucide-react'
import {Reveal} from '@/components/reveal'

const FLOATING = [
    {Icon: Smartphone, className: 'left-[8%] top-[18%] text-brand-blue rotate-[-8deg]'},
    {Icon: Laptop, className: 'right-[10%] top-[14%] text-brand-teal rotate-[10deg]'},
    {Icon: Battery, className: 'left-[14%] bottom-[16%] text-brand-amber rotate-[6deg]'},
    {Icon: Gamepad2, className: 'right-[12%] bottom-[20%] text-brand-green rotate-[-12deg]'},
]

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-svh items-center overflow-hidden bg-linear-to-b from-brand-blue-soft via-background to-brand-teal-soft pt-24 pb-16"
        >
            {/* Scattered device icons */}
            {FLOATING.map(({Icon, className}, i) => (
                <Icon
                    key={i}
                    aria-hidden="true"
                    className={`pointer-events-none absolute hidden size-16 opacity-70 md:block lg:size-24 ${className}`}
                />
            ))}

            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

                <Reveal delay={80}>
                    <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight text-balance text-brand-navy sm:text-6xl lg:text-7xl">
                        Electronic Waste{' '}
                        <span className="text-brand-blue">(E-Waste)</span>
                    </h1>
                </Reveal>

                <Reveal delay={160}>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-foreground/80 sm:text-xl">
                        What happens to your old phones, laptops and game consoles when
                        you&apos;re done with them?
                    </p>
                </Reveal>

                {/* Device icon row (mobile-friendly) */}
                <Reveal delay={220}>
                    <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
                        {[Smartphone, Laptop, Battery, Gamepad2].map((Icon, i) => (
                            <span
                                key={i}
                                className="grid size-12 place-items-center rounded-2xl bg-card shadow-sm ring-1 ring-brand-blue/10"
                            >
                <Icon className="size-6 text-brand-blue" aria-hidden="true"/>
              </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={340}>
                    <a
                        href="#what-is-it"
                        className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-base font-bold text-white shadow-md transition-transform hover:scale-105"
                    >
                        Explore
                        <ChevronDown className="size-5 animate-bounce" aria-hidden="true"/>
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
