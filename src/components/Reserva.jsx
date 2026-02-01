import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./Reserva.css";

const Reserva = () => {
  const [searchParams] = useSearchParams();
  const servicioParam = searchParams.get("servicio");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: servicioParam || "chapa",
    fecha: "",
    hora: "",
    descripcion: "",
  });

  const servicios = [
    { id: "chapa", nombre: "Chapa" },
    { id: "pintura", nombre: "Pintura" },
    { id: "pulido", nombre: "Pulido" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva enviada:", formData);
    alert("¡Reserva enviada! Nos contactaremos pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      servicio: "chapa",
      fecha: "",
      hora: "",
      descripcion: "",
    });
  };

  return (
    <section id="reserva" style={styles.section}>
      <div className="container">
        <h2 style={styles.title}>Reserva tu Turno</h2>
        <div className="blue-line" style={{ margin: "10px auto 40px" }}></div>

        <div style={styles.formContainer} className="form-container">
          <form onSubmit={handleSubmit} style={styles.form} className="reserva-form">
            <div style={styles.formGroup}>
              <label htmlFor="nombre">Nombre completo:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="Tu nombre"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="tu@email.com"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                style={styles.input}
                placeholder="11 1234 5678"
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="servicio">Servicio:</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
                style={styles.select}
              >
                {servicios.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div style={styles.rowGroup} className="row-group">
              <div style={styles.formGroup}>
                <label htmlFor="fecha">Fecha:</label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.formGroup}>
                <label htmlFor="hora">Hora:</label>
                <input
                  type="time"
                  id="hora"
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  required
                  style={styles.input}
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="descripcion">Descripción (opcional):</label>
              <textarea
                id="descripcion"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleChange}
                style={styles.textarea}
                placeholder="Cuéntanos más detalles..."
                rows="4"
              />
            </div>

            <button type="submit" style={styles.button}>
              Reservar Turno
            </button>
          </form>

          <div style={styles.infoBox} className="info-box">
            <h3>¿Necesitas ayuda?</h3>
            <div className="blue-line" style={{ margin: "10px 0 20px" }}></div>
            <p>
              <strong>Teléfono:</strong> 11 1234 5678
            </p>
            <p>
              <strong>Email:</strong> contacto@lencinamotors.com
            </p>
            <p>
              <strong>Horario:</strong> Lunes a Viernes 9:00 - 18:00
            </p>
            <p style={{ marginTop: "20px" }}>
              Nos comprometemos a responder tu solicitud dentro de 24 horas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "40px 0",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2.5rem",
  },
  formContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    alignItems: "start",
  },
  form: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "column",
  },
  rowGroup: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
  },
  input: {
    padding: "12px",
    border: "2px solid #e0e0e0",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "5px",
    transition: "border-color 0.3s ease",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    padding: "12px",
    border: "2px solid #e0e0e0",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "5px",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "12px",
    border: "2px solid #e0e0e0",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "5px",
    fontFamily: "Arial, sans-serif",
    resize: "vertical",
    width: "100%",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#1e2cff",
    color: "#fff",
    padding: "14px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100%",
    boxSizing: "border-box",
  },
  infoBox: {
    backgroundColor: "#d8d9f2",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  },
};

export default Reserva;
