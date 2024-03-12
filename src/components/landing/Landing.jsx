import styles from "./landing.module.css";
import Hero from "../../pages/hero/Hero";
import Services from "../../pages/services/Services";
import Portafolio from "../../pages/portafolio/Portafolio";
import Misivision from "../../pages/misivision/Misivision";
import Equipo from "../../pages/equipo/Equipo";
import Contacto from "../../pages/contact/Contact";
import Pack from "../../pages/pack/Pack";

const Landing = () => {
  return (
    <>
      <main>
        <section className={styles.landing_container_general}>
          <Hero />
          <Services />
          <Equipo />
          <Misivision />
          <Portafolio />
          <Contacto />
          <Pack />
        </section>
      </main>
    </>
  );
};

export default Landing;
