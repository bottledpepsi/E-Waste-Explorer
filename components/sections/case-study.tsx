import { FileText, MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

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
              <FileText className="size-6 shrink-0 text-brand-teal" aria-hidden="true" />
              <div>
                <p className="text-xs font-bold tracking-widest text-brand-teal uppercase">Case File</p>
                <h3 className="font-display text-lg leading-tight font-extrabold sm:text-xl">
                  Australia&apos;s National Television and Computer Recycling Scheme (NTCRS)
                </h3>
              </div>
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <p className="flex items-center gap-2 text-sm font-bold text-brand-blue">
                <MapPin className="size-4" aria-hidden="true" /> Australia · Started 2011
              </p>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                The NTCRS began in 2011 under the{' '}
                <strong className="text-brand-navy">Product Stewardship Act</strong>.
                It requires TV and computer companies to help fund the recycling
                of their products. Collection targets started at{' '}
                <strong className="text-brand-navy">30% in 2012–13</strong> and are
                rising toward <strong className="text-brand-navy">80% by 2026–27</strong>.
              </p>
              <div className="rounded-2xl bg-brand-blue-soft p-5">
                <p className="text-base leading-relaxed text-foreground/80">
                  This is an example of{' '}
                  <strong className="text-brand-blue">&quot;product stewardship&quot;</strong>{' '}
                  (also called extended producer responsibility) — the idea that
                  companies share responsibility for what happens to their
                  products at the end of their life, not just the people who buy
                  them.
                </p>
              </div>
              <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
                <strong className="text-brand-navy">Why it matters:</strong> it shows
                that clear rules and shared responsibility can tackle e-waste on a
                national scale — not just by asking individuals to try harder, but
                by changing how the whole system works.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
