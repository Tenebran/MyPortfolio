import socialNetwork from '../modules/common/image/social-network.jpg';
import goSerfImage from '../modules/common/image/go-surf.jpg';
import konstruktImage from '../modules/common/image/konstrukt.jpg';
import marioImage from '../modules/common/image/mario.jpg';
import bathmanImage from '../modules/common/image/bathman.jpg';
import newYorkerImage from '../modules/common/image/new-yorker.jpg';
import developmentImage from '../modules/common/image/development-project.jpg';
import cardsImage from '../modules/common/image/cards.jpg';
import daytrackImage from '../modules/common/image/daytrack-.jpg';
import weatherVue from '../modules/common/image/WeatherVue.jpg';
import { v1 } from 'uuid';

export const projectsReducers = (
  projects: ProjectsInitialStateType = initialState,
  action: ActionType
): ProjectsInitialStateType => {
  switch (action.type) {
    case 'PROJECTS/RETURN-PROJECTS': {
      return projects;
    }
    default: {
      return projects;
    }
  }
};

type ActionType = { type: 'PROJECTS/RETURN-PROJECTS' };

export type ProjectsType = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  technologies: string;
  link: string | null;
  githubLink: string;
};

export type ProjectsInitialStateType = {
  projects: Array<ProjectsType>;
  projectsTitle: string;
};

const initialState: ProjectsInitialStateType = {
  projects: [
    {
      id: v1(),
      image: daytrackImage,
      title: 'DayTrack-',
      subTitle: 'An app for Task Management, Project Management, Productivity. ',
      technologies:
        'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests (Jest), jest-image-snapshot, GitHub Actions, i18next, Retool, ESLint, Vite.',
      link: 'https://tenebran.github.io/DayTrack-',
      githubLink: 'https://github.com/Tenebran/DayTrack-',
    },
    {
      id: v1(),
      image: cardsImage,
      title: 'Cards',
      subTitle:
        'This project is being developed now by me and a team of talented creators. It will help to learn new things with the usage of cards, where, for instance, on the first side can be a word and on the other side -- a definition. ',
      technologies: 'React, Redux, Typescript, REST API, Styled Components',
      link: 'https://tenebran.github.io/cards-nya/#/checkemail',
      githubLink: 'https://github.com/Tenebran/cards-nya',
    },
    {
      id: v1(),
      image: weatherVue,
      title: 'WEATHER VUE',
      subTitle:
        'An interactive weather application that provides real-time weather data and forecasts for selected cities. The application allows users to view detailed weather information, including temperature, humidity, wind speed, and pressure. It supports multiple languages and enables smooth transitions between localized data. ',
      technologies:
        'Vue.js, TypeScript, REST API, SCSS, Vuetify, i18n for localization, Axios for data fetching, Jest for unit testing, GitHub Actions for CI/CD',
      link: 'https://tenebran.github.io/WeatherVue/',
      githubLink: 'https://github.com/Tenebran/WeatherVue',
    },
    {
      id: v1(),
      image: socialNetwork,
      title: 'Social network',
      subTitle:
        'A social networking service. An online platform for people to build social networks or social relationships with other people. ',
      technologies: 'React, Redux, Redux-Form, REST API, Typescript, SCSS',
      link: null,
      githubLink: 'https://github.com/Tenebran/social_network',
    },
    {
      id: v1(),
      image: goSerfImage,
      title: 'Go-serf',
      subTitle: 'A Pixel Perfect Landing Page.',
      technologies: 'HTML5, SCSS, JavaScript, Gulp',
      link: 'https://tenebran.github.io/go-surf/',
      githubLink: 'https://github.com/Tenebran/go-surf',
    },
    {
      id: v1(),
      image: konstruktImage,
      title: 'Konstrukt',
      subTitle: 'A Pixel Perfect Landing Page.',
      technologies: 'HTML5, SCSS',
      link: 'https://tenebran.github.io/Konstrut/',
      githubLink: 'https://github.com/Tenebran/Konstrut',
    },
    {
      id: v1(),
      image: marioImage,
      title: 'Mario',
      subTitle: '',
      technologies: 'HTML5, SCSS, Javacript',
      link: 'https://tenebran.github.io/mario/',
      githubLink: 'https://github.com/Tenebran/mario',
    },
    {
      id: v1(),
      image: bathmanImage,
      title: 'Bathman',
      subTitle: '',
      technologies: 'HTML5, SCSS, Javacript',
      link: 'https://tenebran.github.io/Bathman/',
      githubLink: 'https://github.com/Tenebran/Bathman',
    },
    {
      id: v1(),
      image: newYorkerImage,
      title: 'New-Yorker',
      subTitle: 'Page created with bootstrap',
      technologies: 'HTML5, SCSS, bootstrap',
      link: 'https://tenebran.github.io/New-Yorker/',
      githubLink: 'https://github.com/Tenebran/New-Yorker',
    },
    {
      id: v1(),
      image: developmentImage,
      title: 'Development-Page',
      subTitle: 'A Pixel Perfect Landing Page.',
      technologies: 'HTML5, SCSS',
      link: 'https://tenebran.github.io/development_project/',
      githubLink: 'https://github.com/Tenebran/development_project',
    },
  ],
  projectsTitle: 'PROJECTS',
};
