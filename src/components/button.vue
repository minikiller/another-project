<template>
  <div>
    <k-button ref="mybutton" disabled> Enabled Button</k-button> &nbsp;
    <k-button :disabled="iseabled">Disabled Button </k-button>
    <k-button @click="onclick">Disabled Button </k-button>
  </div>
</template>
<script>
import { Button } from '@progress/kendo-vue-buttons'
import { ref } from 'vue'
export default {
  components: {
    'k-button': Button
  },
  setup() {
    const mybutton = ref(null)
    let iseabled = ref(true)
    const onclick = () => {
      iseabled.value = false
    }
    mybutton.value.disabled = true
    return { mybutton, iseabled, onclick }
  }
}
</script>
