import { v1 } from 'uuid';

import {
  typeScriptIcon,
  JavaScriptIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  ReduxIcon,
  RestApiIcon,
  GulpIcon,
  GitIcon,
  MaterialUiIcon,
  NPM,
  BootstrapIcon,
  AntDesingIcon,
  VueJSIcon,
  Vuetify,
  i18nVue,
  storyBookIcon,
  i18next,
  retoolIcon,
  keycloakIcon,
} from '../../modules/common/icons/icons';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'skills',
  initialState: {
    skills: [
      {
        id: v1(),
        skillTitle: 'REACT',
        skillDescription:
          'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...',
        svgIcon: ReactIcon,
      },
      {
        id: v1(),
        skillTitle: 'VUE.JS',
        skillDescription:
          'Building modern SPA applications with Vue 3, Composition API, Pinia, and TypeScript...',
        svgIcon: VueJSIcon,
      },
      {
        id: v1(),
        skillTitle: 'TYPESCRIPT',
        skillDescription: 'Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum...',
        svgIcon: typeScriptIcon,
      },
      {
        id: v1(),
        skillTitle: 'JAVASCRIPT',
        skillDescription:
          'Data Types, Functions, Loops, Currying, Closure, This, Array Methods, Recursion, EventLoop, Promise, Async-Await...',
        svgIcon: JavaScriptIcon,
      },
      {
        id: v1(),
        skillTitle: 'HTML',
        skillDescription: 'Landing Pages, Semantic tags, Forms...',
        svgIcon: HtmlIcon,
      },
      {
        id: v1(),
        skillTitle: 'CSS',
        skillDescription: 'CSS3, CSS-Modules, Styled Components...',
        svgIcon: CssIcon,
      },
      {
        id: v1(),
        skillTitle: 'SCSS/SASS',
        skillDescription: 'variables, nested rules, mixins, functions...',
        svgIcon: SassIcon,
      },
      {
        id: v1(),
        skillTitle: 'REDUX',
        skillDescription:
          'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...',
        svgIcon: ReduxIcon,
      },
      {
        id: v1(),
        skillTitle: 'REDUX TOOLKIT',
        skillDescription:
          'Simplified state management, Slices, Thunks, Immer, RTK Query, Middleware setup, Code efficiency...',
        svgIcon: ReduxIcon,
      },
      {
        id: v1(),
        skillTitle: 'REST API',
        skillDescription: 'CRUD Operations, working with Axios library...',
        svgIcon: RestApiIcon,
      },
      {
        id: v1(),
        skillTitle: 'Vuetify',
        skillDescription:
          'Material Design framework for Vue.js with responsive components and themes...',
        svgIcon: Vuetify,
      },
      {
        id: v1(),
        skillTitle: 'i18nVue',
        skillDescription:
          'Localization for Vue.js, supporting dynamic translations and locale switching....',
        svgIcon: i18nVue,
      },
      {
        id: v1(),
        skillTitle: 'Storybook',
        skillDescription:
          'Isolated UI component development and documentation with interactive libraries...',
        svgIcon: storyBookIcon,
      },
      {
        id: v1(),
        skillTitle: 'i18next',
        skillDescription:
          'Robust internationalization with translations, language detection, and formatting...',
        svgIcon: i18next,
      },
      {
        id: v1(),
        skillTitle: 'retool',
        skillDescription:
          'Low-code platform for building internal tools, integrating APIs, databases, and creating dynamic UIs with drag-and-drop components....',
        svgIcon: retoolIcon,
      },
      {
        id: v1(),
        skillTitle: 'keycloack',
        skillDescription:
          'Keycloak: SSO, RBAC, OAuth2, user federation, OpenID, authentication management...',
        svgIcon: keycloakIcon,
      },
      {
        id: v1(),
        skillTitle: 'GULP',
        skillDescription: 'A toolkit to automate & enhance your workflow...',
        svgIcon: GulpIcon,
      },
      {
        id: v1(),
        skillTitle: 'GIT',
        skillDescription: 'Version control system...',
        svgIcon: GitIcon,
      },
      {
        id: v1(),
        skillTitle: 'MATERIAL-UI',
        skillDescription: 'React components for faster and easier web development...',
        svgIcon: MaterialUiIcon,
      },
      {
        id: v1(),
        skillTitle: 'NPM',
        skillDescription: 'Node package manager...',
        svgIcon: NPM,
      },
      {
        id: v1(),
        skillTitle: 'React Bootstrap',
        skillDescription: 'The most popular front-end framework...',
        svgIcon: BootstrapIcon,
      },
      {
        id: v1(),
        skillTitle: 'Ant Design',
        skillDescription: 'A design system for enterprise-level products....',
        svgIcon: AntDesingIcon,
      },
    ],
    skillTitle: 'SKILLS',
  },
  reducers: {},
});

// export const skillsReducer = (
//   skills: SkillInitialStateType = initialState,
//   action: ActionType
// ): SkillInitialStateType => {
//   switch (action.type) {
//     case 'SKILLS/RETURN-SKILLS':
//       return skills;
//     default:
//       return skills;
//   }
// };

type ActionType = {
  type: 'SKILLS/RETURN-SKILLS';
};

export type SkillInitialStateType = {
  skills: Array<SkillsType>;
  skillTitle: string;
};

export type SkillsType = {
  id: string;
  skillTitle: string;
  skillDescription: string;
  svgIcon: string;
};

// const initialState: SkillInitialStateType = {
//   skills: [
//     {
//       id: v1(),
//       skillTitle: 'REACT',
//       skillDescription:
//         'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...',
//       svgIcon: ReactIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'VUE.JS',
//       skillDescription:
//         'Building modern SPA applications with Vue 3, Composition API, Pinia, and TypeScript...',
//       svgIcon: VueJSIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'TYPESCRIPT',
//       skillDescription: 'Migrate projects from JS to TS, Generics, typeof, ReturnType, Enum...',
//       svgIcon: typeScriptIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'JAVASCRIPT',
//       skillDescription:
//         'Data Types, Functions, Loops, Currying, Closure, This, Array Methods, Recursion, EventLoop, Promise, Async-Await...',
//       svgIcon: JavaScriptIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'HTML',
//       skillDescription: 'Landing Pages, Semantic tags, Forms...',
//       svgIcon: HtmlIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'CSS',
//       skillDescription: 'CSS3, CSS-Modules, Styled Components...',
//       svgIcon: CssIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'SCSS/SASS',
//       skillDescription: 'variables, nested rules, mixins, functions...',
//       svgIcon: SassIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'REDUX',
//       skillDescription:
//         'SPA, Functional components, Hooks, Material-UI, Forms, Routes, Pagination...',
//       svgIcon: ReduxIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'REDUX TOOLKIT',
//       skillDescription:
//         'Simplified state management, Slices, Thunks, Immer, RTK Query, Middleware setup, Code efficiency...',
//       svgIcon: ReduxIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'REST API',
//       skillDescription: 'CRUD Operations, working with Axios library...',
//       svgIcon: RestApiIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'Vuetify',
//       skillDescription:
//         'Material Design framework for Vue.js with responsive components and themes...',
//       svgIcon: Vuetify,
//     },
//     {
//       id: v1(),
//       skillTitle: 'i18nVue',
//       skillDescription:
//         'Localization for Vue.js, supporting dynamic translations and locale switching....',
//       svgIcon: i18nVue,
//     },
//     {
//       id: v1(),
//       skillTitle: 'Storybook',
//       skillDescription:
//         'Isolated UI component development and documentation with interactive libraries...',
//       svgIcon: storyBookIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'i18next',
//       skillDescription:
//         'Robust internationalization with translations, language detection, and formatting...',
//       svgIcon: i18next,
//     },
//     {
//       id: v1(),
//       skillTitle: 'retool',
//       skillDescription:
//         'Low-code platform for building internal tools, integrating APIs, databases, and creating dynamic UIs with drag-and-drop components....',
//       svgIcon: retoolIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'keycloack',
//       skillDescription:
//         'Keycloak: SSO, RBAC, OAuth2, user federation, OpenID, authentication management...',
//       svgIcon: keycloakIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'GULP',
//       skillDescription: 'A toolkit to automate & enhance your workflow...',
//       svgIcon: GulpIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'GIT',
//       skillDescription: 'Version control system...',
//       svgIcon: GitIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'MATERIAL-UI',
//       skillDescription: 'React components for faster and easier web development...',
//       svgIcon: MaterialUiIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'NPM',
//       skillDescription: 'Node package manager...',
//       svgIcon: NPM,
//     },
//     {
//       id: v1(),
//       skillTitle: 'React Bootstrap',
//       skillDescription: 'The most popular front-end framework...',
//       svgIcon: BootstrapIcon,
//     },
//     {
//       id: v1(),
//       skillTitle: 'Ant Design',
//       skillDescription: 'A design system for enterprise-level products....',
//       svgIcon: AntDesingIcon,
//     },
//   ],

//   skillTitle: 'SKILLS',
// };

export const skillsReducer = slice.reducer;
export const skillActions = slice.actions;

export const skillsThunk = {};
