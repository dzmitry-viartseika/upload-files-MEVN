import * as domain from '@/api/constants/domain';

const axios = require('axios');

export default {
  uploadFile(file) {
    console.log('file', file);
    const instWithCred = axios.create({
      baseURL: domain.UPLOAD_API,
    });
    return instWithCred.post('/', { file });
  },
};
