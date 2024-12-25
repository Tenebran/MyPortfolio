import React, { useEffect } from 'react';
import './Main.scss';
import '../../common/styles/Container.scss';
import { useSelector } from 'react-redux';
import { AppRootStateType } from '../../../store/store';
import { profileThunks, ProfileType } from '../../../store/profile/profile-reducers';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const particlesInit = async (engine) => {
  await loadFull(engine);
};

const particlesOptions = {
  fullScreen: {},
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.2,
    },
    size: {
      value: 3,
      random: true,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none' as const,
      random: false,
      straight: false,
      outMode: 'out' as const,
      bounce: false,
    },
    links: {
      enable: true,
      distance: 130,
      color: '#ffffff',
      opacity: 0.2,
      width: 1,
    },
  },
};

export default function Main() {
  const dispatch = useAppDispatch();

  const { profile } = useSelector((state: AppRootStateType) => ({
    profile: state.profile.profile,
  }));

  useEffect(() => {
    dispatch(profileThunks.getProfile());
  }, [dispatch]);

  console.log('profile', profile);

  return (
    <div className="main">
      <div className="container main__container">
        <Particles
          className="main__particles"
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
        <Particles
          className="main__particles"
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
        />
        <Fade direction="down">
          <div className="main__wrapper-conteiner">
            <div className="main__wrapper__right">
              <div className="main__wrapper__right-inner">
                <ReactTypingEffect
                  text={profile.profession}
                  speed={300}
                  typingDelay={1000}
                  cursor="_"
                />
                <span className="main__name">{profile.name}</span>
                <span className="main__surname">{profile.surname}</span>
              </div>
            </div>
            <div className="main__wrapper__left">
              <Tilt className="Tilt" tiltMaxAngleX={20} tiltMaxAngleY={20} transitionSpeed={4000}>
                <input type="image" src={profile.image} alt="photo" className="main__photo" />
              </Tilt>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
