import { useObserverAnimation } from "../hooks/useObserverAnimation";

const Intro = () => {
  const titleRef = useObserverAnimation();
  const subtitleRef = useObserverAnimation();

  return (
    <section id="intro" style={styles.section}>
      <div style={{ textAlign: "center" }}>
        <h2 style={styles.title} className="fade-in-up" ref={titleRef}>
          Excelencia en Chapa y Pintura
        </h2>
        <p style={styles.subtitle} className="fade-in-up" ref={subtitleRef}>
          Transformamos tu automóvil en tiempo récord
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#c5c7e0",
    padding: "60px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#000",
    marginBottom: "15px",
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "#555",
    margin: "0",
  },
};

export default Intro;
