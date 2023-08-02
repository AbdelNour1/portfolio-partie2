"use client";

import { useState } from "react";
import "./Contact.css";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérification des données du formulaire

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("Veuillez remplir tous les champs du formulaire.");

      return;
    }
    // Envoyer les données du formulaire à votre serveur ou effectuer une action supplémentaire

    setSubmitted(true);

    // Réinitialiser les champs du formulaire

    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <div className="contact-container full-height">
      <h2>Contactez-nous</h2>

      {submitted ? (
        <p className="success-message">
          Merci pour votre message ! Nous vous répondrons dès que possible.
        </p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Nom </label>

              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email </label>

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
          </fieldset>

          <div className="form-group">
            <label htmlFor="message">Message </label>

            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="form-button">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

export default page;
