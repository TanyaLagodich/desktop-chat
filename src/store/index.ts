import { login, getProfile, signUp } from '@/api/auth';
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import instance from '@/api';
import useFetch from '@/composables/useFetch';
import { Router } from 'vue-router';

declare module 'pinia' { export interface PiniaCustomProperties { router: Router } }

const useAuthStore = defineStore('authStore', () => {
  const store = useAuthStore(); // for using store.router as a plugin

  const token = ref('');
  const user = ref({});

  const isLoggedIn = computed(() => !!localStorage.getItem('token'));

  const getToken = async (body: any) => { // thinking about naming
    try {
      const { response, error, fetch } = useFetch(login, { skip: true, body });
      await fetch();
      if (error.value) {
        throw new Error(error.value);
      }
      token.value = response.value.token;
      localStorage.setItem('token', token.value);
      instance.defaults.headers.common['X-API-TOKEN'] = `Bearer ${token.value}`;
      user.value = response.value.user;
      store.router.push({ name: 'chat' });
    } catch (err: any) {
      console.log('getToken', err);
      throw new Error(err);
    }
  };

  const createNewUser = async (body: any) => {
    try {
      const { response, error, fetch } = useFetch(signUp, { skip: true, body });
      await fetch();
      if (error.value) {
        throw new Error(error.value);
      }
      token.value = response.value.token;
      localStorage.setItem('token', token.value);
      instance.defaults.headers.common['X-API-TOKEN'] = `Bearer ${token.value}`;
      user.value = response.value.user;
      store.router.push({ name: 'chat' });
    } catch (err: any) {
      console.log('createNewUser', err);
      throw new Error(err);
    }
  };

  const profile = () => {
    try {
      const { response, error } = useFetch(getProfile);
      console.log(response);
      if (error.value) {
        throw new Error(error.value);
      }
      user.value = response;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    isLoggedIn, user, profile, getToken, createNewUser,
  };
});

export default useAuthStore;
