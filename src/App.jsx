import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="homepage">
      <Navbar />
      <Hero/>
    </section>
    <section>Hero</section>
    <section id="services">Parallax</section>
    <section>Services</section>
    <section id="proyects">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="contact">Contact</section>

  </div>;
};

export default App;
