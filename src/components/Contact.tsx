import "../styles/components/Contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_email: email,
      message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    ).then(
      () => {
        setSent(true);
        setEmail("");
        setMessage("");
      }
    );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>Interested in collaborating or learning more about my work? Leave a message below:</p>
      <form onSubmit={handleSubmit} className="contact-form" >
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
