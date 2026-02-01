import { useNavigate } from "react-router-dom";
import chapaImg from "../assets/chapa.jpg";
import pinturaImg from "../assets/pintura.jpg";
import pulidoImg from "../assets/pulido.jpg";
import { useObserverAnimation } from "../hooks/useObserverAnimation";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();
  const titleRef = useObserverAnimation();

  const servicios = [
    {
      id: "chapa",
      titulo: "Chapa",
      descripcion: "Reparaciones estructurales con máxima precisión.",
      imagen: chapaImg,
    },
    {
      id: "pintura",
      titulo: "Pintura",
      descripcion: "Pintura profesional con acabado impecable.",
      imagen: pinturaImg,
    },
    {
      id: "pulido",
      titulo: "Pulido",
      descripcion: "Brillo y protección para tu vehículo.",
      imagen: pulidoImg,
      border: true,
    },
  ];

  const handleServiceClick = (serviceId) => {
    navigate(`/reserva?servicio=${serviceId}`);
  };

  return (
    <section id="services" className="lila-bg slide-in-left" ref={titleRef}>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Servicios
        </h2>
        <div className="blue-line" style={{ margin: "10px auto 40px" }}></div>

        <div style={styles.grid}>
          {servicios.map((servicio, index) => (
            <div
              key={index}
              style={{
                ...styles.card,
                ...(servicio.border ? { borderBottom: "4px solid #1e2cff" } : {}),
              }}
              className="service-card"
              onClick={() => handleServiceClick(servicio.id)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") handleServiceClick(servicio.id);
              }}
            >
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                style={styles.imagen}
                className="img-cover"
              />
              <div style={styles.content}>
                <h3 style={{ marginTop: 0 }}>{servicio.titulo}</h3>
                <p>{servicio.descripcion}</p>
                <span style={styles.ctaText}>Reservar →</span>
              </div>
            </div>
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
    gap: "30px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1)",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  imagen: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    display: "block",
    transition: "transform 0.3s ease-in-out",
  },
  content: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  ctaText: {
    marginTop: "auto",
    color: "#1e2cff",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Services;
