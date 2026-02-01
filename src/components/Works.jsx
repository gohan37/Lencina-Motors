import chapaTrabajoImg from "../assets/chapa trabajo.jpg";
import pinturaAutoImg from "../assets/pintura auto.jpg";
import pulidoTrabajosImg from "../assets/pulido trabajos.jpg";
import { useObserverAnimation } from "../hooks/useObserverAnimation";

const Works = () => {
  const containerRef = useObserverAnimation();

  const trabajos = [
    { id: 1, img: chapaTrabajoImg, alt: "Chapa Trabajo" },
    { id: 2, img: pinturaAutoImg, alt: "Pintura Auto" },
    { id: 3, img: pulidoTrabajosImg, alt: "Pulido Trabajos" },
    { id: 4, img: chapaTrabajoImg, alt: "Chapa Trabajo" },
  ];

  return (
    <section id="works" className="lila-bg">
      <div className="container slide-in-right" ref={containerRef}>
        <h2 style={{ textAlign: "center" }}>Nuestros Trabajos</h2>
        <div className="blue-line" style={{ margin: "10px auto 40px" }}></div>

        <div style={styles.grid}>
          {trabajos.map((trabajo) => (
            <img
              key={trabajo.id}
              src={trabajo.img}
              alt={trabajo.alt}
              style={styles.card}
              className="img-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#bbb",
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    objectFit: "cover",
  },
};

export default Works;
