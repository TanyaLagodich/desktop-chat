import { login } from '@/api/auth';

import { defineStore } from 'pinia';

export default defineStore('authStore', {
  state: () => ({
    token: '',
    user: null,
  }),
  actions: {
    async login(data: any) {
      try {
        const { token, user } = await login(data);
        this.token = token;
        localStorage.setItem('token', token);
        this.user = user;
      } catch (err: any) {
        console.log('catch', err);
        throw new Error(err);
      }
    },
  },
});
