import React from 'react';
import { ProjectsType } from '../../../../store/projects-reducers';
import './Project.scss';

export default function Project(props: ProjectsType) {
  return (
    <div className="projects__list__item">
      <div className="projects__image__wrapper">
        <img src={props.image} alt="page" className="projects__image"></img>
        <a href={props.link} target="_blank" className="projects__image__link">
          viev more
        </a>
      </div>
      <h4 className="projects__name">{props.title}</h4>
      <div className="projects__text">{props.subTitle}</div>
      <div className="projects__technologies">
        Technologies:
        <span className="projects__text">{props.technologies}</span>
      </div>
    </div>
  );
}
