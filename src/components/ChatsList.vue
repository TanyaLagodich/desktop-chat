<template>
  <ul class="users-list">
    <!-- TODO user active class -->
    <li
      v-for="chat in chats"
      :key="chat._id"
      class="user"
      :class="{ 'user__active': true }"
    >
      <chat-item
        :chat="chat"
      />
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps, toRefs } from 'vue';
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

  .user {
    padding: 15px;
    display: flex;
    align-items: center;

    &__active {
      background: #6588DE;
      box-shadow: 0px 8px 40px rgba(0, 72, 251, 0.3);
      border-radius: 14px;

      .user__name {
        color: #F2F6F7;
      }

      .user__message {
        color: #FDFDFE;
      }
    }

    &__avatar {
      position: relative;
      margin-right: 14px;
      width: 44px;
      height: 44px;
      background-blend-mode: normal;
      border: 2px solid #F7B6B4;
      border-radius: 50%;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
      }

      .user__status {
        border: 1px solid #FFFFFF;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        position: absolute;
        right: 0;

        &.offline {
          background: #FD2828;
        }

        &.online {
          background: #46D362;
        }

        &.working {
          background: #F3BA4A;
        }
      }
    }

    &__name {
      margin-bottom: 3px;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #52585D;
    }

    &__message {
      font-style: normal;
      font-weight: 300;
      font-size: 10px;
      line-height: 15px;
      color: #96A9BA;
    }
  }
</style>
