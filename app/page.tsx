import { Hero } from '@/src/components/Hero';
import { SocialProof } from '@/src/components/SocialProof';
import { Features } from '@/src/components/Features';
import { Workflow } from '@/src/components/Workflow';
import { CallToAction } from '@/src/components/CallToAction';
import { Footer } from '@/src/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Features />
      <Workflow />
      <CallToAction />
      <Footer />
    </>
  );
}