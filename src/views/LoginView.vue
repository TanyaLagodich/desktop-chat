<template>
  <h2>Log in to Chat</h2>
  <text-field
    v-model="authData.email"
    label="Email"
    type="email"
    placehodler="Type your email"
    :invalid="!isEmailValid"
    :error="emailError"
  />
  <text-field
    v-model="authData.password"
    label="Password"
    type="password"
    placeholder="Type your password"
  />
  <main-button
    text="Log in"
    :disabled="isDisabled"
    @@click="loginUser"
  />
  <p>Not a member yet?</p>
  <router-link
    :to="{ name: 'sign-up' }"
  >
    Sign up
  </router-link>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';
import TextField from '@/components/TextField.vue';
import MainButton from '@/components/MainButton.vue';
import { login } from '@/api/auth';

const authData = reactive<{ email: string; password: string; }>({ email: '', password: '' });
const authDataErrors = reactive<{ email: string; password: string; }>({ email: '', password: '' });

const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
const isEmailValid = computed(() => !!authData.email && emailReg.test(authData.email));
const isDisabled = computed(() => !isEmailValid.value || !authData.password);
const emailError = computed(() => {
  console.log('is it working');
  if (!authData.email) {
    return 'Email should be not blank';
  } if (!emailReg.test(authData.email)) {
    return 'Email shoul be valid';
  }
  return '';
});

const store = useStore();

const loginUser = () => {
  store.dispatch('login', authData);
};
</script>
<style lang="scss">
  .login-form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    form {
      padding: 20px 50px;
      border: 1px solid rgba(150, 169, 186, 0.7);
      border-radius: 14px;
      min-width: 400px;

      label {
        margin-bottom: 10px;
      }

      input {
        margin-bottom: 20px;
        width: 100%;
      }

      button {
        margin: 0 auto;
      }
    }
  }
</style>
