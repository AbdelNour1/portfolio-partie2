import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css"; // Importer le fichier CSS de Bootstrap
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="footer-links">
              <a
                href="https://github.com/AbdelNour1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaGithub className="icon" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdel-nour-hamadache-a102231b2/?fbclid=IwAR2mTHe7I0-sZsaAUDhrUi_Rv96MSe2wTE_5xfPOEHuBF9wB6XNqCvdua8A"
                target="_blank"
                rel="Abdel Nour Hamadache"
                className="footer-link"
              >
                <FaLinkedin className="icon" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="footer-text">
              © 2023 Hamadache Abdel Nour. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
