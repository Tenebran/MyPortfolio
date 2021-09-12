import React from 'react';

export const FooterItem = (props: PorpsType) => {
  return (
    <a target={'blank'} href={props.link}>
      <div dangerouslySetInnerHTML={{ __html: props.icon }}></div>
    </a>
  );
};

type PorpsType = {
  icon: string;
  link: string;
};
