import React from "react";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <div className="contact container">
        <h2>Interested in what you see?</h2>
        <h3>Get in contact!</h3>
        <div>Stuart Paul McGee</div>
        <div>Ware, Hertfordshire, UK</div>
        <div>
          <a href="mailto:stuartpmcgee@gmail.com">stuartpmcgee@gmail.com</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/stuartpmcgee/">linkedin</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
