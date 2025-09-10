
import { HeroSection } from '@/components/hero-section'
import { StatsSection } from '@/components/stats-section'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
    </div>
  )
}
