/**
 * BRASO TASTE — City Landing Page (Local SEO)
 * Route: /atendemos/:slug
 * One template, driven by data/seoPages.ts.
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { MessageCircle, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cities, services } from "@/data/seoPages";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "@/pages/NotFound";

export default function CityLanding() {
  const { slug } = useParams<{ slug: string }>();
  const cityData = cities.find((c) => c.slug === slug);

  if (!cityData) return <NotFound />;

  usePageMeta(cityData.metaTitle, cityData.metaDescription);

  // Inject a page-specific LocalBusiness schema (separate from the global one in index.html)
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "city-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FoodEstablishment",
      name: `Braso Taste — Atendimento em ${cityData.city}`,
      areaServed: { "@type": "City", name: cityData.city },
      telephone: "+5521974064098",
      priceRange: "R$80 - R$200",
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById("city-schema")?.remove();
    };
  }, [cityData.city]);

  const waMessage = `Olá! Sou de ${cityData.city} e gostaria de solicitar um orçamento para um evento com a Braso Taste.`;
  const waUrl = `https://wa.me/5521974064098?text=${encodeURIComponent(waMessage)}`;

  return (
    <div style={{ background: "#0B0A09", minHeight: "100vh" }}>
      <Header />

      <main style={{ paddingTop: "7rem" }}>
        <section style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
          <nav style={{ marginBottom: "2rem", fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", color: "rgba(247,242,232,0.5)" }}>
            <Link href="/" style={{ color: "rgba(247,242,232,0.5)" }}>Início</Link>
            {" / "}
            <span style={{ color: "#E1BD7E" }}>{cityData.city}</span>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
            <MapPin size={20} color="#E1BD7E" />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#E1BD7E" }}>
              Área Atendida
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#FAF6F1",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Churrasco e Buffet em Domicílio em {cityData.city}
          </h1>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "rgba(247,242,232,0.85)",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}
          >
            {cityData.intro}
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(247,242,232,0.65)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            <strong style={{ color: "#FAF6F1" }}>Ocasiões mais comuns na região:</strong> {cityData.demand}
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              background: "#E1BD7E",
              color: "#0B0A09",
              padding: "1rem 2rem",
              borderRadius: "999px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              marginBottom: "3.5rem",
            }}
          >
            <MessageCircle size={20} />
            Solicitar Orçamento em {cityData.city}
          </a>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,242,232,0.5)", marginBottom: "1rem" }}>
            Nossas Experiências
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}>
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/experiencias/${s.slug}`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.8rem",
                  color: "#E1BD7E",
                  border: "1px solid rgba(225,189,126,0.3)",
                  borderRadius: "999px",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                }}
              >
                {s.title}
              </Link>
            ))}
          </div>

          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,242,232,0.5)", marginBottom: "1rem" }}>
            Também Atendemos
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {cities.filter((c) => c.slug !== cityData.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/atendemos/${c.slug}`}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(247,242,232,0.6)",
                  border: "1px solid rgba(247,242,232,0.15)",
                  borderRadius: "999px",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                }}
              >
                {c.city}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
