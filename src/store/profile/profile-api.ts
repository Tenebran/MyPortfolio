import { instance } from '../../api/api';

export const profileApi = {
  getProfile() {
    return instance.get('/profile');
  },
};
