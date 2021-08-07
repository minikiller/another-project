<template>
  <div class="about">
    <button ref="button">Add 1</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'
import { Product, BaseData, ProductSelect } from '@/models/products.inteface'

export default defineComponent({
  props: {
    mydata: {
      type: Array as PropType<BaseData[]>,
      required: true
    }
  },
  setup() {
    const button = ref(null)
    const clicked = () => {
      console.log('clicke is clck')
    }
    onMounted(() => {
      // button.on()
      console.log(button)
    })
    return { clicked }
  }
})
</script>
