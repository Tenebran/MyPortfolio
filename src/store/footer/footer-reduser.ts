import { v1 } from 'uuid';
import {
  CodewarsIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from '../../modules/common/icons/icons';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'footer',
  initialState: [
    {
      link: 'https://www.linkedin.com/in/sgarkush/',
      icon: LinkedinIcon,
      id: v1(),
    },
    {
      link: 'https://github.com/Tenebran',
      icon: GithubIcon,
      id: v1(),
    },
    {
      link: 'https://t.me/sergejgarkusha',
      icon: TelegramIcon,
      id: v1(),
    },
    {
      link: 'https://www.codewars.com/users/Tenebran',
      icon: CodewarsIcon,
      id: v1(),
    },
  ],
  reducers: {},
});

// export const footerReducer = (
//   footer: Array<FooterType> = initialState,
//   action: ActionType
// ): Array<FooterType> => {
//   switch (action.type) {
//     case 'FOOTER/GET-FOOTER':
//       return footer;
//     default:
//       return footer;
//   }
// };

export type ActionType = {
  type: 'FOOTER/GET-FOOTER';
};

// const initialState: Array<FooterType> = [
//   {
//     link: 'https://www.linkedin.com/in/sgarkush/',
//     icon: LinkedinIcon,
//     id: v1(),
//   },
//   {
//     link: 'https://github.com/Tenebran',
//     icon: GithubIcon,
//     id: v1(),
//   },
//   {
//     link: 'https://t.me/sergejgarkusha',
//     icon: TelegramIcon,
//     id: v1(),
//   },
//   {
//     link: 'https://www.codewars.com/users/Tenebran',
//     icon: CodewarsIcon,
//     id: v1(),
//   },
// ];

export type FooterType = {
  link: string;
  icon: string;
  id: string;
};

export const footerReducer = slice.reducer;
export const footerActions = slice.actions;

export const footerThznk = {};
