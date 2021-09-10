import React from 'react';
import './Projects.scss';
import Project from './Project/Project';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { ProjectsType } from '../../../store/projects-reducers';
import Fade from 'react-reveal/Fade';

export default function Projects() {
  let projects = useSelector<AppRootStateType, ProjectsType[]>(state => state.projects);
  console.log(projects);
  return (
    <div className="projects">
      <div className="container projects__container">
        <div className="projects__wrapper">
          <h2 className="projects__title">PROJECTS</h2>
        </div>
        <div className="projects__list">
          {projects.map(project => {
            return (
              <Fade key={project.id}>
                <Project
                  id={project.id}
                  image={project.image}
                  subTitle={project.subTitle}
                  technologies={project.technologies}
                  title={project.title}
                  link={project.link}
                  githubLink={project.githubLink}
                />
              </Fade>
            );
          })}
        </div>
      </div>
    </div>
  );
}
