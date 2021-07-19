import React from 'react';
import './Main.scss';
import '../../common/styles/Container.scss';

export default function Main() {
  return (
    <div className="main">
      <div className="container main__container">
        <div className="main__wrapper__right">
          <div className="main__wrapper__right-inner">
            <span className="main__profession">FrontEnd Developer</span>
            <span className="main__name">SERGIY</span>
            <span className="main__surname">GARKUSHA</span>
          </div>
        </div>

        <div className="main__wrapper__left">
          <div className="main__photo"></div>
          {/* <img src='#' alt='main__photo'></img> */}
        </div>
      </div>
    </div>
  );
}
