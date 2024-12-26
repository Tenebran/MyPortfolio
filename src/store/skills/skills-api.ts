import { instance } from '../../api/api';

export const skillsApi = {
  getSkills() {
    return instance.get('/skills');
  },
};
