import React from 'react';
import './Projects.scss';
import Project from './Project/Project';

export default function Projects() {
  return (
    <div className="projects">
      <div className="container projects__container">
        <div className="projects__wrapper">
          <span className="projects__title">PROJECTS</span>
        </div>
        <div className="projects__list">
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}
