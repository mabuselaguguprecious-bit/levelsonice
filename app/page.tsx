import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Pricing from "@/components/Pricing";
import HairGallery from "@/components/HairGallery";
import NailsGallery from "@/components/NailsGallery";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <WhyChoose />

      <Services />

      <Experience />

      <HairGallery />

      <NailsGallery />

      <Pricing />

      <Booking />

      <FAQ />

      <Contact />

      <SocialSection />

      <Footer />

      <Whatsapp />

      <BackToTop />
    </>
  );
}