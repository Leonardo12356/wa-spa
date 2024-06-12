<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: 'Digite aqui!',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label>{{ label }}</label> <br />
    <input 
      :type="type" 
      :placeholder="placeholder" 
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" 
    />
  </div>
</template>

<style scoped>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0px;
  display: inline-block;
  border: 1px solid #ddd;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
