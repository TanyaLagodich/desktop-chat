import { createStore } from 'vuex';
import { login } from '@/api/auth';
import router from '@/router';

export default createStore<{ token: string; user: any; }>({
  state: {
    token: '',
    user: null,
  },
  getters: {

  },
  mutations: {
    saveToken(_, token) {
      this.token = token;
      localStorage.setItem('token', token);
    },
    saveUser(_, user) {
      this.user = user;
    },
  },
  actions: {
    async login({ commit }, data) {
      try {
        const { token, user } = await login(data);
        commit('saveToken', token);
        commit('saveUser', user);
        router.push({ name: 'home' });
      } catch (err) {
        console.log('catch', err);
      }
    },
  },
  modules: {
  },
});
