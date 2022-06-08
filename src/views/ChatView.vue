<template>
  <div class="chat-view">
    <users-list
      :users="users"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import UsersList from '@/components/UsersList.vue';
import * as sourceData from '@/data.json';
import { IUser } from '@/types';

export default defineComponent({
  components: {
    UsersList,
  },
  data() {
    return {
      users: sourceData.users as Array<IUser>,
    };
  },
});
</script>
<style scoped lang="scss">
  .chat-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
