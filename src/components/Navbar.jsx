import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "../styles/navbar.css";
import Logo from "../assets/LOGO AVF TRANSPARENT.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="Vases d’Honneur Bingerville" />
        </div>

        {/* Liens */}
        <ul className="nav-links">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/annonce">Annonces</Link></li>
          <li><Link to="/eglises">Nos Églises</Link></li>

          {/* Bouton Offrande */}
          <li>
            <Link to="/dimes" className="btn-offrande">Offrande</Link>
          </li>

          {/* Bouton Connexion avec icône */}
          <li>
            <Link to="/connexion" className="btn-connexion">
              <FaUser size={18} /> Connexion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
