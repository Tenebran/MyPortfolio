import React, { useEffect } from 'react';
import './Footer.scss';
import { Fade } from 'react-awesome-reveal';
import { AppRootStateType } from '../../../store/store';
import { footerThunk } from '../../../store/footer/footer-reduser';
import { FooterItem } from './FooterItem.tsx/FooterItem';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

export default function Footer() {
  const dispatch = useAppDispatch();
  const footer = useAppSelector((state) => state.footer);

  useEffect(() => {
    dispatch(footerThunk.getFooter());
  }, []);

  return (
    <footer className="footer">
      <div className="container footer__container">
        <Fade>
          <div className="footer__social">
            {footer.map((footer) => {
              return <FooterItem key={footer.id} icon={footer.icon} link={footer.link} />;
            })}
          </div>
          <div className="footer__title">© {new Date().getFullYear()} All Rights Reserved</div>
        </Fade>
      </div>
    </footer>
  );
}
