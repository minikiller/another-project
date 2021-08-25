<template>
  <div class="about">
    <h1>This is an demo for update props from parent</h1>
    <h1>Then child component will get its change auto</h1>
  </div>
  <my-comp ref="button" :foo="foo" label="hello"></my-comp>
</template>

<script setup lang="ts">
import MyComp from './MyComp.vue'

import { ref, onUnmounted } from 'vue'

const foo = ref([])

function makeid (length) {
  var result = ''
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const createValue = () => {
  const val1: string = makeid(5)
  const val2: string = makeid(5)
  const val3: string = makeid(5)
  const data: string[] = []
  data.push(val1)
  data.push(val2)
  data.push(val3)

  foo.value = data
  console.log(foo.value)
}

const interval = setInterval(() => {
  createValue()
}, 10000)

onUnmounted(() => {
  clearInterval(interval)
  console.log('clear data')
})
</script>
