import { instance } from '../../api/api';

export const projectsApi = {
  getProjects() {
    return instance.get('/projects');
  },
};
