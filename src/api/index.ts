import axios from 'axios';
import { API_REQUEST_URL } from '@/config/config';

export default axios.create({
  baseURL: API_REQUEST_URL,
});
