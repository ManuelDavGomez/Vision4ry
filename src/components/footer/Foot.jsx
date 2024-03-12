import "./foot.css";
import { Link } from "react-scroll";
import logo from "../../assets/img/hero.avif";

const Foot = () => {
  return (
    <>
      <footer>
        <section className="foot_container_general">
          <img src={logo} alt="" />
          <p className="foot_title">
            En un mundo en constante evolución, defender tus derechos se vuelve
            fundamental. La pasión y la precisión legal se convierten en armas
            indispensables para enfrentar los desafíos legales que puedas
            encontrar en tu camino. <br />
            La pasión es el motor que impulsa tu compromiso con la justicia. Es
            el fuego interno que te lleva a luchar por lo que crees que es
            correcto y justo. Te inspira a levantarte y alzar la voz cuando los
            derechos están en peligro.
          </p>

          <article className="foot_links_articles">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="portafolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portafolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="misivision"
                  spy={true}
                  smooth={true}
                  offset={-220}
                  duration={500}
                >
                  Mision & Vision
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="equipo"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Equipo
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="contacto"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contacto
                </Link>
              </li>

              <li>
                <Link
                  activeClass="active"
                  to="paquetes"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Paquetes
                </Link>
              </li>
            </ul>
          </article>

          <article className="copy_container">
            <p className="copy_title">2023 All Rights Reserved.</p>

            <div className="copy_icons">
              <a
                href="https://api.whatsapp.com/send?phone=3116041069"
                target="_blank"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100094518550924&mibextid=ZbWKwL"
                target="_blank"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a href="" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UC9L4derAQpj-XQ_XJahhHWA"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </a>

              <a
                href="https://www.tiktok.com/@vision4ry_oficial?_t=8dvwDJjIi0s&_r=1"
                target="_blank"
              >
                <i className="bi bi-tiktok"></i>
              </a>
            </div>
          </article>
        </section>
      </footer>
    </>
  );
};

export default Foot;
