import React from 'react';
import './Skill.scss';

export default function Skill(props: PropsType) {
  return (
    <div className="skills__list__item">
      <span className={'skills__icon'} dangerouslySetInnerHTML={{ __html: props.svgIcon }}></span>
      <div className="skills__name">{props.skillTitle}</div>
      <div className="skills__text">{props.skillDescription}</div>
    </div>
  );
}

type PropsType = {
  skillTitle: string;
  skillDescription: string;
  svgIcon: string;
};
