<template>
  <button
    @click="onClick"
    class="border rounded-lg p-2 custom-button px-8" 
    :class="classes"
  >
    <slot>
      {{ label }}
    </slot>
  </button>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import {Button} from './Button.types'

  const props = withDefaults(
    defineProps<Button>(),{ 
      primary: true
    })

  const emit = defineEmits<{
    (e: 'click'): void
  }>()

  const onClick = () => {
    emit("click")
  }

  const classes = computed(() => ({
    'block w-full': props.block,
    'bg-black text-white': props.primary,
    'bg-slate-50 text-black': !props.primary,
    'uppercase': props.uppercase,
  }))
</script>

<style scoped lang="scss">
// Use custon classes with SCSS instead of TailwindCSS. 
// Leave TailwindCSS classes just for the temeplate.
.custom-button {
  // border: 2px solid green
}
</style>