import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le fichier CSS de Bootstrap
import "./Header.css";

const Header = () => {
  return (
    <header className="header bg-dark">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link text-white">
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link text-white">
              Projets
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link text-white">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/testimonials" className="nav-link text-white">
              Témoignages
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
