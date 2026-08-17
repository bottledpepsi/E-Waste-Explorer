import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { WhatIsIt } from '@/components/sections/what-is-it'
import { Causes } from '@/components/sections/causes'
import { Where } from '@/components/sections/where'
import { Statistics } from '@/components/sections/statistics'
import { EnvironmentImpact } from '@/components/sections/environment-impact'
import { WildlifeImpact } from '@/components/sections/wildlife-impact'
import { PeopleImpact } from '@/components/sections/people-impact'
import { OverTime } from '@/components/sections/over-time'
import { SolutionsBeingDone } from '@/components/sections/solutions-being-done'
import { FutureSolutions } from '@/components/sections/future-solutions'
import { TakeAction } from '@/components/sections/take-action'
import { CaseStudy } from '@/components/sections/case-study'
import { LookingAhead } from '@/components/sections/looking-ahead'
import { Sources } from '@/components/sections/sources'
import { Reflection } from '@/components/sections/reflection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIsIt />
        <Causes />
        <Where />
        <Statistics />
        <EnvironmentImpact />
        <WildlifeImpact />
        <PeopleImpact />
        <OverTime />
        <SolutionsBeingDone />
        <FutureSolutions />
        <TakeAction />
        <CaseStudy />
        <LookingAhead />
        <Sources />
        <Reflection />
      </main>
      <SiteFooter />
    </>
  )
}
