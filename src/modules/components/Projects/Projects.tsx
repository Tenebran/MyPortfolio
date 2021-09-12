import React from 'react';
import './Projects.scss';
import Project from './Project/Project';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { ProjectsInitialStateType } from '../../../store/projects-reducers';
import Fade from 'react-reveal/Fade';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export default function Projects() {
  let projects = useSelector<AppRootStateType, ProjectsInitialStateType>(state => state.projects);
  return (
    <div className="projects">
      <div className="container projects__container">
        <SectionTitle title={projects.projectsTitle} />
        <div className="projects__list">
          {projects.projects.map(project => {
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
