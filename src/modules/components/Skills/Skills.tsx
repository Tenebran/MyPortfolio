import React from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';
import Skill from './Skill/Skill';
import Slide from 'react-reveal/Slide';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { SkillInitialStateType } from '../../../store/skills-reducers';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export default function Skills() {
  const skills = useSelector<AppRootStateType, SkillInitialStateType>(state => state.skills);
  return (
    <div className="skills">
      <div className="container skills__container">
        <Slide right>
          <SectionTitle title={skills.skillTitle} />
          <div className="skills__list">
            {skills.skills.map(skill => {
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
