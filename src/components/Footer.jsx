const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p>© 2026 Lencina Motors. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0a0f8f",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
    position: "sticky",
    bottom: "0",
    width: "100%",
    boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.1)",
  },
};

export default Footer;
