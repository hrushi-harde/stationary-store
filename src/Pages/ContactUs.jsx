import React from "react";
import ContactCard from "../Components/ContactCard";

const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether it's a question, feedback, or
            just a hello 👋
          </p>
          <div className="contact-form-container">
            <form className="contact-form">
              <h3>Send Us a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ContactCard></ContactCard>
    </section>
  );
};

export default ContactUs;
