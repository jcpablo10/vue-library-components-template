<template>
  <div class="flex gap-2 justify-center items-center">
    <div>
      <slot name="prependIcon">{{ prependIcon }}</slot>
    </div>
    <input 
      v-bind="{ type, name, placeholder }"
      :value="modelValue"
      @input="handleValueChange"
      class="border p-1 rounded-lg" 
    />
    <div>
      <slot name="appendIcon">{{ appendIcon }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  prependIcon?: string
  appendIcon?: string
  modelValue: string
  name?: string
  type?: string
  placeholder?: string
}>(), {
  prependIcon: '',
  appendIcon: '',
  name: '',
  type: 'text',
  placeholder: ''
})

const emit = defineEmits(['update:modelValue'])

const handleValueChange = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<style lang="scss" scoped>

</style>