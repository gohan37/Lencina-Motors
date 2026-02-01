import sobreNosotrosImg from "../assets/sobre nosotros.jpg";
import { useObserverAnimation } from "../hooks/useObserverAnimation";

const About = () => {
  const sectionRef = useObserverAnimation();

  return (
    <section id="about" className="slide-in-left" ref={sectionRef}>
      <div className="container" style={styles.container}>
        <img src={sobreNosotrosImg} alt="Sobre Nosotros" style={styles.image} className="img-cover" />

        <div style={styles.text}>
          <h2>Acerca de Nosotros</h2>
          <div className="blue-line"></div>
          <p>
            En Lencina Motors nos especializamos en ofrecer servicios de calidad
            en chapa y pintura, asegurando excelencia y cumplimiento.
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
  },
  image: {
    flex: 1,
    backgroundColor: "#ccc",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
    width: "100%",
  },
  text: {
    flex: 1,
  },
};

export default About;
