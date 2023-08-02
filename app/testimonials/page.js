"use client";

import Link from "next/link";
import "./testimonials.css";
import { useSelector } from "react-redux";

const page = () => {
  const testimonials = useSelector((state) => state.testimonials.testimonials);
  return (
    <div className="testimonials-container">
      <h2>Liste des témoignages</h2>
      <div className="testimonialsList">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonialItem">
            <h3>{testimonial.name}</h3>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
      <div>
        <button className="add-testimonial-button">
          <Link href="/testimonials/add" className="add-testimonial-link">
            Laisser/Modifier un témoignage
          </Link>
        </button>
      </div>
    </div>
  );
};

export default page;
