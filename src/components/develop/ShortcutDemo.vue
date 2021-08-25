/* eslint-disable vue/valid-v-on */
<template>
  <div class="about">
    <div>press f1 to show or hidden label</div>
    <div v-show="isLabelShow">Testing shortcut</div>
    <p />
    <div>press ctrl.shift.s to show or hidden button</div>
    <div v-show="isButtonShow">
      <button>Add 1</button>
    </div>
    <p />
    <div>press ctrl.alt.9 to show alert</div>
  </div>
  <keep-alive>
    <GlobalEvents
      @keyup.prevent.f1="labelHandler"
      @keyup.prevent.ctrl.shift.s="buttonHandler"
      @keyup.prevent.ctrl.alt.9="alertHandler"
      @contextmenu.prevent="openMenu"
      :filter="filtered"
    />
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType } from 'vue'

export default defineComponent({
  setup (prop) {
    const button = ref(null)
    let isLabelShow = ref<boolean>(false)
    let isButtonShow = ref(false)
    const filtered = (event, handler, eventName) => {
      //   console.log(event, handler, eventName)
      //   return event.target.tagName !== 'INPUT'
      return true
    }

    const clicked = () => {
      console.log('clicke is clck')
    }

    const labelHandler = () => {
      console.log('f1 is pressed')
      isLabelShow.value = !isLabelShow.value
    }
    const alertHandler = () => {
      console.log('alertHandler')
      alert('are you sure you want to save?')
      //   router.push({ name: 'About' })
    }

    const buttonHandler = () => {
      console.log('event')
      isButtonShow.value = !isButtonShow.value
      //   router.push({ name: 'About' })
    }

    onMounted(() => {
      // button.on()
      console.log(button)
    })
    return {
      isLabelShow,
      isButtonShow,
      clicked,
      labelHandler,
      buttonHandler,
      filtered,
      alertHandler
    }
  }
})
</script>
