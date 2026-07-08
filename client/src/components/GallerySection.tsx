/**
 * BRASO TASTE — Gallery Section
 * Masonry-style gallery with hover effects
 * Off-white background, prepared for Instagram integration
 */

import { useEffect, useRef, useState } from "react";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/images/photos/gallery-carne-cortada.jpg",
    alt: "Carne premium na brasa",
    span: "col-span-1 row-span-2",
  },
  {
    id: 2,
    src: "/images/photos/premium-meat.jpg",
    alt: "Corte premium Braso Taste",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/photos/brunch-tabua.jpg",
    alt: "Tábua de frios Braso Taste",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "/images/photos/gallery-fabio-espeto.jpg",
    alt: "Chef Fabio Tortelote preparando o espeto",
    span: "col-span-2 row-span-1",
  },
  {
    id: 5,
    src: "/images/photos/house-burger-sliders.jpg",
    alt: "Sanduíches artesanais Braso Taste",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    src: "/images/photos/vegano-legumes.jpg",
    alt: "Opção vegana Braso Taste — legumes grelhados",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

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
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
      if (e.key === "ArrowLeft") setLightbox((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <section
      id="galeria"
      style={{
        background: "#FAF6F1",
        padding: "8rem 0",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={titleRef}
          className="reveal-on-scroll flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-divider" />
              <span className="section-label" style={{ color: "#2A4069" }}>
                Galeria
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#2A4069",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Momentos que{" "}
              <span style={{ color: "#E1BD7E", fontWeight: 700 }}>
                inspiram
              </span>
            </h2>
          </div>

          <a
            href="https://www.instagram.com/brasotaste"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#2A4069",
              textDecoration: "none",
              borderBottom: "1px solid rgba(42,64,105,0.3)",
              paddingBottom: "2px",
              transition: "color 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#E1BD7E";
              (e.currentTarget as HTMLElement).style.borderColor = "#E1BD7E";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#2A4069";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(42,64,105,0.3)";
            }}
          >
            <Instagram size={14} />
            @brasotaste
          </a>
        </div>

        {/* Gallery grid */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "clamp(160px, 20vw, 240px)",
          }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.id}
              className={`${img.span} relative overflow-hidden group cursor-pointer`}
              style={{ borderRadius: "2px" }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700"
                style={{ transform: "scale(1.05)" }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background: "rgba(42,64,105,0)",
                  transition: "background 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(42,64,105,0.4)";
                  const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(42,64,105,0)";
                  const img = e.currentTarget.previousElementSibling as HTMLImageElement;
                  if (img) img.style.transform = "scale(1.05)";
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid rgba(226,189,124,0.8)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span style={{ color: "#E1BD7E", fontSize: "1.2rem" }}>+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 300,
              color: "#6A6A6A",
              marginBottom: "1rem",
              letterSpacing: "0.05em",
            }}
          >
            Acompanhe nossas experiências no Instagram
          </p>
          <a
            href="https://www.instagram.com/brasotaste"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ background: "#2A4069", color: "#FAF6F1" }}
          >
            <Instagram size={16} />
            Seguir @brasotaste
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "#FAF6F1",
              cursor: "pointer",
            }}
          >
            <X size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
            style={{
              position: "absolute",
              left: "1.5rem",
              background: "none",
              border: "none",
              color: "#FAF6F1",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={32} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            style={{
              maxWidth: "90vw",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "2px",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
            style={{
              position: "absolute",
              right: "1.5rem",
              background: "none",
              border: "none",
              color: "#FAF6F1",
              cursor: "pointer",
            }}
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </section>
  );
}
