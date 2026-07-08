/**
 * BRASO TASTE — About Section
 * Elegant split layout: text left, large image right
 * Off-white background
 */

import { useEffect, useRef } from "react";
import { Flame } from "lucide-react";

const pillars = [
  { label: "Paixão pelo Fogo", desc: "O poder transformador do fogo e da culinária para criar experiências únicas e autênticas" },
  { label: "Excelência e Qualidade", desc: "A perfeição em cada detalhe, da escolha dos ingredientes ao atendimento" },
  { label: "Personalização e Afeto", desc: "Cada evento é co-criado com o cliente, com carinho e atenção aos seus desejos" },
  { label: "Conexão e Comunidade", desc: "Os laços criados ao redor da mesa, promovendo a união e a celebração" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15 }
    );

    [imageRef, textRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      style={{
        background: "#FAF6F1",
        padding: "8rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          className="grid gap-16 items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))",
          }}
        >
          {/* Text column */}
          <div ref={textRef} className="reveal-on-scroll">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="section-label" style={{ color: "#2A4069" }}>
                Sobre a Braso Taste
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#2A4069",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Transformamos encontros em{" "}
              <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
                experiências memoráveis
              </span>
            </h2>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "#4A4A4A",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              A Braso Taste não vende apenas churrasco. Ela oferece experiências gastronômicas completas no espaço do cliente, conduzidas com maestria pelo Chef Fabio Tortelote.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "#4A4A4A",
                lineHeight: 1.9,
                marginBottom: "2.5rem",
              }}
            >
              Cada evento é único. Cada detalhe é pensado. Do primeiro contato ao último prato, a missão é superar expectativas e criar memórias que durem para sempre.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "#4A4A4A",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              Acreditamos que a comida é uma forma de arte e de expressão de afeto. Nosso propósito é usar a gastronomia para aproximar as pessoas e celebrar a vida, transformando eventos em momentos que ficam na memória e no coração.
            </p>

            {/* Pillars */}
            <div className="flex flex-col gap-5 mb-8">
              {pillars.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      background: "rgba(226,189,124,0.12)",
                      border: "1px solid rgba(226,189,124,0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <Flame size={14} color="#E1BD7E" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#2A4069",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {p.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 300,
                        color: "#6A6A6A",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-gold"
              style={{ background: "#2A4069", color: "#FAF6F1" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#1e2f4d";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#2A4069";
              }}
            >
              Solicitar Experiência
            </button>
          </div>

          {/* Image column */}
          <div
            ref={imageRef}
            className="reveal-on-scroll delay-200 relative"
            style={{ borderRadius: "2px", overflow: "hidden" }}
          >
            <img
              src="/images/photos/about-gathering.jpg"
              alt="Pessoas reunidas em torno da churrasqueira Braso Taste"
              className="w-full object-cover"
              style={{
                height: "clamp(400px, 55vw, 600px)",
                display: "block",
              }}
            />
            {/* Decorative gold border */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-12px",
                width: "60%",
                height: "60%",
                border: "1px solid rgba(226,189,124,0.3)",
                borderRadius: "2px",
                pointerEvents: "none",
              }}
            />
            {/* Stats badge */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                left: "2rem",
                background: "rgba(10,18,28,0.9)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(226,189,124,0.2)",
                padding: "1.25rem 1.5rem",
                borderRadius: "2px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#E1BD7E",
                  lineHeight: 1,
                  marginBottom: "0.25rem",
                }}
              >
                Full Service
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,241,0.7)",
                }}
              >
                Do Primeiro Contato ao Pós-Evento
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
