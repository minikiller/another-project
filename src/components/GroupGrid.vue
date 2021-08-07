<template>
  <Grid
    ref="grid"
    :style="{ height: '520px' }"
    :data-items="rdata.gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :groupable="true"
    :group="rdata.group"
    :take="rdata.take"
    :skip="rdata.skip"
    :expand-field="'expanded'"
    :columns="rdata.columns"
    @datastatechange="dataStateChange"
    @expandchange="expandChange"
  >
  </Grid>
</template>

<script lang="ts">
import { process, DataResult } from '@progress/kendo-data-query'
import { Grid } from '@progress/kendo-vue-grid'
import { defineComponent, onMounted, reactive } from 'vue'

export default defineComponent({
  components: {
    Grid: Grid
  },

  setup () {
    // created: function () {
    //   this.getData()
    // }
    const createRandomData = (count) => {
      const productNames = [
        'Chai',
        'Chang',
        'Syrup',
        'Apple',
        'Orange',
        'Banana',
        'Lemon',
        'Pineapple',
        'Tea',
        'Milk'
      ]
      const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]
      const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89]

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
          UnitsInStock: units[Math.floor(Math.random() * units.length)]
        }))
    }
    let gridData: DataResult = { data: [], total: 0 }
    let skip = 0
    let take = 10
    const products = createRandomData(20)
    let group = [{ field: 'UnitsInStock' }]

    onMounted(() => {
      getData()
      console.log(gridData)
    })
    const rdata = reactive({
      gridData,
      gridPageable: { pageSizes: true },
      products,
      skip,
      take,
      group,
      expandedItems: [],
      columns: [
        { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
        { field: 'UnitsInStock', title: 'Units In Stock' }
      ]
    })

    // rdata.gridData = process(products, {
    //   take: take,
    //   skip: skip,
    //   group: group
    // })

    const getData = () => {
      rdata.gridData = process(products, {
        take: rdata.take,
        skip: rdata.skip,
        group: rdata.group
      })
    }

    const createAppState = (dataState) => {
      rdata.group = dataState.group
      rdata.take = dataState.take
      rdata.skip = dataState.skip
      getData()
    }

    const dataStateChange = (event) => {
      console.log(event.data)
      createAppState(event.data)
    }

    const expandChange = (event) => {
      console.log(event.value)
      console.log(event.target.$props.expandField)
      event.dataItem[event.target.$props.expandField] = event.value
    }

    return {
      rdata,
      dataStateChange,
      expandChange
    }
  }
})
</script>
