import socialNetwork from '../modules/common/image/social-network.jpg';
import todolistimage from '../modules/common/image/todo-list.jpg';
import goSerfImage from '../modules/common/image/go-surf.jpg';
import konstruktImage from '../modules/common/image/konstrukt.jpg';
import marioImage from '../modules/common/image/mario.jpg';
import bathmanImage from '../modules/common/image/bathman.jpg';
import newYorkerImage from '../modules/common/image/new-yorker.jpg';
import developmentImage from '../modules/common/image/development-project.jpg';
import { v1 } from 'uuid';

type ActionType = { type: 'PROJECTS/RETURN-PROJECTS' };

export type ProjectsType = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  technologies: string;
  link: string;
  githubLink: string;
};

const initialState: Array<ProjectsType> = [
  {
    id: v1(),
    image: socialNetwork,
    title: 'Social network',
    subTitle:
      'A social networking service. An online platform for people to build social networks or social relationships with other people. ',
    technologies: 'React, Redux, Redux-Form, REST API, Typescript, SCSS',
    link: '#',
    githubLink: 'https://github.com/Tenebran/social_network',
  },
  {
    id: v1(),
    image: todolistimage,
    title: 'ToDoList',
    subTitle: 'An app for Task Management, Project Management, Productivity. ',
    technologies: 'React, Redux, REST API, Typescript, Formik, Material-UI, Storybook, Unit-tests',
    link: '#',
    githubLink: 'https://github.com/Tenebran/todo-list',
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
    subTitle: 'A Pixel Perfect Landing Page.',
    technologies: 'HTML5, SCSS, Javacript',
    link: 'https://tenebran.github.io/mario/',
    githubLink: 'https://github.com/Tenebran/mario',
  },
  {
    id: v1(),
    image: bathmanImage,
    title: 'Bathman',
    subTitle: 'A Pixel Perfect Landing Page.',
    technologies: 'HTML5, SCSS, Javacript',
    link: 'https://tenebran.github.io/Bathman/',
    githubLink: 'https://github.com/Tenebran/Bathman',
  },
  {
    id: v1(),
    image: newYorkerImage,
    title: 'New-Yorker',
    subTitle: 'A Pixel Perfect Landing Page.',
    technologies: 'HTML5, SCSS, Javacript',
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
];

export const projectsReducers = (
  projects: Array<ProjectsType> = initialState,
  action: ActionType
): Array<ProjectsType> => {
  switch (action.type) {
    case 'PROJECTS/RETURN-PROJECTS': {
      return projects;
    }
    default: {
      return projects;
    }
  }
};
