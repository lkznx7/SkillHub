// src/pages/Home.tsx
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowitworksSection from '../components/HowitworksSection';
import SocialproofSection from '../components/SocialproofSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar /> 
            <HeroSection />
            <BenefitsSection />
            <HowitworksSection />
            <SocialproofSection />
            <CtaSection />
            <Footer />
        </div>
    );
}