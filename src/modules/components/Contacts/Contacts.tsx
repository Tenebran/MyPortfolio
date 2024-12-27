import React from 'react';
import './Contacts.scss';
import { Fade } from 'react-awesome-reveal';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import emailjs from 'emailjs-com';

export default function Contacts() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'sergej_garkusha',
        'template_jfhx7uo',
        e.target as HTMLFormElement,
        '3HQ8iT10tSgZUprx6'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send message, please try again.');
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="contacts">
      <div className="container contacts__container">
        <Fade>
          <SectionTitle title={'CONTACTS'} />

          <div className="contacts__form__wrapper">
            <form className="contacts__form" onSubmit={sendEmail}>
              <input name="name" type="name" placeholder="Name" className="contacts__form__name" />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="contacts__form__email"
              />
              <textarea
                name="message"
                placeholder="Messages"
                className="contacts__form__text"></textarea>
              <button className="contacts__form__button" type="submit">
                Send
              </button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}
