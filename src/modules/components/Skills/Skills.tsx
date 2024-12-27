import React, { useEffect } from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';
import Skill from './Skill/Skill';
import { Slide } from 'react-awesome-reveal';
import { skillsThunk } from '../../../store/skills/skills-reducers';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

export default function Skills() {
  const skills = useAppSelector((state) => state.skills.skills);
  const skillTitle = useAppSelector((state) => state.skills.skillTitle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(skillsThunk.getSkills());
  }, []);

  return (
    <div className="skills">
      <div className="container skills__container">
        <Slide direction="right">
          <SectionTitle title={skillTitle} />
          <div className="skills__list">
            {skills.map((skill) => {
              return (
                <Skill
                  svgIcon={skill.svgIcon}
                  key={skill.id}
                  skillDescription={skill.skillDescription}
                  skillTitle={skill.skillTitle}
                />
              );
            })}
          </div>
        </Slide>
      </div>
    </div>
  );
}
