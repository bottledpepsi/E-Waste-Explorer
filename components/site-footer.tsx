import { Code2, ExternalLink, House, Recycle } from 'lucide-react'

export function SiteFooter() {
    return (
        <footer className="border-t border-brand-blue/10 bg-brand-navy py-3 text-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
                <div className="flex items-center gap-2">
                    <Recycle className="size-6 text-brand-teal" aria-hidden="true" />
                    <span className="font-display text-xl font-extrabold">
            E-Waste Explorer
          </span>
                </div>

                <div className="mt-2 flex items-center gap-5 text-sm">
                    <a
                        href="https://bottledpepsi.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-teal"
                    >
                        <House className="size-4" aria-hidden="true" />
                        Homepage
                        <ExternalLink className="size-3" aria-hidden="true" />
                    </a>

                    <a
                        href="https://github.com/bottledpepsi/E-Waste-Explorer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white/70 transition-colors hover:text-brand-teal"
                    >
                        <Code2 className="size-4" aria-hidden="true" />
                        Repository
                        <ExternalLink className="size-3" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    )
}