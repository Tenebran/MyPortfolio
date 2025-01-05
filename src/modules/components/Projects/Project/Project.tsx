import React from 'react';
import { ProjectsType } from '../../../../store/projects/projects-reducers';
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
              className="projects__image__link">
              viev more
            </a>
          ) : (
            ''
          )}

          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="projects__image__link">
            to github
          </a>
        </div>
      </div>
      <h4 className="projects__name">{props.title}</h4>
      <div className="projects__text">{props.subTitle}</div>
      <span className="projects__technologies projects__technologies-title ">Technologies:</span>

      <div className="projects__technologies projects__technologies-skills">
        {props.skills.map((skill) => {
          return (
            <div className="projects__skills-wrapper" key={skill.id}>
              <img className="projects__skills-img" src={skill.logo} alt="logo" />
              <span>{skill.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
