import HeroSection from '@/components/home/HeroSection';
import Ticker from '@/components/home/Ticker';
import FeaturesSection from '@/components/home/FeaturesSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesSection from '@/components/home/ServicesSection';
import HowSection from '@/components/home/HowSection';
import CtaSection from '@/components/home/CtaSection';
export default function Home() {
  return (
    <>
      <HeroSection />
      <Ticker />
      <FeaturesSection />
      <StatsSection />
      <ServicesSection />
      <HowSection />
      <CtaSection />
    </>
  );
}
