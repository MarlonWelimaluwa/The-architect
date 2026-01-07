import Hero from '@/components/Hero';
import Methodology from '@/components/Methodology';
import ConsultantPortal from '@/components/ConsultantPortal';
import BentoGrid from '@/components/BentoGrid';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

export default function Home() {
  return (
      <main className="min-h-screen bg-black text-white">
        <CustomCursor />
        <Hero />
        <Methodology />
        <ConsultantPortal />
        <BentoGrid />
        <Footer />
      </main>
  );
}