import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__social">
          <div className="footer__social__icon"></div>
          <div className="footer__social__icon"></div>
          <div className="footer__social__icon"></div>
          <div className="footer__social__icon"></div>
        </div>

        <div className="footer__title">© 2021 All Rights Reserved</div>
      </div>
    </footer>
  );
}
