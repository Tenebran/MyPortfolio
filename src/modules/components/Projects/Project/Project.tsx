import React from 'react';
import { ProjectsType } from '../../../../store/projects-reducers';
import './Project.scss';

export default function Project(props: ProjectsType) {
  return (
    <div className="projects__list__item">
      <div className="projects__image__wrapper">
        <img src={props.image} alt="page" className="projects__image"></img>
        <div className="projects__image__link-wrapper">
          {props.link ? (
            <a
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__image__link"
            >
              viev more
            </a>
          ) : (
            ''
          )}

          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__image__link"
          >
            to github
          </a>
        </div>
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
