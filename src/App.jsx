import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Intro from "./components/Intro";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Reserva from "./components/Reserva";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Works />
              <Intro />
              <Services />
              <Contact />
            </>
          }
        />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
