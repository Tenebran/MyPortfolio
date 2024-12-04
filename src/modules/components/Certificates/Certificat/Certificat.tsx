import React from 'react';

export type CertificatesPropsType = {
  id: string;
  index: number;
  image: string;
  title: string;
  subTitle?: string;
  technologies?: string;
  openLightbox: (index: number) => void;
};

export const Certificat = (props: CertificatesPropsType) => {
  return (
    <div className="projects__list__item">
      <div className="projects__image__wrapper">
        <img src={props.image} alt="page" className="projects__image"></img>
        <div className="projects__image__link-wrapper">
          <button
            rel="noopener noreferrer"
            className="projects__image__link"
            onClick={() => props.openLightbox(props.index)}>
            Open
          </button>
        </div>
      </div>
      <h4 className="projects__name">{props.title}</h4>
      <div className="projects__text">{props.subTitle}</div>
      <div className="projects__technologies">
        Technologies:
        <span className="projects__text">{props.technologies}</span>
      </div>
    </div>
  );
};
