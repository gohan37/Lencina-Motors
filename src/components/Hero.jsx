import heroImg from "../assets/img1 (2).jpg";
import { useObserverAnimation } from "../hooks/useObserverAnimation";

const Hero = () => {
  const leftRef = useObserverAnimation();
  const rightRef = useObserverAnimation();

  return (
    <section id="inicio" style={{ backgroundColor: "#c5c7e0", display: "flex", flexDirection: "column", marginTop: "-70px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, justifyContent: "flex-start", alignItems: "center", paddingTop: "0px", paddingBottom: "15px" }}>
        <div className="hero-left slide-in-left" ref={leftRef} style={{ textAlign: "center", width: "100%", padding: "0 20px" }}>
          <span style={styles.badge}>Lencina Motors</span>
          <h1 style={{ fontSize: "3.5rem", marginTop: "30px", marginBottom: "20px" }}>Bienvenido a Lencina Motors</h1>
          <p style={{ fontSize: "1.5rem", color: "#333", margin: "0" }}>Tu taller de confianza para un acabado perfecto</p>
        </div>
      </div>

      <div style={{ backgroundColor: "#fff", width: "100%", padding: "40px 0" }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "0 20px" }}>
          <div className="hero-right slide-in-right" ref={rightRef} style={{ width: "100%", maxWidth: "600px" }}>
            <img src={heroImg} alt="Lencina Motors" className="image-placeholder" style={styles.imagePlaceholder} />
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: "flex",
    minHeight: "80vh",
  },
  left: {
    flex: 1,
    backgroundColor: "#d8d9f2",
    padding: "80px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",
  },
  badge: {
    backgroundColor: "#fff",
    width: "fit-content",
    padding: "5px 15px",
    borderRadius: "20px",
    fontSize: "14px",
  },
  right: {
    flex: 1,
    backgroundColor: "#ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    color: "#555",
    minHeight: "300px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Hero;
