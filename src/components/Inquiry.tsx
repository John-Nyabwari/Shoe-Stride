import { useState, type FormEvent } from "react";

export default function Inquiry() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  return (
    <section className="inquiry section-dark" id="inquiry">
      <div className="inquiry-inner">
        <span className="section-label">Get in Touch</span>
        <h2 className="inquiry-title chromatic-text split-text" data-text="INQUIRY">
          INQUIRY
        </h2>
        <form className="inquiry-form" onSubmit={handleSubmit}>
          <input className="inquiry-input" type="email" placeholder="Your email address" required />
          <button className="inquiry-btn" type="submit">
            {sent ? "SENT!" : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
