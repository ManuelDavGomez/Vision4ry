import styles from "./portafolio.module.css";
import Camera from "../../assets/img/camera.jpg";
import Film from "../../assets/img/film.jpg";
import Graphic from "../../assets/img/graphic.jpg";
import Web from "../../assets/img/web.jpg";
import Grafico from "../../assets/img/grafico.avif";

const Portafolio = () => {
  return (
    <>
      <section className={styles.portafolio_container_general} id="portafolio">
        <article className={`${styles.portafolio_container}`}>
          <h2>Nuestros proyectos y trabajos</h2>
          <p className={styles.portafolio_text}>
            El resultado de nuestra pasión y dedicación. Nos enorgullece
            presentar una amplia gama de trabajos
          </p>
        </article>

        <article className={styles.portafolio_proyect}>
          <section
            className={`${styles.proyect_item} `}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a href="https://vision4ry-portafolio-web.netlify.app/">
              <div className={styles.image_container}>
                <img src={Web} alt="" />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3>Desarrollo web</h3>
                    <p>Dame click para ver los proyectos</p>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section
            className={`${styles.proyect_item} `}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a href="https://vision4ry-portafolio-fotografia.netlify.app/">
              <div className={styles.image_container}>
                <img src={Camera} alt="" />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3>Fotografia</h3>
                    <p>Dame click para ver los proyectos</p>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section
            className={`${styles.proyect_item} `}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a href="https://vision4ry-portafolio-audiovisual.netlify.app/">
              <div className={styles.image_container}>
                <img src={Film} alt="" />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3>Videografia</h3>
                    <p>Dame click para ver los proyectos</p>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section
            className={`${styles.proyect_item} `}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a href="https://vision4ry-portafolio-grafico.netlify.app/">
              <div className={styles.image_container}>
                <img src={Graphic} alt="" />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3>Diseño Grafico</h3>
                    <p>Dame click para ver los proyectos</p>
                  </div>
                </div>
              </div>
            </a>
          </section>

          <section
            className={`${styles.proyect_item} `}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <a href="https://vision4ry-portafolio.netlify.app/ ">
              <div className={styles.image_container}>
                <img src={Grafico} alt="" />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <h3>Vision4ry</h3>
                    <p>Dame click para ver los proyectos</p>
                  </div>
                </div>
              </div>
            </a>
          </section>
        </article>
      </section>
    </>
  );
};

export default Portafolio;
