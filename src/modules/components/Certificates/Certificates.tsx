import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { CertificatesInitialStateType } from '../../../store/certificates-reducers';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Fade } from 'react-awesome-reveal';
import { Certificat } from './Certificat/Certificat';

export const Certificates = () => {
  const { certificates, certificatesTitile } = useSelector<
    AppRootStateType,
    CertificatesInitialStateType
  >((state) => state.certificates);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    certificates.forEach((cert) => {
      const img = new Image();
      img.src = cert.image;
    });
  }, []);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const handleImageLoad = () => {
    setLoadedImages((prev) => new Set(prev).add(certificates[currentIndex].image));
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % certificates.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <div className="projects certificates">
      <div className="container projects__container">
        <SectionTitle title={certificatesTitile} />
        <div className="projects__list">
          {certificates.map((certifica, index) => {
            return (
              <Fade key={certifica.id}>
                <Certificat
                  id={certifica.id}
                  image={certifica.image}
                  subTitle={certifica.subTitle}
                  technologies={certifica.technologies}
                  title={certifica.title}
                  index={index}
                  openLightbox={openLightbox}
                />
              </Fade>
            );
          })}

          {isOpen && (
            <Lightbox
              mainSrc={certificates[currentIndex].image}
              nextSrc={certificates[(currentIndex + 1) % certificates.length].image}
              prevSrc={
                certificates[(currentIndex - 1 + certificates.length) % certificates.length].image
              }
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={prevImage}
              onMoveNextRequest={nextImage}
              onImageLoad={handleImageLoad}
            />
          )}
        </div>
      </div>
    </div>
  );
};
