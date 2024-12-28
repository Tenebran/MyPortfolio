import React, { useState, useEffect } from 'react';
import { certificateThunk } from '../../../store/certificates/certificates-reducers';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Fade } from 'react-awesome-reveal';
import { Certificat } from './Certificat/Certificat';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const Certificates = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [showCaption, setShowCaption] = useState(true);
  const certificates = useAppSelector((state) => state.certificates.certificates);
  const certificatesTitle = useAppSelector((state) => state.certificates.certificatesTitile);

  useEffect(() => {
    certificates.forEach((cert) => {
      const img = new Image();
      img.src = cert.image;
    });
  }, []);

  useEffect(() => {
    dispatch(certificateThunk.getCertificates());
  }, [dispatch]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setShowCaption(true);
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

  const toggleCaption = () => {
    setShowCaption((prev) => !prev);
  };

  return (
    <div className="projects certificates">
      <div className="container projects__container">
        <SectionTitle title={certificatesTitle} />
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
              toolbarButtons={[
                <button
                  key="toggleCaption"
                  onClick={toggleCaption}
                  style={{
                    position: 'absolute',
                    top: '60px',
                    left: '10px',
                    zIndex: 1000,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}>
                  {showCaption ? 'Hide Caption' : 'Show Caption'}
                </button>,
              ]}
              onImageLoad={handleImageLoad}
              imageCaption={
                showCaption && (
                  <>
                    <h4 className="projects__name">{certificates[currentIndex].title}</h4>
                    <div className="projects__technologies">
                      Technologies:
                      <span className="projects__text">
                        {certificates[currentIndex].technologies}
                      </span>
                    </div>
                  </>
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};
