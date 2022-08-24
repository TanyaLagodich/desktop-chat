<template>
  <div class="user__avatar">
    works
        <!-- <img
          :src="partner.avatar"
          :alt="`${partner.name} profile picture`">
          <span
            :class="`user__status ${partner.status}`"
          >
          </span>
      </div>

      <div>
        <p class="user__name">
          {{ partner.name }}
        </p>
        <p class="user__message">
          {{ partner.lastMessage.text }}
        </p> -->
      </div>
</template>
<script setup lang="ts">
import { defineProps, computed } from 'vue';
import { Chat, User } from '@/types';
import useAuthStore from '@/store';

const props = defineProps<{
  chat: Chat;
}>();

const store = useAuthStore();
const { user } = store;
const partner = computed(() => {
  console.log(user);
  return props.chat.members.find((member) => member._id !== user._id);
});

</script>
