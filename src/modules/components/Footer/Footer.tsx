import React from 'react';
import './Footer.scss';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { FooterType } from '../../../store/footer-reduser';
import { FooterItem } from './FooterItem.tsx/FooterItem';

export default function Footer() {
  const footer = useSelector<AppRootStateType, Array<FooterType>>(state => state.footer);

  console.log(footer);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <Fade>
          <div className="footer__social">
            {footer.map(footer => {
              return <FooterItem icon={footer.icon} link={footer.link} />;
            })}
          </div>
          <div className="footer__title">© 2021 All Rights Reserved</div>
        </Fade>
      </div>
    </footer>
  );
}
