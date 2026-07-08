/**
 * BRASO TASTE — Service Landing Page (SEO)
 * Route: /experiencias/:slug
 * One template, driven by data/seoPages.ts — add a new service by adding
 * an entry there, no new component needed.
 */

import { useParams, Link } from "wouter";
import { MessageCircle, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/data/seoPages";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "@/pages/NotFound";

export default function ServiceLanding() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  usePageMeta(service.metaTitle, service.metaDescription);

  const waMessage = `Olá! Tenho interesse na experiência *${service.title}* da Braso Taste. Podem me passar mais informações?`;
  const waUrl = `https://wa.me/5521974064098?text=${encodeURIComponent(waMessage)}`;

  return (
    <div style={{ background: "#0B0A09", minHeight: "100vh" }}>
      <Header />

      <main style={{ paddingTop: "7rem" }}>
        <section style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
          <nav style={{ marginBottom: "2rem", fontFamily: "'Montserrat', sans-serif", fontSize: "0.8rem", color: "rgba(247,242,232,0.5)" }}>
            <Link href="/" style={{ color: "rgba(247,242,232,0.5)" }}>Início</Link>
            {" / "}
            <Link href="/#experiencias" style={{ color: "rgba(247,242,232,0.5)" }}>Experiências</Link>
            {" / "}
            <span style={{ color: "#E1BD7E" }}>{service.title}</span>
          </nav>

          <img src={service.icon} alt="" style={{ width: "56px", height: "56px", marginBottom: "1.5rem" }} />

          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#FAF6F1",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            {service.title}
          </h1>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#E1BD7E",
              marginBottom: "2rem",
            }}
          >
            {service.tagline}
          </p>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.1rem",
              fontWeight: 300,
              color: "rgba(247,242,232,0.85)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            {service.intro}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.9rem",
              marginBottom: "2.5rem",
              padding: "1.75rem",
              border: "1px solid rgba(225,189,126,0.25)",
              borderRadius: "12px",
              background: "rgba(225,189,126,0.04)",
            }}
          >
            {service.highlights.map((h) => (
              <div key={h} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <Check size={18} color="#E1BD7E" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.95rem", color: "rgba(247,242,232,0.85)", lineHeight: 1.6 }}>
                  {h}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(247,242,232,0.6)",
              marginBottom: "0.5rem",
            }}
          >
            <strong style={{ color: "#FAF6F1" }}>Investimento:</strong> {service.priceInfo}
          </p>
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(247,242,232,0.6)",
              marginBottom: "2.5rem",
            }}
          >
            <strong style={{ color: "#FAF6F1" }}>Ideal para:</strong> {service.idealFor}
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
            }}
          >
            <MessageCircle size={20} />
            Solicitar Orçamento pelo WhatsApp
          </a>
        </section>

        {/* Cross-sell other experiences */}
        <section style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 5rem" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(247,242,232,0.5)", marginBottom: "1rem" }}>
            Outras Experiências
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {services.filter((s) => s.slug !== service.slug).map((s) => (
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
