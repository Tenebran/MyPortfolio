import React from 'react';
import './Contacts.scss';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="container contacts__container">
        <Fade>
          <SectionTitle title={'CONTACTS'} />
          <div className="contacts__form__wrapper">
            <form className="contacts__form">
              <input type="name" placeholder="Name" className="contacts__form__name" />
              <input type="email" placeholder="Email" className="contacts__form__email" />
              <textarea placeholder="Messages" className="contacts__form__text"></textarea>
              <button className="contacts__form__button">Send</button>
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}
