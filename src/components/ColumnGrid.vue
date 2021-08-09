<template>
  <div class="grid-container">
    <CheckboxGrid
      ref="leftGrid"
      :grid_data="rdata.leftProducts"
      :static_columns="staticColumns"
      @selectChanged="onLeftChanged"
    >
    </CheckboxGrid>
    <div class="buttons-container">
      <button class="k-button" @click="onLeftBtn_clicked">>></button>
      <br />
      <button class="k-button" @click="onRightBtn_clicked">&lt;&lt;</button>
    </div>
    <CheckboxGrid
      ref="rightGrid"
      :grid_data="rdata.rightProducts"
      :static_columns="staticColumns"
      @selectChanged="onRightChanged"
    >
    </CheckboxGrid>
  </div>
</template>
<script lang="ts">
import { rightProducts } from './r_products'
import { leftProducts } from './l_products'
import CheckboxGrid from './CheckboxGrid.vue'
import { ref, reactive } from 'vue'

export default {
  components: {
    CheckboxGrid: CheckboxGrid
  },
  setup () {
    const leftGrid = ref()
    const rightGrid = ref()
    const rdata = reactive({ leftProducts, rightProducts })
    const staticColumns = [
      {
        field: 'ProductID',
        filterable: false,
        title: 'ID',
        width: '50px'
        // hidden: true
      },
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
      { field: 'UnitsInStock', title: 'Units In Stock' }
    ]

    const onRightBtn_clicked = () => {
      console.log('onRight_clicked')
      //   console.log(rightGrid)
      console.log(rdata.rightProducts)
    }

    const onLeftBtn_clicked = () => {
      console.log('onLeft_clicked')
      //   console.log(leftGrid)
      console.log(rdata.leftProducts)
    }

    const onLeftChanged = (data) => {
      console.log(data)
    }

    const onRightChanged = (data) => {
      console.log(data)
    }

    return {
      staticColumns,
      leftGrid,
      rightGrid,
      rdata,
      onRightBtn_clicked,
      onLeftBtn_clicked,
      onLeftChanged,
      onRightChanged
    }
  }
}
</script>
<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 40px 1fr;
  grid-gap: 20px;
}

.buttons-container {
  padding-top: 240px;
}
</style>
