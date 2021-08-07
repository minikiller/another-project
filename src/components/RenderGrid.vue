<template>
  <grid
    :style="{ height: '280px' }"
    :data-items="items"
    :cell-render="'myTemplate'"
    :columns="columns"
    @custom="customHandler"
  >
    <template v-slot:myTemplate="{ props }">
      <td :class="props.className">
        <b>{{ getNestedValue(props.field, props.dataItem) }}</b>
      </td>
    </template>
  </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid'

export default {
  components: {
    grid: Grid
  },
  data: function () {
    return {
      columns: [
        { field: 'ProductID' },
        { field: 'ProductName', title: 'Product Name' },
        { field: 'UnitPrice', title: 'Unit Price' }
      ],
      items: [
        {
          ProductID: 1,
          ProductName: 'Chai',
          UnitPrice: 18.0
        },
        {
          ProductID: 2,
          ProductName: 'Chang',
          UnitPrice: 19.0
        },
        {
          ProductID: 3,
          ProductName: 'Aniseed Syrup',
          UnitPrice: 10.0
        },
        {
          ProductID: 4,
          ProductName: "Chef Anton's Cajun Seasoning",
          UnitPrice: 22.0
        }
      ]
    }
  },
  methods: {
    customHandler: function (e) {
      console.log('customHandler', e)
    },
    getNestedValue: function (fieldName, dataItem) {
      console.log(fieldName)
      const path = fieldName.split('.')
      let data = dataItem
      path.forEach((p) => {
        data = data ? data[p] : undefined
      })

      return data
    }
  }
}
</script>
