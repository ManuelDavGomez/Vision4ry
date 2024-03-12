import styles from "./misivision.module.css";

const Misivision = () => {
  return (
    <>
      <section className={styles.misivision_container_general} id="misivision">
        <article className={styles.misivision_container}>
          <h2>Mision</h2>
          <p className={styles.misivision_text}>
          En visionary creamos contenido audiovisual con gran impacto en el mercado, a través de la innovación, excelencia y pasión, para impulsar el reconocimiento empresarial de nuestros clientes
          </p>
        </article>

        <article className={styles.misivision_container}>
          <h2>Vision</h2>
          <p className={styles.misivision_text}>
          Convertirnos en una de las empresas audiovisuales, de desarrollo web y marketing digital mejor posicionadas a nivel internacional, inspirando por medio de nuestras creaciones y dejando una huella duradera en la cultura y la sociedad
          </p>
        </article>
      </section>
    </>
  );
};

export default Misivision;
