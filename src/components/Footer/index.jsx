import './styles.scss';

import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer>
      <img src="/images/logo.png" alt="" />

      <div className="social-medias">
        <ul>
          <li>
            <a href="/">
              <FaFacebook size={24} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaPinterest size={24} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a href="/">
              <FaTiktok size={24} />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-footer about-us">
        <h4>Sobre a empresa</h4>
        <ul>
          <li>
            <a href="/">Quem somos</a>
          </li>
          <li>
            <a href="/">Fale conosco</a>
          </li>
        </ul>
      </div>

      <div className="nav-footer policies">
        <h4>Políticas</h4>
        <ul>
          <li>
            <a href="/">Política de Privacidade</a>
          </li>
          <li>
            <a href="/">Termos de Uso</a>
          </li>
          <li>
            <a href="/">Política de Entrega</a>
          </li>
          <li>
            <a href="/">Política de Cupom e Descontos</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}