import styles from "./contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={styles.contact_container_general} id="contacto">
        <article className={styles.contact_container}>
          <h2>Contactanos para saber mas de nosotros</h2>
          <p className={styles.contact_text}>
            Por medio de nuestras redes sociales, ubicacion y formulario
          </p>
        </article>

        <article className={styles.information_container_general} id="contact">
          <article className={styles.logos_container}>
            <hr />
            <a
              href="https://api.whatsapp.com/send?phone=3116041069"
              target="_blank"
            >
              <i className="bi bi-whatsapp">
                <span>WhatsApp</span>
              </i>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100094518550924&mibextid=ZbWKwL"
              target="_blank"
            >
              <i className="bi bi-facebook">
                <span>Facebook</span>
              </i>
            </a>

            <a
              href=""
              target="_blank"
            >
              <i className="bi bi-instagram">
                <span>Instagram</span>
              </i>
            </a>

            <a
              href="https://www.youtube.com/channel/UC9L4derAQpj-XQ_XJahhHWA"
              target="_blank"
            >
              <i className="bi bi-youtube">
                <span>Youtube</span>
              </i>
            </a>

            <a
              href="https://www.tiktok.com/@vision4ry_oficial?_t=8dvwDJjIi0s&_r=1"
              target="_blank"
            >
              <i className="bi bi-tiktok">
                <span>TikTok</span>
              </i>
            </a>
            <hr />
          </article>

          <form className={styles.form_container} action="https://formspree.io/f/xnqknwzp" method="POST">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" required />

            <label htmlFor="text">Texto:</label>
            <textarea id="text" name="text" required />
            <input type="submit" value="Enviar" style={{ cursor: "pointer" }} />
          </form>
        </article>
      </section>
    </>
  );
};

export default Contact;
