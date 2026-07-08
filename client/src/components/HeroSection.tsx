/**
 * BRASO TASTE — Hero Section
 * Full-screen hero with ember particle animation
 * Dark overlay over chef grilling image
 */

import { useEffect, useRef } from "react";
import { MessageCircle, ChevronDown } from "lucide-react";

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const embersRef = useRef<Ember[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnEmber = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height * (0.6 + Math.random() * 0.35);
      embersRef.current.push({
        x,
        y,
        size: 1.5 + Math.random() * 3,
        speedY: -(0.4 + Math.random() * 1.2),
        speedX: (Math.random() - 0.5) * 0.8,
        opacity: 0.6 + Math.random() * 0.4,
        life: 0,
        maxLife: 80 + Math.random() * 120,
      });
    };

    let frameCount = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      if (frameCount % 4 === 0) {
        spawnEmber();
        if (Math.random() > 0.6) spawnEmber();
      }

      embersRef.current = embersRef.current.filter((e) => e.life < e.maxLife);

      for (const ember of embersRef.current) {
        ember.life++;
        ember.x += ember.speedX;
        ember.y += ember.speedY;
        ember.speedX += (Math.random() - 0.5) * 0.05;

        const progress = ember.life / ember.maxLife;
        const alpha = ember.opacity * (1 - progress);
        const currentSize = ember.size * (1 - progress * 0.7);

        const gradient = ctx.createRadialGradient(
          ember.x, ember.y, 0,
          ember.x, ember.y, currentSize * 2
        );
        gradient.addColorStop(0, `rgba(255, 220, 100, ${alpha})`);
        gradient.addColorStop(0.4, `rgba(255, 120, 30, ${alpha * 0.7})`);
        gradient.addColorStop(1, `rgba(255, 60, 0, 0)`);

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const scrollToExperiences = () => {
    document.querySelector("#experiencias")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: "600px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/photos/hero-fogo.jpg')`,
        }}
      />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(10,18,28,0.85) 0%, rgba(10,18,28,0.5) 50%, rgba(10,18,28,0.3) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(10,18,28,0.9) 0%, transparent 50%)",
        }}
      />

      {/* Ember canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ zIndex: 3, paddingTop: "80px" }}
      >
        <div className="container">
          <div style={{ maxWidth: "680px" }}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="section-label">Chef Fabio Tortelote</span>
            </div>

            {/* Main title */}
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 800,
                color: "#FAF6F1",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Sabor{" "}
              <span
                style={{
                  color: "#E1BD7E",
                }}
              >
                Braso
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                color: "rgba(250,246,241,0.8)",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                letterSpacing: "0.02em",
              }}
            >
              A experiência gastronômica em sua casa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5521974064098?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20uma%20experiência%20Braso%20Taste."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle size={16} />
                Solicitar Orçamento
              </a>
              <button
                className="btn-outline-gold"
                onClick={scrollToExperiences}
              >
                Conhecer as Experiências
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToExperiences}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          zIndex: 3,
          background: "none",
          border: "none",
          color: "rgba(250,246,241,0.5)",
          animation: "bounce 2s infinite",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          Explorar
        </span>
        <ChevronDown size={18} />
      </button>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  );
}
