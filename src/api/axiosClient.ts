import axios from 'axios';

export const hospitalDataClient = axios.create({
  baseURL: '',
});

export const hospitalImageClient = axios.create({
  baseURL: '',
});
