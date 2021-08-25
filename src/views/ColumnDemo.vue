<template>
  <div>
    <column-grid ref="grid"></column-grid>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ColumnGrid from '@/components/ColumnGrid.vue'

export default defineComponent({
  components: {
    ColumnGrid
  },
  setup() {
    const grid = ref()
    const selected = ref(0)
    const staticColumns = [
      {
        field: 'ProductID',
        filterable: false,
        title: 'ID',
        width: '50px',
        hidden: true
      },
      { field: 'ProductName', title: 'Product Name' },
      { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
      { field: 'UnitsInStock', title: 'Units In Stock', hidden: true }
    ]
    const onselect = (data) => {
      selected.value = data.selected
      console.log(data)
    }

    return { staticColumns, onselect, selected, grid }
  }
})
</script>
