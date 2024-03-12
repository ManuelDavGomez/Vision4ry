import styles from "./services.module.css";
import tecnico from "../../assets/svg/destornillador.png";
import video from "../../assets/svg/video.png";
import diseño from "../../assets/svg/diseño.png";
import camara from "../../assets/svg/camara.png";
import pc from "../../assets/svg/pc.png";
import redes from "../../assets/svg/redes.png";


const Services = () => {
  return (
    <>
      <section className={styles.services_container_general} id="services">
        <article
          className={`${styles.services_container} ${styles.ejem}`}
          id="animate"
        >
          <h2>Nuestros servicios y soluciones.</h2>
          <p className={styles.services_text}>
            abarcamos diversas áreas y están diseñados para ayudarte a alcanzar
            tus metas.
          </p>

          <button className={styles.services_btn}>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=3116041069"
            >
              Comienza ya
            </a>
          </button>
        </article>

        <article
          className={`${styles.services_container} ${styles.services_two}`}
        >
          <article className={styles.services_div}>
            <img src={tecnico} alt="" />

            <article>
              <h3 className={styles.text_title}>Tecnico de computo</h3>
              <p className={styles.text_paragraph}>
                Experto en soluciones tecnológicas, aliado indispensable en el
                mundo digital.
              </p>
            </article>
          </article>

          <article className={styles.services_div}>
            <img src={video} alt="" />

            <article>
              <h3 className={styles.text_title}>Servicios de videos</h3>
              <p className={styles.text_paragraph}>
                Transforma tu contenido en impactantes experiencias visuales.
              </p>
            </article>
          </article>

          <article className={styles.services_div}>
            <img src={diseño} alt="" />

            <article>
              <h3 className={styles.text_title}>Diseño grafico</h3>
              <p className={styles.text_paragraph}>
                Crea visualmente impresionante y comunica con impacto.
              </p>
            </article>
          </article>

          <article className={styles.services_div}>
            <img src={camara} alt="" />

            <article>
              <h3 className={styles.text_title}>Servicios de fotografia</h3>
              <p className={styles.text_paragraph}>
                Captura momentos memorables con profesionalismo y estilo.
              </p>
            </article>
          </article>

          <article className={styles.services_div}>
            <img src={pc} alt="" />

            <article>
              <h3 className={styles.text_title}>Desarrollo web</h3>
              <p className={styles.text_paragraph}>
                Construyendo la presencia en línea que tu negocio necesita.
              </p>
            </article>
          </article>

          <article className={styles.services_div}>
            <img src={redes} alt="" />

            <article>
              <h3 className={styles.text_title}>Gestion de redes sociales</h3>
              <p className={styles.text_paragraph}>
                Impulsa tu presencia en línea y conecta con tu audiencia de
                manera efectiva.
              </p>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};

export default Services;
