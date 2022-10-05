import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.commerce.incourse.run',
});

export const productApi = {
  list: (page: number) => api.get(`/v1/product/?page_size=${page}`),
};
