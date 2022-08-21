<template>
  <div>
    <label
      v-if="label"
      for="email">
        {{ label }}
    </label>
    <input
      :type="$props.type || 'text'"
      id="email"
      :value="modelValue"
      :placeholder="$props.placehodler || 'Type...'"
      :class="{'invalid': $props.invalid}"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <p
      v-if="!!error"
      class="error"
    >
      {{ error }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineEmits<{(event: 'update:modelValue', value: string): void
}>();

defineProps<{
    label?: string;
    placehodler?: string;
    invalid: boolean;
    error: string;
    type: string;
    modelValue: string;
  }>();

</script>
<style scoped lang="scss">
  div {
    position: relative;
  }
  label {
    display: block;
  }
  input {
    background: #FDFDFD;
    border: 1px solid rgba(150, 169, 186, 0.7);
    border-radius: 14px;
    min-height: 40px;
    padding: 11px 20px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 18px;

    &::placeholder {
      color: #96A9BA;
    }
    &.invalid {
      border-color: red;
    }
  }
  .error {
    color: red;
    position: absolute;
    bottom: 5px;
    font-size: 12px;
  }
</style>
