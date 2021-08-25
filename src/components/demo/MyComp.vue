<template>
  <button class="btn">{{ label }}</button>
  this is new value
  <div v-for="item in foo" :key="item.index">{{ item }}</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

const props = defineProps({
  foo: Array as PropType<string[]>,
  label: String
})
</script>
