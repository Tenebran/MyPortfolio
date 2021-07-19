import React from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';

export default function Skills() {
  return (
    <div className="skills">
      <div className="container skills__container">
        <div className="skills__wrapper">
          <span className="skills__title">Skills</span>
        </div>
        <div className="skills__list">
          <div className="skills__list__item">
            <div className="skills__image"></div>
            <div className="skills__name">REACT</div>
            <div className="skills__text">
              SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
