/**
 * BRASO TASTE — Quote Section
 * Full-width cinematic quote strip with background image
 * Between Chef and Gallery sections
 */

export default function QuoteSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "7rem 0",
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/images/photos/premium-meat.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 18, 28, 0.82)",
        }}
      />

      {/* Content */}
      <div
        className="container"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        {/* Gold ornament */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "60px",
              height: "1px",
              background: "rgba(226,189,124,0.4)",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "0.6rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#E1BD7E",
            }}
          >
            Filosofia
          </span>
          <span
            style={{
              width: "60px",
              height: "1px",
              background: "rgba(226,189,124,0.4)",
              display: "block",
            }}
          />
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#FAF6F1",
            lineHeight: 1.4,
            maxWidth: "800px",
            margin: "0 auto 2rem",
            letterSpacing: "-0.01em",
          }}
        >
          "O fogo não é apenas técnica.{" "}
          <em style={{ color: "#E1BD7E" }}>É hospitalidade.</em>{" "}
          É o calor que transforma estranhos em amigos."
        </blockquote>

        {/* Attribution */}
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(250,246,241,0.5)",
          }}
        >
          — Chef Fabio Tortelote
        </p>
      </div>
    </section>
  );
}
