import { useObserverAnimation } from "../hooks/useObserverAnimation";

const Contact = () => {
  const containerRef = useObserverAnimation();

  return (
    <section id="contact" style={styles.section}>
      <div className="container fade-in-up" ref={containerRef}>
        <div style={styles.content}>
          <h2 style={styles.title}>¿Necesitas más información?</h2>
          <p style={styles.subtitle}>Contactanos y te ayudaremos con lo que necesites</p>
          
          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.icon}>📍</div>
              <h3 style={styles.cardTitle}>Dirección</h3>
              <p style={styles.cardText}>Visítanos en nuestro taller</p>
            </div>
            
            <div style={styles.contactCard}>
              <div style={styles.icon}>📞</div>
              <h3 style={styles.cardTitle}>Teléfono</h3>
              <p style={styles.cardText}>11 1234 5678</p>
            </div>
            
            <div style={styles.contactCard}>
              <div style={styles.icon}>✉️</div>
              <h3 style={styles.cardTitle}>Email</h3>
              <p style={styles.cardText}>contacto@lencinamotors.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#c5c7e0",
    padding: "100px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 20px",
  },
  title: {
    fontSize: "2.8rem",
    color: "#000",
    marginBottom: "15px",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#333",
    marginBottom: "50px",
    fontWeight: "400",
  },
  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
  },
  contactCard: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  icon: {
    fontSize: "3rem",
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#1e2cff",
    marginBottom: "10px",
    fontWeight: "600",
  },
  cardText: {
    fontSize: "1rem",
    color: "#555",
    margin: "0",
  },
};

export default Contact;
