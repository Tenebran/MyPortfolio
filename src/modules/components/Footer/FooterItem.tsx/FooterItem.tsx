import React from 'react';

export const FooterItem = (props: PorpsType) => {
  console.log(props.link);
  return (
    <a target={'blank'} className="footer__social__icon" href={props.link}>
      <div dangerouslySetInnerHTML={{ __html: props.icon }}></div>
    </a>
  );
};

type PorpsType = {
  icon: string;
  link: string;
};
