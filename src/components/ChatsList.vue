<template>
  <ul class="users-list">
    <!-- TODO user active class -->
    <chat-item
      v-for="chat in chats"
      :key="chat._id"
      :chat="chat"
    />
  </ul>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import { Chat } from '@/types';
import ChatItem from './ChatItem.vue';

defineProps<{
  chats: Chat[];
}>();

</script>
<style scoped lang="scss">
  .users-list {
    padding: 24px 20px;
    background: #E3F6FC;
    border-radius: 14px 14px 0px 0px;
    list-style: none;
    flex-basis: 30%;
  }
</style>
