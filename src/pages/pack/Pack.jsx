import styles from "./pack.module.css";

const Pack = () => {
  return (
    <>
      <section className={styles.pack_container_general} id="paquetes">
        <article className={styles.pack_container}>
          <h2>Nuestros precios y planes</h2>
          <p className={styles.pack_text}>
            Mira nuestros diferentes precios y novedades de cada uno
          </p>
        </article>

        <section className={styles.price_container_general}>
          <article className={styles.price_container} data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            <h3 className={styles.price_title}>Plan Basico</h3>
            <p className={styles.price_subtitle}>$ 1'500.000</p>
            <p className={styles.price_texts}>
              Aquí tienes el enfoque perfecto para potenciar negocios de pequeña
              escala y garantizar su éxito en el mercado actual.
            </p>
            <hr />
            <ul>
              <li>12 Diseños Graficos</li>
              <li>25 Fotografias</li>
              <li>12 Videos</li>
              <li>1 Pagina web basica</li>
            </ul>
            <hr />
          </article>

          <article className={styles.price_container} data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            <h3 className={styles.price_title}>Plan Medium</h3>
            <p className={styles.price_subtitle}>$ 2'200.000</p>
            <p className={styles.price_texts}>
              Este plan está especialmente diseñado para negocios de tamaño
              mediano, brindando una estrategia altamente efectiva y adaptada a
              las necesidades específicas de este segmento empresarial.
            </p>
            <hr />
            <ul>
              <li>25 Diseños</li>
              <li>60 Fotografias</li>
              <li>30 Videos</li>
              <li>1 Pagina web media</li>
            </ul>
            <hr />
          </article>

          <article className={styles.price_container} data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
            <h3 className={styles.price_title}>Plan Pro max</h3>
            <p className={styles.price_subtitle}>$ 3'300.000</p>
            <p className={styles.price_texts}>
              Este plan está diseñado específicamente para satisfacer las
              necesidades y desafíos de empresas más grandes. Con un enfoque
              estratégico y personalizado, nuestro plan proporciona soluciones
              integrales que impulsan el crecimiento y la rentabilidad en este
              segmento empresarial.
            </p>
            <hr />
            <ul>
              <li>40 Diseños</li>
              <li>100 Fotografias</li>
              <li>40 Videos</li>
              <li>1 Pagina web Pro</li>
              <li>+ 6 semanas de trabajo</li>
            </ul>
            <hr />
          </article>
        </section>
      </section>
    </>
  );
};

export default Pack;
