import React from 'react';

export const FooterItem = (props: PorpsType) => {
  return (
    <a target={'blank'} href={props.link}>
      <img src={props.icon} alt="Footer icon" style={{ width: '30px', height: '30px' }} />
    </a>
  );
};

type PorpsType = {
  icon: string;
  link: string;
};
