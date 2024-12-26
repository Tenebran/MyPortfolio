import { instance } from '../../api/api';

export const footerApi = {
  getFooter() {
    return instance.get('/footer');
  },
};
