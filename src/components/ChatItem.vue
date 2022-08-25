<template>
  <li
    class="user"
    :class="{ 'user__active': false }"
  >
    <div
      class="user__avatar"
    >
      <img
        v-if="partner.avatar"
        :src="partner.avatar"
        :alt="`${partner.name} profile picture`"
      >
      <div
        v-else
      >
        {{ capitalPartnerFirstLetter }}
      </div>
    </div>
    <div>
      <p class="user__name">
        {{ partner.name }}
      </p>
    </div>
  </li>
  <!-- <div class="user__avatar"> -->
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
      <!-- </div> -->
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
const partner = computed<User | undefined>(
  () => props.chat.members.find((member) => member._id !== user._id),
);
const capitalPartnerFirstLetter = computed(() => partner.value.name.slice(0, 1).toUpperCase());

</script>
<style scoped lang="scss">
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
      display: flex;
      justify-content: center;
      align-items: center;
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
