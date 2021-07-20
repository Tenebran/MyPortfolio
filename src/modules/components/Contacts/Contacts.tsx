import React from 'react';
import './Contacts.scss';

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <div className="contacts__wrapper">
          <span className="contacts__title">CONTACTS</span>
        </div>
        <div className="contacts__form__wrapper">
          <form className="contacts__form">
            <input type="name" className="contacts__form__name" />
            <input type="email" className="contacts__form__email" />
            <textarea className="contacts__form__text"></textarea>
            <button className="contacts__form__button">send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
