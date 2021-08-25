<template>
  <div class="grid-container">
    <CheckboxGrid
      ref="leftGrid"
      :grid_data="leftProducts"
      :static_columns="staticColumns"
      @selectChanged="onLeftSelectChanged"
      @dataChanged="onLeftDataChanged"
    >
    </CheckboxGrid>
    <div class="buttons-container">
      <k-button
        ref="leftBtn"
        class="k-button"
        @click="onLeftBtnClick"
        :disabled="isLeftBtnDisabled"
      >
        >>
      </k-button>
      <br />
      <k-button
        ref="rightBtn"
        class="k-button"
        @click="onRightBtnClick"
        :disabled="isRightBtnDisabled"
      >
        &lt;&lt;
      </k-button>
    </div>
    <CheckboxGrid
      ref="rightGrid"
      :grid_data="rightProducts"
      :static_columns="staticColumns"
      @selectChanged="onRightSelectChanged"
      @dataChanged="onRightDataChanged"
    >
    </CheckboxGrid>
  </div>
  <div class="text-right">
    <button type="button" class="k-button" @click="toggleDialog">Cancel</button>
    <button type="button" class="k-button k-primary" @click="toggleDialog">
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import { rightProducts } from './r_products'
import { leftProducts } from './l_products'
import CheckboxGrid from './CheckboxGrid.vue'
import { ref, computed, reactive, onMounted, watch } from 'vue'
import { Button } from '@progress/kendo-vue-buttons'

export default {
  components: {
    CheckboxGrid,
    'k-button': Button
  },
  setup () {
    let l_data
    let r_data
    const leftGrid = ref()
    const rightGrid = ref()
    const leftBtn = ref()
    const rightBtn = ref()

    const isLeftBtnDisabled = ref(true)
    const isRightBtnDisabled = ref(true)
    const rdata = reactive({ l_data, r_data })
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

    onMounted(() => {
      console.log('dfdf')
    })

    const onRightBtnClick = () => {
      console.log('onRight_clicked')
      const data = rdata.r_data.filter((item) => {
        return item.selected === true
      })
      data.map((item) => {
        console.log(item)
        const index = rdata.r_data.indexOf(item)
        if (index > -1) {
          rdata.r_data.splice(index, 1)
        }
        item.selected = false
        rdata.l_data.push(item)
      })
    }

    const onLeftBtnClick = () => {
      console.log('onLeft_clicked')
      const data = rdata.l_data.filter((item) => {
        return item.selected === true
      })
      data.map((item) => {
        console.log(item)
        const index = rdata.l_data.indexOf(item)
        if (index > -1) {
          rdata.l_data.splice(index, 1)
        }
        item.selected = false
        rdata.r_data.push(item)
      })
    }
    const onLeftSelectChanged = (data) => {
      // console.log(data)
      rdata.l_data = data
      isLeftBtnDisabled.value = isEnabled(rdata.l_data)
      console.log(rdata.l_data)
    }

    const onRightSelectChanged = (data) => {
      // console.log(data)
      rdata.r_data = data
      isRightBtnDisabled.value = isEnabled(rdata.r_data)
      console.log(rdata.r_data)
    }

    const onRightDataChanged = (data) => {
      isRightBtnDisabled.value = isEnabled(rdata.r_data)
    }

    const onLeftDataChanged = (data) => {
      isLeftBtnDisabled.value = isEnabled(rdata.l_data)
    }

    const isEnabled = (data) => {
      const filtered = data.filter((item) => {
        return item.selected === true
      })
      return filtered.length > 0 ? false : true
    }
    const toggleDialog = () => {
      console.log('closed')
    }
    // watch(
    //   () => [...rdata.r_data, ...rdata.l_data],
    //   (currentValue, oldValue) => {
    //     console.log('dataChanged', currentValue)
    //   }
    // )

    return {
      rightProducts,
      leftProducts,
      staticColumns,
      leftGrid,
      rightGrid,
      rdata,
      leftBtn,
      rightBtn,
      isLeftBtnDisabled,
      isRightBtnDisabled,
      onRightBtnClick,
      onLeftBtnClick,
      onLeftSelectChanged,
      onRightSelectChanged,
      onRightDataChanged,
      onLeftDataChanged,
      toggleDialog
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
