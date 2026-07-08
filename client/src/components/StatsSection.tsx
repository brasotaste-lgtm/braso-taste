/**
 * BRASO TASTE — Stats Section
 * Elegant numbers strip between sections
 * Dark background with gold numbers
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 6, suffix: "", label: "Tipos de Experiência" },
  { value: 7, suffix: "", label: "Municípios Atendidos" },
  { value: 100, suffix: "%", label: "Eventos Personalizados" },
  { value: 2, suffix: "", label: "Sócios à Frente de Cada Evento" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let count = 0;
          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              setCurrent(target);
              clearInterval(timer);
            } else {
              setCurrent(Math.floor(count));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {current}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        background: "#1A1A1A",
        padding: "4rem 0",
        borderTop: "1px solid rgba(226,189,124,0.08)",
        borderBottom: "1px solid rgba(226,189,124,0.08)",
      }}
    >
      <div className="container">
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{
                padding: "1rem",
                borderRight: i < stats.length - 1 ? "1px solid rgba(226,189,124,0.08)" : "none",
              }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#E1BD7E",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </p>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "rgba(250,246,241,0.45)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
