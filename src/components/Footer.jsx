import "../styles/footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Texte principal */}
        <p>© 2025 Églises Vases d'Honneur Bingerville · Tous droits réservés</p>

        {/* Liens */}
        <div className="footer-links">
          <a href="/politique-confidentialite">Politique de confidentialité</a>
          <span>·</span>
          <a href="/mentions-legales">Mentions légales</a>
          <span>·</span>
          <a href="/contact">Contactez-nous</a>
        </div>

        {/* Réseaux sociaux avec icônes */}
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>

        {/* Citation */}
        <p className="footer-quote"> Partager l'amour de Christ pour changer le monde. </p>
      </div>
    </footer>
  );
}

export default Footer;
