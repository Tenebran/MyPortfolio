import React from 'react';
import './Skills.scss';
import '../../common/styles/Container.scss';
import Skill from './Skill/Skill';

export default function Skills() {
  return (
    <div className="skills">
      <div className="container skills__container">
        <div className="skills__wrapper">
          <h2 className="skills__title">SKILLS</h2>
        </div>
        <div className="skills__list">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
}
