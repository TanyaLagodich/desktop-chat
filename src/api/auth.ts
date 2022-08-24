import { API_REQUEST_URL } from '@/config/config';
import { User } from '@/types';
import { AxiosInstance, AxiosResponse } from 'axios';
import instance from '.';

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

export const getProfile = async (): Promise<User> => instance.request<User>({
  method: 'GET',
  url: '/users/profile',
})
  .then((response: AxiosResponse<User>) => response.data);
