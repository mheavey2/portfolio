import styles from "./ContactForm.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message Sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("Submit");
          }, 5000); //hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage("Submit");
          }, 5000); //hide message after 5 seconds
        }
      );
    //clear form after sending email
    e.target.reset();
  };

  return (
    <div className={styles.contactContainer} aria-labelledby="contact-heading">
      <div className={`${styles.form}, ${styles.formHeader}`}>
        <h3 id={styles.contactHeading}>
          Contact <span>Us</span> &nbsp;
        </h3>
      </div>
      <div className={`${styles.form}, ${styles.formBody}`}>
        <form onSubmit={handleSubmit} autoComplete="off">
          <ul>
            <li>
              <p className={styles.left}>
                <label htmlFor="first_name">
                  First Name<span className={styles.req}>*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  placeholder="John"
                  id="first-name"
                  required
                />
              </p>
              <p className={styles.right}>
                <label htmlFor="last_name">
                  Last Name<span className={styles.req}>*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  id="last-name"
                  required
                />
              </p>
            </li>
            <li>
              <p id={styles.email}>
                <label htmlFor="email">
                  Email<span className={styles.req}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  id="email"
                  required
                />
              </p>
            </li>
            <li>
              <div className={styles.divider}></div>
            </li>
            <li>
              <label htmlFor="subject">
                Subject<span className={styles.req}>*</span>
              </label>
              <input
                name="subject"
                id="subject"
                placeholder="Re: "
                required
              ></input>
            </li>
            <li>
              <label htmlFor="message">
                Your Message<span className={styles.req}>*</span>
              </label>
              <textarea
                name="message"
                cols="60"
                rows="10"
                id="message"
                placeholder="your message....."
                required
              ></textarea>
            </li>
          </ul>
          <button type="submit" className={styles.btn} disabled={isSubmitting}>
            {stateMessage}
          </button>
        </form>
        <p id={styles.requiredField}>
          <span className={styles.req}>*</span>denotes a required field
        </p>
      </div>
    </div>
  );
}
