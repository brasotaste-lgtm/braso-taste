/**
 * BRASO TASTE — Experiences Section
 * Editorial luxury layout — fewer, larger, more cinematic cards
 * Dark background with gold accents
 */

import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    number: "01",
    slug: "braso-celebration",
    title: "Braso Celebration",
    tagline: "A partir de R$ 80/pessoa · mín. 20",
    description: "Celebrações completas para aniversários, encontros de família e confraternizações. Um evento bonito, cuidado do início ao fim, sem sobrecarregar quem recebe. Opção vegana disponível.",
    image: "/images/photos/celebration-buffet.jpg",
    icon: "/images/icons/braso_celebration.svg",
  },
  {
    id: 2,
    number: "02",
    slug: "taste-selection",
    title: "Braso Taste Selection",
    tagline: "R$ 200/pessoa · mín. 10",
    description: "Seleção de cortes nobres e acompanhamentos sofisticados, para quem ama carne e busca uma experiência de alta gastronomia na brasa. Opção vegana disponível.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=85",
    icon: "/images/icons/braso_selection.svg",
  },
  {
    id: 3,
    number: "03",
    slug: "personal-taste",
    title: "Braso Personal Taste",
    tagline: "Orçamento personalizado · até 20 pessoas",
    description: "Uma experiência co-criada com você: cardápio e ritmo desenhados sob medida, para jantares intimistas e datas que pedem exclusividade total.",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=900&q=85",
    icon: "/images/icons/personal_taste.svg",
  },
  {
    id: 4,
    number: "04",
    slug: "da-anatomia-a-brasa",
    title: "Da Anatomia à Brasa",
    tagline: "R$ 150/pessoa · mín. 10",
    description: "Desossa ao vivo, técnicas de preparo e degustação guiada. Uma experiência educativa e profundamente sensorial, para grupos curiosos e apaixonados por gastronomia.",
    image: "/images/photos/anatomia-brasa-origem.jpg",
    icon: "/images/icons/da_anatomia_a_brasa.svg",
  },
  {
    id: 5,
    number: "05",
    slug: "brunch-braso-taste",
    title: "Brunch Braso Taste",
    tagline: "R$ 120/pessoa · mín. 10",
    description: "O melhor do brunch com a assinatura da brasa. Ideal para batizados, despedidas e encontros de família em clima diurno e leve.",
    image: "/images/photos/brunch-tabua.jpg",
    icon: "/images/icons/brunch_braso.svg",
  },
  {
    id: 6,
    number: "06",
    slug: "house-burger",
    title: "Braso House Burger",
    tagline: "R$ 120/pessoa · mín. 10",
    description: "Hambúrguer artesanal preparado ao vivo com ingredientes premium. Descontração e qualidade Braso Taste para aniversários e encontros informais.",
    image: "/images/photos/house-burger-sliders.jpg",
    icon: "/images/icons/house_burguer.svg",
  },
];

function ExperienceCard({ exp, index, reversed }: { exp: typeof experiences[0]; index: number; reversed: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed");
            }, 80);
          }
        });
      },
      { threshold: 0.12 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="reveal-on-scroll"
      style={{
        display: "grid",
        gridTemplateColumns: reversed ? "1fr 1.2fr" : "1.2fr 1fr",
        gap: "0",
        minHeight: "420px",
        borderBottom: "1px solid rgba(226,189,124,0.08)",
      }}
    >
      {/* Image */}
      <div
        style={{
          order: reversed ? 2 : 1,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={exp.image}
          alt={exp.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
            transform: "scale(1.04)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: reversed
              ? "linear-gradient(to left, rgba(15,25,35,0.6) 0%, transparent 60%)"
              : "linear-gradient(to right, rgba(15,25,35,0.6) 0%, transparent 60%)",
          }}
        />
        {/* Number overlay */}
        <div
          style={{
            position: "absolute",
            bottom: "1.5rem",
            [reversed ? "left" : "right"]: "1.5rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "4rem",
            fontWeight: 700,
            color: "rgba(226,189,124,0.15)",
            lineHeight: 1,
          }}
        >
          {exp.number}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          order: reversed ? 1 : 2,
          background: "#0F1923",
          padding: "3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Number + tagline */}
        <div className="flex items-center gap-3 mb-5">
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#E1BD7E",
            }}
          >
            {exp.number}
          </span>
          <span
            style={{
              width: "30px",
              height: "1px",
              background: "rgba(226,189,124,0.3)",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(226,189,124,0.5)",
            }}
          >
            {exp.tagline}
          </span>
        </div>

        {/* Icon */}
        <img
          src={exp.icon}
          alt=""
          style={{
            width: "44px",
            height: "44px",
            objectFit: "contain",
            marginBottom: "1.25rem",
          }}
        />

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
            fontWeight: 600,
            color: "#FAF6F1",
            lineHeight: 1.25,
            marginBottom: "1.25rem",
            letterSpacing: "-0.01em",
          }}
        >
          {exp.title}
        </h3>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#E1BD7E",
            marginBottom: "1.25rem",
          }}
        />

        {/* Description */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.88rem",
            fontWeight: 300,
            color: "rgba(250,246,241,0.6)",
            lineHeight: 1.85,
            marginBottom: "2rem",
          }}
        >
          {exp.description}
        </p>

        <Link
          href={`/experiencias/${exp.slug}`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#E1BD7E",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            marginBottom: "1.25rem",
            display: "inline-block",
          }}
        >
          Saiba mais →
        </Link>

        {/* CTA */}
        <button
          onClick={() => {
            document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#E1BD7E",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: 0,
            transition: "gap 0.3s ease",
            width: "fit-content",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "0.9rem";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "0.5rem";
          }}
        >
          Solicitar esta experiência <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// Mobile card version
function ExperienceCardMobile({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("revealed"), index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="reveal-on-scroll"
      style={{
        background: "#0F1923",
        border: "1px solid rgba(226,189,124,0.1)",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
        <img
          src={exp.image}
          alt={exp.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(15,25,35,0.8) 0%, transparent 60%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "3rem",
            fontWeight: 700,
            color: "rgba(226,189,124,0.2)",
            lineHeight: 1,
          }}
        >
          {exp.number}
        </span>
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(15,25,35,0.75)",
            border: "1px solid rgba(226,189,124,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={exp.icon} alt="" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
        </div>
      </div>
      <div style={{ padding: "1.75rem" }}>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.6rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#E1BD7E",
            marginBottom: "0.5rem",
          }}
        >
          {exp.tagline}
        </p>
        <h3
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#FAF6F1",
            lineHeight: 1.3,
            marginBottom: "0.75rem",
          }}
        >
          {exp.title}
        </h3>
        <div style={{ width: "30px", height: "1px", background: "#E1BD7E", marginBottom: "0.75rem" }} />
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.82rem",
            fontWeight: 300,
            color: "rgba(250,246,241,0.6)",
            lineHeight: 1.75,
            marginBottom: "1.25rem",
          }}
        >
          {exp.description}
        </p>
        <Link
          href={`/experiencias/${exp.slug}`}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#E1BD7E",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            marginBottom: "1rem",
            display: "inline-block",
          }}
        >
          Saiba mais →
        </Link>
        <button
          onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#E1BD7E",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: 0,
          }}
        >
          Solicitar <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}

export default function ExperiencesSection() {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experiencias"
      style={{ background: "#0F1923", paddingTop: "7rem" }}
    >
      {/* Section header */}
      <div className="container">
        <div ref={titleRef} className="reveal-on-scroll mb-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="section-label">Nossas Experiências</span>
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "#FAF6F1",
              lineHeight: 1.15,
              maxWidth: "600px",
              letterSpacing: "-0.02em",
            }}
          >
            Cada encontro,{" "}
            <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
              uma memória
            </span>
          </h2>
        </div>
      </div>

      {/* Desktop: editorial alternating layout */}
      <div className="hidden md:block">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} reversed={i % 2 !== 0} />
        ))}
      </div>

      {/* Mobile: stacked cards */}
      <div className="md:hidden container pb-12">
        <div className="grid gap-4">
          {experiences.map((exp, i) => (
            <ExperienceCardMobile key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
