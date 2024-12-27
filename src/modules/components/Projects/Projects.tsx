import React, { useEffect } from 'react';
import './Projects.scss';
import Project from './Project/Project';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import {
  ProjectsInitialStateType,
  projectsThunks,
} from '../../../store/projects/projects-reducers';
import { Fade } from 'react-awesome-reveal';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

export default function Projects() {
  const projects = useAppSelector((state) => state.projects.projects);
  const projectsTitle = useAppSelector((state) => state.projects.projectsTitle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(projectsThunks.getProjects());
  }, []);

  return (
    <div className="projects">
      <div className="container projects__container">
        <SectionTitle title={projectsTitle} />
        <div className="projects__list">
          {projects.map((project) => {
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
