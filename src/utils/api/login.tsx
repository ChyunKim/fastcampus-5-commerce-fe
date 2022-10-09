import axios from 'axios';

export const loginapi = axios.create({
  baseURL: 'https://api.commerce.incourse.run',
  headers: {
    'content-type': 'application/json',
  },
});
