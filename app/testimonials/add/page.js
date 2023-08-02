"use client";

import { useState } from "react";
import "./addTestimonial.css"; // Importer le fichier CSS du formulaire

import { useSelector, useDispatch } from "react-redux";
import {
  addTestimonial,
  editTestimonial,
  deleteTestimonial,
} from "../../redux/testimonialSlice";

const page = () => {
  const testimonials = useSelector((state) => state.testimonials.testimonials);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [editingId, setEditingId] = useState(null);

  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const testimonial = testimonials.find((t) => t.id === id);
    if (testimonial) {
      setName(testimonial.name);
      setMessage(testimonial.message);
      setEditingId(id);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Valider les valeurs saisies
    let isValid = true;

    if (name.trim() === "") {
      setNameError("Veuillez saisir votre nom");
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(name)) {
      setNameError("Le nom ne doit contenir que des lettres");
      isValid = false;
    } else {
      setNameError("");
    }

    if (message.trim().toLowerCase() === "") {
      setMessageError("Veuillez saisir votre message");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (!isValid) {
      return;
    }

    // Modifier ou ajouter le témoignage
    if (editingId) {
      const editedTestimonial = testimonials.find((t) => t.id === editingId);
      if (editedTestimonial) {
        dispatch(
          editTestimonial({
            id: editingId,
            name,
            message,
          })
        );
      }
    } else {
      const newId = testimonials.length + 1;
      const newTestimonial = { id: newId, name, message };
      dispatch(addTestimonial(newTestimonial));
    }

    // Réinitialiser les champs après la soumission
    setName("");
    setMessage("");
    setEditingId(null);
    setSuccessMessage("Témoignage soumis avec succès !");
  };

  return (
    <div className="add-testimonial-container">
      <h2>Liste des témoignages</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
            <div className="testimonial-item-actions">
              <button
                className="edit-testimonial-button"
                onClick={() => handleEdit(testimonial.id)}
              >
                Modifier
              </button>
              <button
                className="delete-testimonial-button"
                onClick={() => dispatch(deleteTestimonial(testimonial.id))}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-testimonial-form-container">
        <h2>Ajouter/Modifier un témoignage</h2>
        <form className="add-testimonial-form" onSubmit={handleSubmit}>
          <div className="add-testimonial-form-group">
            <label htmlFor="name" className="add-testimonial-label">
              Nom :
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="add-testimonial-input"
            />
            {nameError && <span className="error-message">{nameError}</span>}
          </div>
          <div className="add-testimonial-form-group">
            <label htmlFor="message" className="add-testimonial-label">
              Message :
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="add-testimonial-textarea"
            ></textarea>
            {messageError && (
              <span className="error-message">{messageError}</span>
            )}
          </div>
          <button type="submit" className="add-testimonial-submit-button">
            {editingId ? "Modifier" : "Soumettre"}
          </button>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default page;
