import styles from "./equipo.module.css";
import manuel from "../../assets/img/equipo.jpg";
import libardo from "../../assets/img/equipo2.jpg";
import yorks from "../../assets/img/equipo3.jpg";
import andres from "../../assets/img/equipo4.jpg";

const Equipo = () => {
  return (
    <>
      <section className={styles.equipo_container_general} id="equipo">
        <h2 id="equip">Nuestro equipo de trabajo</h2>

        <section className={`${styles.equipos_containers} `}>
          <article
            className={styles.equipo_container}
            data-aos="fade-up-right"
            data-aos-duration="2000"
                data-aos-once="true"
          >
            <img src={andres} alt="" />
          </article>

          <article
            className={`${styles.equipo_container} `}
            data-aos="fade-up-left"
            data-aos-duration="2000"
                data-aos-once="true"
          >
            <img src={libardo} alt="" />
          </article>

          <article
            className={`${styles.equipo_container} `}
            data-aos="fade-up-right"
            data-aos-duration="2000"
                data-aos-once="true"
          >
            <img src={manuel} alt="" />
          </article>

          <article
            className={`${styles.equipo_container} `}
            data-aos="fade-up-left"
            data-aos-duration="2000"
                data-aos-once="true"
          >
            <img src={yorks} alt="" />
          </article>
        </section>
      </section>
    </>
  );
};

export default Equipo;
