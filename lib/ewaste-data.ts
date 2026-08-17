// All editable content and stats for the E-Waste Explorer site.
// Change any numbers or copy here without touching the components.

export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'what-is-it', label: 'What Is It?' },
  { id: 'causes', label: 'Causes' },
  { id: 'where', label: 'Where' },
  { id: 'statistics', label: 'By the Numbers' },
  { id: 'environment-impact', label: 'Environment' },
  { id: 'wildlife-impact', label: 'Wildlife' },
  { id: 'people-impact', label: 'People' },
  { id: 'over-time', label: 'Over Time' },
  { id: 'solutions-being-done', label: 'Whats Being Done' },
  { id: 'future-solutions', label: 'Solutions' },
  { id: 'take-action', label: 'Take Action' },
  { id: 'case-study', label: 'Case Study' },
  { id: 'looking-ahead', label: 'The Future' },
  { id: 'sources', label: 'Sources' },
  { id: 'reflection', label: 'Reflection' },
] as const

export const EWASTE_EXAMPLES = [
  { icon: 'Smartphone', label: 'Phones' },
  { icon: 'Laptop', label: 'Laptops' },
  { icon: 'Tv', label: 'TVs' },
  { icon: 'BatteryFull', label: 'Batteries' },
  { icon: 'Printer', label: 'Printers' },
  { icon: 'Headphones', label: 'Headphones' },
  { icon: 'Plug', label: 'Chargers' },
  { icon: 'Watch', label: 'Smart Watches' },
] as const

export const GOOD_STUFF = ['Gold', 'Copper', 'Silver', 'Aluminium', 'Rare earth metals']
export const BAD_STUFF = ['Lead', 'Mercury', 'Cadmium', 'Arsenic', 'Flame retardants']

export const CAUSES = [
  {
    icon: 'RefreshCw',
    title: 'Upgrading too often',
    text: 'Lots of people swap phones and gadgets for the newest model every year or two, even when the old one still works.',
  },
  {
    icon: 'Wrench',
    title: 'Made to break',
    text: 'Some products are hard or expensive to repair. This is called "planned obsolescence" — designed to be replaced, not fixed.',
  },
  {
    icon: 'PackageX',
    title: 'Cheap electronics',
    text: 'Very cheap gadgets and toys often wear out quickly, so they end up in the bin much sooner.',
  },
  {
    icon: 'Users',
    title: 'More people, more tech',
    text: 'The world has more people using more devices than ever before, so we make more electronic waste too.',
  },
  {
    icon: 'Trash2',
    title: 'Hard to recycle',
    text: 'Many people do not know where to take old devices, so they get thrown in the normal rubbish bin.',
  },
] as const

export const REGIONS = [
  { name: 'Asia', value: 24.9, color: 'var(--brand-blue)' },
  { name: 'Americas', value: 13.1, color: 'var(--brand-teal)' },
  { name: 'Europe', value: 12.0, color: 'var(--brand-green)' },
  { name: 'Africa', value: 2.9, color: 'var(--brand-amber)' },
  { name: 'Oceania', value: 0.7, color: 'var(--brand-red)' },
] as const

export const STATS = [
  { number: '62 million', unit: 'tonnes', label: 'E-waste generated globally in 2022' },
  { number: '82%', unit: '', label: 'Increase in global e-waste since 2010' },
  { number: '22.3%', unit: 'only', label: 'Of e-waste properly collected and recycled worldwide' },
  { number: '82 million', unit: 'tonnes', label: 'Predicted global e-waste by 2030' },
  { number: 'US $91 billion', unit: '', label: 'Value of raw materials inside 2022 e-waste — mostly never recovered' },
  { number: 'Just 1%', unit: '', label: 'Of rare earth element demand met by e-waste recycling' },
] as const

export type TimelinePoint = { year: string; value: number; note: string; projected?: boolean }
export const TIMELINE: TimelinePoint[] = [
  { year: '2010', value: 34, note: 'Global e-waste was already a growing problem.' },
  { year: '2022', value: 62, note: 'A record high — the most e-waste ever made in one year.' },
  { year: '2030', value: 82, note: 'Projected total if things keep going the way they are.', projected: true },
]

export const ACTIONS = [
  'Take old phones and batteries to a proper e-waste drop-off point — not the bin!',
  'Ask your parents about MobileMuster or your council e-waste collection days.',
  'Look after your devices so they last much longer.',
  'Donate or pass on working electronics instead of throwing them away.',
  'Ask for repairs instead of replacements when something breaks.',
] as const

export type Source = { title: string; detail: string; placeholder?: boolean }
export const SOURCES: Source[] = [
  {
    title: 'The Global E-waste Monitor 2024',
    detail: 'UNITAR, ITU & Fondation Carmignac — globalewaste.org / ewastemonitor.info',
  },
  {
    title: 'Australian Department of Climate Change, Energy, the Environment and Water (DCCEEW)',
    detail: 'National Television and Computer Recycling Scheme publications',
  },
  {
    title: 'NSW Environment Protection Authority (EPA)',
    detail: 'E-waste information page',
  },
  {
    title: '[Add any additional sources you use]',
    detail: '[Include the title, author/organisation, and link or date accessed]',
    placeholder: true,
  },
]
