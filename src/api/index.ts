import axios from 'axios';
import { API_REQUEST_URL } from '@/config/config';

const instance = axios.create({
  baseURL: API_REQUEST_URL,
});

if (localStorage.getItem('token')) {
  instance.defaults.headers.common['X-API-TOKEN'] = `Bearer ${localStorage.getItem('token')}`;
}

export default instance;
