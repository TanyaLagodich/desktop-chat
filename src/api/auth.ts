import { API_REQUEST_URL } from '@/config/config';
import instance from './index';

export const login = async (data: any): Promise<any> => instance.request({
  method: 'POST',
  url: '/users/login',
  data,
})
  .then((response) => response.data);

//   fetch(`${API_REQUEST_URL}/users/login`, {
//   method: 'POST',
//   body: JSON.stringify(data),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then((response) => response.json());

export const signUp = async (data: any): Promise<void> => {
  fetch(`${API_REQUEST_URL}/users/sign-up`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json());
};
