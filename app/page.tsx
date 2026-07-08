import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import HairGallery from "@/components/HairGallery";
import NailsGallery from "@/components/NailsGallery";
import Pricing from "@/components/Pricing";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Whatsapp from "@/components/Whatsapp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <HairGallery />
        <NailsGallery />
        <Pricing />
        <Booking />
        <Contact />
      </main>

      <Footer />
      <Whatsapp />
      <BackToTop />
    </>
  );
}