/**
 * BRASO TASTE — Home Page
 * Assembles all sections in order
 * Design: Luxury Hospitality Editorial
 */

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ChefSection from "@/components/ChefSection";
import GallerySection from "@/components/GallerySection";
import QuoteSection from "@/components/QuoteSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "#FAF6F1",
        overflowX: "hidden",
      }}
    >
      <Header />
      <HeroSection />
      <ExperiencesSection />
      <StatsSection />
      <AboutSection />
      <ChefSection />
      <QuoteSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
