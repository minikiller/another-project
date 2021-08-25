<template>
  <Grid :data-items="items" :columns="columns">
    <template v-slot:myTemplate="{ props }">
      <custom
        :data-item="props.dataItem"
        @dragover="reorder"
        @dragstart="setActive"
        @dragend="updateRemote"
      />
    </template>
    <template v-slot:headerTemplateReorder="{}">
      <span class="k-icon k-i-reorder"> </span>
    </template>
    <template v-slot:headerTemplateProductID="{}">
      <div>
        Product ID
        <span class="k-icon k-i-clip"> </span>
      </div>
    </template>
    <template v-slot:headerTemplateProductName="{}">
      <div>
        Product Name
        <span class="k-icon k-i-eye"> </span>
      </div>
    </template>
  </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid'
import CustomCell from './CustomCell'

export default {
  components: {
    Grid: Grid,
    custom: CustomCell
  },
  data() {
    return {
      items: [],
      columns: [
        {
          field: 'ProductID',
          title: '',
          cell: 'myTemplate',
          width: '80px',
          headerCell: 'headerTemplateReorder'
        },
        { field: 'ProductID', headerCell: 'headerTemplateProductID' },
        {
          field: 'ProductName',
          title: 'Product Name',
          headerCell: 'headerTemplateProductName'
        },
        { field: 'UnitPrice', title: 'Unit Price' }
      ],
      activeItem: null
    }
  },
  methods: {
    createRandomData(count) {
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

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
        }))
    },
    reorder(dataItem) {
      const that = this

      if (that.activeItem === dataItem) {
        return
      }

      const reorderedData = this.items.slice()
      const prevIndex = reorderedData.findIndex((p) => p === that.activeItem)
      const nextIndex = reorderedData.findIndex((p) => p === dataItem)
      reorderedData.splice(prevIndex, 1)
      reorderedData.splice(nextIndex, 0, this.activeItem)

      that.items = reorderedData
    },
    setActive(dataItem) {
      this.activeItem = dataItem
    },
    updateRemote() {
      console.log('in drag end')

      // Send request to remote to update the source order
    }
  },
  mounted() {
    this.items = this.createRandomData(10)
  }
}
</script>
