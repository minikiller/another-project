<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <!-- <keep-alive>
    <GlobalEvents
      :target="window"
      @keyup.prevent.ctrl.h="nextTest"
      @keyup.prevent.ctrl.b="nextDemo"
      @keyup.prevent.ctrl.n="nextAbout"
      @contextmenu.prevent="openMenu"
    />
  </keep-alive> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { GlobalEvents } from 'vue-global-events'
import router from '@/router'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
    // GlobalEvents
  },
  setup () {
    const test = true
    const nextTest = () => {
      console.log('event')
      router.push({ name: 'Test' })
    }
    const nextDemo = () => {
      console.log('event')
      router.push({ name: 'Demo' })
    }
    const nextAbout = () => {
      console.log('event')
      router.push({ name: 'About' })
    }
    const openMenu = () => {
      console.log('openMenu')
    }
    return { nextTest, nextDemo, nextAbout, openMenu }
  }
})
</script>
