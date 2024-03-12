import styles from "./hero.module.css";
import Heroimg from "../../assets/img/hero_back.avif";
import Logo from "../../assets/img/heroimg.avif";
import React from "react";


const Hero = () => {

  return (
    <>
      <section className={styles.hero_container_general} id="hero">
        <article
          className={styles.heros_containers}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="false"
        >
          <img src={Logo} alt="" className={styles.hero_img} />

          <button target="_blank">
            <a href="https://api.whatsapp.com/send?phone=3116041069">
              Contactanos ↗
            </a>
          </button>

          <p>
            ¡Hola! <br /> Somos <strong> VISION4RY </strong>, una empresa
            especializada en la producción y creación de contenido. Contamos con
            un equipo experto en Videos Promocionales, Animación Digital,
            Fotografía Profesional, Diseño Gráfico y Desarrollo Web. Trabajamos
            estrechamente con nuestros clientes para crear contenido impactante
            que impulse su negocio. <br />
            <strong> ¡Captura momentos y emociones con VISIONARY!</strong>
          </p>
        </article>

        <article
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="false"
          className={`${styles.heros_containers} ${styles.container_two}`}
        >
          <img src={Heroimg} alt="" className={styles.hero_img2} />
        </article>
      </section>
    </>
  );
};

export default Hero;
