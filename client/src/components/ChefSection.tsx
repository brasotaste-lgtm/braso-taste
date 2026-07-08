/**
 * BRASO TASTE — Chef Section
 * Dark background with chef portrait and elegant bio
 */

import { useEffect, useRef } from "react";
import { Award, Flame, Heart } from "lucide-react";

const credentials = [
  { icon: Flame, label: "Culinária de Fogo Autoral", desc: "Técnica e curadoria de cortes aplicadas a experiências privadas" },
  { icon: Heart, label: "Fundação a Dois", desc: "Tatiana e Fabio à frente de cada detalhe, do primeiro contato ao último prato" },
  { icon: Award, label: "Full Service & Turnkey", desc: "Cada evento pensado do início ao fim, para o anfitrião apenas estar presente" },
];

export default function ChefSection() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

    [textRef, imageRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="chef"
      style={{
        background: "#2A4069",
        padding: "8rem 0",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          className="grid gap-16 items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
          }}
        >
          {/* Image column */}
          <div
            ref={imageRef}
            className="reveal-on-scroll relative order-last lg:order-first"
          >
            <div
              style={{
                position: "relative",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/photos/chef-portrait.jpg"
                alt="Chef Fabio Tortelote"
                className="w-full object-cover"
                style={{
                  height: "clamp(450px, 60vw, 620px)",
                  display: "block",
                  filter: "brightness(0.95)",
                }}
              />
              {/* Overlay gradient */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(42,64,105,0.6) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Decorative gold frame */}
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "-16px",
                width: "50%",
                height: "50%",
                border: "1px solid rgba(226,189,124,0.25)",
                borderRadius: "2px",
                pointerEvents: "none",
              }}
            />

            {/* Name badge */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                background: "rgba(226,189,124,0.95)",
                padding: "1rem 1.5rem",
                borderRadius: "2px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  lineHeight: 1.2,
                }}
              >
                Chef Fabio Tortelote
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.7)",
                  marginTop: "0.2rem",
                }}
              >
                Chef Executivo & Fundador
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(26,26,26,0.7)",
                  marginTop: "0.2rem",
                }}
              >
                ao lado de Tatiana, gestão & atendimento
              </p>
            </div>
          </div>

          {/* Text column */}
          <div ref={textRef} className="reveal-on-scroll delay-200">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="section-label">O Chef</span>
            </div>

            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#FAF6F1",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
              }}
            >
              Onde a{" "}
              <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
                técnica
              </span>{" "}
              encontra o fogo
            </h2>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(250,246,241,0.75)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              Fabio Tortelote é o coração da Braso Taste. À frente da curadoria gastronômica e da execução da culinária de fogo, ele conduz cada evento como uma jornada sensorial — do porcionamento ao ponto exato da brasa.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "0.95rem",
                fontWeight: 300,
                color: "rgba(250,246,241,0.75)",
                lineHeight: 1.9,
                marginBottom: "1.25rem",
              }}
            >
              A Braso Taste nasceu no casamento junino de Tatiana e Fabio — uma celebração em que fogo, mesa posta, natureza e cuidado artesanal se encontraram para criar algo com identidade própria. Foi ali que a dupla percebeu o poder de transformar um encontro em memória organizada, sem sobrecarregar quem recebe.
            </p>

            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "#E1BD7E",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
                borderLeft: "2px solid rgba(226,189,124,0.4)",
                paddingLeft: "1.25rem",
              }}
            >
              O fogo prepara a comida. As pessoas dão sentido à mesa.
            </p>

            {/* Credentials */}
            <div className="flex flex-col gap-5 mb-8">
              {credentials.map((cred, i) => {
                const Icon = cred.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        background: "rgba(226,189,124,0.1)",
                        border: "1px solid rgba(226,189,124,0.25)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={15} color="#E1BD7E" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#E1BD7E",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {cred.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontSize: "0.85rem",
                          fontWeight: 300,
                          color: "rgba(250,246,241,0.65)",
                        }}
                      >
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn-outline-gold"
            >
              Contratar o Chef
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
