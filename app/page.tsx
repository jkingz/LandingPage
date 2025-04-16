import ContentSection from '@/components/content-1';
import Features from '@/components/features-1';
import FooterSection from '@/components/footer';
import HeroSection from '@/components/hero-section';
import IntegrationsSection from '@/components/integrations-5';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <ContentSection />
      <Testimonials />
      <Pricing />
      <FooterSection />
    </>
  );
}
