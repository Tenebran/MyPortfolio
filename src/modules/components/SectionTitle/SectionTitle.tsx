import React from 'react';
import './SectionTitle.scss';

type PropsType = {
  title: string;
};

export const SectionTitle = (props: PropsType) => {
  return (
    <div className="section">
      <h2 className="section__title">{props.title}</h2>
    </div>
  );
};
