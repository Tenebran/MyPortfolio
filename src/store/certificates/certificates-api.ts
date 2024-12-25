import { instance } from '../../api/api';

export const certificatesApi = {
  getCertificates() {
    return instance.get('/certificates');
  },
};
