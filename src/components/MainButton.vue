<template>
  <button
    class="button"
    :class="{'disabled': $props.disabled}"
    :disabled="$props.disabled || false"
    @click="$emit('@click')"
  >
    {{ text }}
  </button>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{
  text: string;
  disabled?: boolean;
}>();

defineEmits<{(event: '@click'): void
}>();
</script>
<style scoped lang="scss">
  .button {
    display: block;
    background: #6588DE;
    border: 1px solid #6588DE;
    border-radius: 14px;
    padding: 11px 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #FDFDFE;
    cursor: pointer;
    transition: background .3s ease;

    &:hover {
      background: darken(#6588DE, 10%);
    }

    &:disabled {
      background: gray;
      border-color: gray;
      user-select: none;
      cursor: not-allowed;
    }
  }
</style>
