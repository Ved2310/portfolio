import React, { useRef } from "react";
import './contact.css';
import LinkedIn from '../../assets/Link.png';
import GitHub from '../../assets/GitH.png';
import Email from '../../assets/Email.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_8kx58bj', 'template_bb33o7h', form.current, { 
            publicKey: 'YfXnYt374ImIH9Hay',
    })
          .then(
            (result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id="contactPage">
            <h1 className="contactPageTitle">Contact Me</h1>
            <p className="contactDesc">
                Feel free to reach out to discuss any work opportunities or collaborations.
            </p>

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" required name='your_name' />
                <input type="email" className="email" placeholder="Your Email" required name='your_email' />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
                <button type="submit" value='Send' className="submitBtn">Send</button>
            </form>

            <div className="links">
                <a href="https://www.linkedin.com/in/vedashree-bhat2310/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn" className="link" />
                </a>
                <a href="https://github.com/Ved2310/" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className="link" />
                </a>
                <a href="mailto:vedashreeb23@gmail.com">
                    <img src={Email} alt="Email" className="link" />
                </a>
            </div>
        </section>
    );
};

export default Contact;
