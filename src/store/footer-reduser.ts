import {
  CodewarsIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from '../modules/common/icons/icons';

export const footerReducer = (
  footer: Array<FooterType> = initialState,
  action: ActionType
): Array<FooterType> => {
  switch (action.type) {
    case 'FOOTER/GET-FOOTER':
      return footer;
    default:
      return footer;
  }
};

export type ActionType = {
  type: 'FOOTER/GET-FOOTER';
};

const initialState: Array<FooterType> = [
  {
    link: 'https://www.linkedin.com/in/sgarkush/',
    icon: LinkedinIcon,
  },
  {
    link: 'https://github.com/Tenebran',
    icon: GithubIcon,
  },
  {
    link: 'https://t.me/sergiygarkusha',
    icon: TelegramIcon,
  },
  {
    link: 'https://www.codewars.com/users/Tenebran',
    icon: CodewarsIcon,
  },
];

export type FooterType = {
  link: string;
  icon: string;
};
