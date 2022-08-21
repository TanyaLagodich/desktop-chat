<template>
  <h2>Get started</h2>
  <text-field
    v-model="authData.name"
    label="Name"
    type="text"
    placehodler="Type your name"
  />
  <text-field
    v-model="authData.email"
    label="Email"
    type="email"
    placehodler="Type your email"
  />
  <text-field
    v-model="authData.password"
    label="Password"
    type="password"
    placeholder="Type your password"
  />
  <main-button
    text="Sign up"
    @@click="signUpUser"
  />
  <p>Already have an account?</p>
  <router-link
    :to="{ name: 'login' }"
  >
    Log in
  </router-link>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import TextField from '@/components/TextField.vue';
import MainButton from '@/components/MainButton.vue';
import { signUp } from '@/api/auth';

const authData = reactive<
                    { name: string; email: string; password: string; }
                  >({ name: '', email: '', password: '' });

const signUpUser = async () => {
  await signUp(authData);
};
</script>
