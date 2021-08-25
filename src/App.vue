<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/demo">Demo</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/button">Button</router-link> |
    <router-link to="/shortcut">shortcut</router-link> |
    <router-link to="/column">Column</router-link>
  </div>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    // GlobalEvents
  },
  setup () {
    const nextTab = () => {
      console.log('event')
    }
    return { nextTab }
  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
