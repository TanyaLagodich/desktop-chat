<template>
  <div class="chat-view">
    <chats-list
      :chats="chats"
    />
  </div>
</template>
<script setup lang="ts">
import ChatsList from '@/components/ChatsList.vue';
import useFetch from '@/composables/useFetch';
import getChatsList from '@/api/chats';
import useAuthStore from '@/store';

const { response: chats } = useFetch(getChatsList);
const { profile } = useAuthStore();
profile();
</script>
<style scoped lang="scss">
  .chat-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
