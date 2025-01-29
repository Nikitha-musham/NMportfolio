import './FormStyles.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_61sgvz7', 
        'template_c15dwef', 
        form.current,
        'R06fsbGgj1JIr3qnm'
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email successfully sent!');
          form.current.reset(); // Clear form fields on success
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" required placeholder="Enter your Name" />
      <input type="email" name="from_mail" required placeholder="Enter your Email" />
      <textarea name="message" required placeholder="Message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Form;
