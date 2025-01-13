import React, { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Zoom } from 'yet-another-react-lightbox/plugins';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import { Fade } from 'react-awesome-reveal';
import { Certificat } from './Certificat/Certificat';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { certificateThunk } from '../../../store/certificates/certificates-reducers';

export const Certificates = () => {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(true);

  const certificates = useAppSelector((state) => state.certificates.certificates);
  const certificatesTitle = useAppSelector((state) => state.certificates.certificatesTitile);

  useEffect(() => {
    dispatch(certificateThunk.getCertificates());
  }, [dispatch]);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const slides = certificates.map((cert) => ({
    type: 'image' as const,
    src: cert.image,
    title: cert.title,
    description: cert.technologies,
  }));

  return (
    <div className="projects certificates">
      <div className="container projects__container">
        <SectionTitle title={certificatesTitle} />
        <div className="projects__list">
          {certificates.map((certifica, index) => (
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
          ))}

          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={slides}
            index={currentIndex}
            on={{
              view: ({ index }) => setCurrentIndex(index),
            }}
            plugins={[Zoom]}
          />
        </div>
      </div>
    </div>
  );
};
