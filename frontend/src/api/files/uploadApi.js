import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  addFile(formData) {
    console.log('formData', formData);
    const instWithCred = axios.create({
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      baseURL: domain.UPLOAD_API,
    });
    return instWithCred.post('/', formData);
  },
};
