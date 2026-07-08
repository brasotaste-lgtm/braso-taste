/**
 * BRASO TASTE — Testimonials Section
 * Elegant testimonial cards on dark background
 * Prepared for future real testimonials
 */

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ana Carolina M.",
    role: "Evento Corporativo",
    text: "O Chef Fabio transformou nosso evento corporativo em uma experiência inesquecível. A qualidade das carnes, a atenção aos detalhes e o atendimento foram impecáveis. Todos os convidados ficaram encantados.",
    stars: 5,
    city: "Rio de Janeiro, RJ",
  },
  {
    id: 2,
    name: "Roberto & Fernanda S.",
    role: "Celebração de Aniversário",
    text: "Contratamos a Braso Taste para o aniversário de 50 anos do meu marido. Foi simplesmente perfeito. A experiência gastronômica superou todas as expectativas. Voltaremos com certeza!",
    stars: 5,
    city: "Niterói, RJ",
  },
  {
    id: 3,
    name: "Marcelo T.",
    role: "Jantar Privativo",
    text: "Descobri a Braso Taste através de uma indicação e não me arrependo. O Chef Fabio é um profissional excepcional, apaixonado pelo que faz. O menu personalizado foi uma obra de arte.",
    stars: 5,
    city: "São Paulo, SP",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} fill="#E1BD7E" color="#E1BD7E" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="depoimentos"
      style={{
        background: "#0F1923",
        padding: "8rem 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div ref={titleRef} className="reveal-on-scroll text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="gold-divider" />
            <span className="section-label">Depoimentos</span>
            <span className="gold-divider" />
          </div>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              color: "#FAF6F1",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            O que dizem nossos{" "}
            <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
              convidados
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="reveal-on-scroll"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(226,189,124,0.12)",
                  borderLeft: "3px solid #E1BD7E",
                  padding: "2rem",
                  borderRadius: "2px",
                  transition: "background 0.35s ease, box-shadow 0.35s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(226,189,124,0.04)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Quote icon */}
                <Quote
                  size={28}
                  color="rgba(226,189,124,0.25)"
                  style={{ marginBottom: "1rem" }}
                />

                {/* Stars */}
                <div style={{ marginBottom: "1rem" }}>
                  <StarRating count={t.stars} />
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "0.88rem",
                    fontWeight: 300,
                    color: "rgba(250,246,241,0.75)",
                    lineHeight: 1.8,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div
                  style={{
                    borderTop: "1px solid rgba(226,189,124,0.1)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#FAF6F1",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#E1BD7E",
                    }}
                  >
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 300,
              color: "rgba(250,246,241,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            Seja o próximo a viver esta experiência
          </p>
        </div>
      </div>
    </section>
  );
}
