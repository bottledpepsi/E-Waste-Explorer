import {Reveal} from '@/components/reveal'

export function CaseStudy() {
    return (
        <section id="case-study" className="bg-background py-20 sm:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <Reveal className="text-center">
                    <h2 className="font-display text-4xl font-extrabold text-balance text-brand-navy sm:text-5xl">
                        Australian Case Study
                    </h2>
                </Reveal>

                <Reveal className="mt-10">
                    <article className="overflow-hidden rounded-3xl border border-brand-blue/15 bg-card shadow-md">
                        {/* Case file header */}
                        <div className="flex items-center gap-3 bg-brand-navy px-6 py-4 text-white sm:px-8">
                            <div>
                                <h3 className="font-display text-lg leading-tight font-extrabold sm:text-xl">
                                    Australia&apos;s National Television and Computer Recycling Scheme (NTCRS)
                                </h3>
                            </div>
                        </div>

                        <div className="space-y-5 p-6 sm:p-8">
                            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                                The NTCRS began in 2011 under the{' '}
                                <strong className="text-brand-navy">Product Stewardship Act</strong>.
                                It requires TV and computer companies to help fund the recycling
                                of their products. Collection targets started at{' '}
                                30% in 2013 and are rising toward 80% by 2027.
                            </p>
                            <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                                <strong className="text-brand-navy">Why it matters:</strong> it shows
                                that clear rules and shared responsibility can tackle e-waste on a
                                national scale by changing how the whole system works.
                            </p>
                        </div>
                    </article>
                </Reveal>
            </div>
        </section>
    )
}
