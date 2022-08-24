import { login, getProfile } from '@/api/auth';

import { defineStore } from 'pinia';
import instance from '@/api';

export default defineStore('authStore', {
  state: () => ({
    token: '',
    user: {},
  }),
  actions: {
    async login(data: any) {
      try {
        const { token, user } = await login(data);
        this.token = token;
        localStorage.setItem('token', token);
        instance.defaults.headers.common['X-API-TOKEN'] = `Bearer ${token}`;
        this.user = user;
      } catch (err: any) {
        console.log('catch', err);
        throw new Error(err);
      }
    },
    async getProfile() {
      try {
        const user = await getProfile();
        this.user = user;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
