import React from 'react';
import './Project.scss';

export default function Project() {
  return (
    <div className="projects__list__item">
      <div className="projects__image__wrapper">
        <img
          src="https://hubsadda.com/wp-content/uploads/2019/07/WebPage-vs-website.jpg"
          alt="page"
          className="projects__image"
        ></img>
      </div>
      <h4 className="projects__name">SOCIAL NETWORK</h4>
      <div className="projects__text">
        SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...
      </div>
    </div>
  );
}
