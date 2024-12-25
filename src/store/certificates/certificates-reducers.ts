import { createSlice } from '@reduxjs/toolkit';
import frontEndBasicImg from '../../modules/common/image/certificates-image/frontEndBasic.jpg';
import frontEndPROImg from '../../modules/common/image/certificates-image/FrontEndPro.jpg';
import frontEndReactImg from '../../modules/common/image/certificates-image/FrontEndReact.jpg';
import frontEndVueImg from '../../modules/common/image/certificates-image/FrontEndVue.jpg';
import { v1 } from 'uuid';

const slice = createSlice({
  name: 'certificates',
  initialState: {
    certificates: [
      {
        id: v1(),
        image: frontEndBasicImg,
        title: 'FRONT-END-BASIC',
        technologies: 'HTML /CSS /SCSS /BEM /Transition /Transform /Animation',
        subTitle: '03.06.2020 - 30.08.2020',
      },
      {
        id: v1(),
        image: frontEndPROImg,
        title: 'FRONT-END PRO',
        technologies: '/JavaScript /React /OOP',
        subTitle: '12.11.2020 - 05.05.2021',
      },
      {
        id: v1(),
        image: frontEndReactImg,
        title: 'FRONT-END REACT',
        technologies:
          'REACT /FLUX /Formik, React router /redux-thunk /Redux /Axios, MaterialUI, react-router',
        subTitle: '16.02.2021 - 18.05.2021',
      },
      {
        id: v1(),
        image: frontEndVueImg,
        title: 'VUE.JS',
        technologies:
          'Vue, Vue-router, Vuex ES6/ES8/TypeScript Jest, Cypress, GraphQL, Firebase, Electron',
        subTitle: '27.04.2023 - 24.09.2023',
      },
    ],
    certificatesTitile: 'CERTIFICATES',
  },
  reducers: {},
});

// export const certificatesReducers = (
//   projects: CertificatesInitialStateType = initialState,
//   action: ActionType
// ): CertificatesInitialStateType => {
//   switch (action.type) {
//     case 'CERTIFICATES/RETURN-CERTIFICATES': {
//       return projects;
//     }
//     default: {
//       return projects;
//     }
//   }
// };

type ActionType = { type: 'CERTIFICATES/RETURN-CERTIFICATES' };

export type CertificatesType = {
  id: string;
  image: string;
  title: string;
  subTitle?: string;
  technologies?: string;
  link?: string | null;
  githubLink?: string;
};

export type CertificatesInitialStateType = {
  certificates: Array<CertificatesType>;
  certificatesTitile: string;
};

// const initialState: CertificatesInitialStateType = {
//   certificates: [
//     {
//       id: v1(),
//       image: frontEndBasicImg,
//       title: 'FRONT-END-BASIC',
//       technologies: 'HTML /CSS /SCSS /BEM /Transition /Transform /Animation',
//       subTitle: '03.06.2020 - 30.08.2020',
//     },
//     {
//       id: v1(),
//       image: frontEndPROImg,
//       title: 'FRONT-END PRO',
//       technologies: '/JavaScript /React /OOP',
//       subTitle: '12.11.2020 - 05.05.2021',
//     },
//     {
//       id: v1(),
//       image: frontEndReactImg,
//       title: 'FRONT-END REACT',
//       technologies:
//         'REACT /FLUX /Formik, React router /redux-thunk /Redux /Axios, MaterialUI, react-router',
//       subTitle: '16.02.2021 - 18.05.2021',
//     },
//     {
//       id: v1(),
//       image: frontEndVueImg,
//       title: 'VUE.JS',
//       technologies:
//         'Vue, Vue-router, Vuex ES6/ES8/TypeScript Jest, Cypress, GraphQL, Firebase, Electron',
//       subTitle: '27.04.2023 - 24.09.2023',
//     },
//   ],
//   certificatesTitile: 'CERTIFICATES',
// };

export const certificatesReducers = slice.reducer;
export const certificatesActions = slice.actions;

export const certificateThunk = {};
