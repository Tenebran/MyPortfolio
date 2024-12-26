import React from 'react';
import './Skill.scss';

export default function Skill(props: PropsType) {
  return (
    <div className="skills__list__item">
      <img src={props.svgIcon} alt={props.skillTitle} width={'80'} height={'80'} />
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
