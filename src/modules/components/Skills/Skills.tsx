import React from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';
import Skill from './Skill/Skill';
import Slide from 'react-reveal/Slide';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { SkillsType } from '../../../store/skills-reducers';

export default function Skills() {
  const skills = useSelector<AppRootStateType, Array<SkillsType>>(state => state.skills);
  console.log(skills);
  return (
    <div className="skills">
      <div className="container skills__container">
        <Slide right>
          <div className="skills__wrapper">
            <h2 className="skills__title">SKILLS</h2>
          </div>
          <div className="skills__list">
            {skills.map(skill => {
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
