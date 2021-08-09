<template>
  <div>
    <Grid
      ref="grid1"
      :style="{ height: '520px' }"
      :data-items="rdata.products"
      :columns="columns"
    >
    </Grid>
    <button @click="onclicked">clicked</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed, ref } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'

import { Product } from '@/models/products.inteface'

export default defineComponent({
  components: {
    Grid: Grid
  },
  props: {
    grid_data: {
      type: Array as PropType<Product[]>,
      required: true
    },
    static_columns: {
      type: Array,
      required: true
    }
  },
  setup (props) {
    // const data!: kendo.ui.grid
    const grid1 = ref(null)
    interface ProductSelect extends Product {
      selected: boolean
    }

    const initData: ProductSelect[] = props.grid_data.map((item) => {
      return { ...item, selected: false }
    })
    const selectedField = 'selected'
    const rdata = reactive({
      products: initData as ProductSelect[]
    })

    const columns = computed(() => {
      const notSelectedIndex = rdata.products.findIndex((i) => {
        return i.selected === false
      })
      return [
        {
          field: 'selected',
          width: '50px',
          headerSelectionValue: notSelectedIndex === -1,
          filterable: false
        },
        ...props.static_columns
      ]
    })

    const onSelectionChange = (event) => {
      console.log(event)
      event.dataItem[selectedField] = !event.dataItem[selectedField]
    }

    const onRowClick = (event) => {
      console.log(event)
      event.dataItem[selectedField] = !event.dataItem[selectedField]
    }

    const onHeaderSelectionChange = (event) => {
      console.log(event)
      let checked = event.event.target.checked
      rdata.products = rdata.products.map((item) => {
        return { ...item, selected: checked }
      })
    }

    const onclicked = () => {
      // const me = grid1.value
      // console.log(me!['columns'])
      const item = grid1.value!['columns'][0]
      // item['hidden'] = true
      // item.hidden = true
      console.log(item)
      // console.log((grid1.value!['columns'][0]['hidden'] = true))
    }

    return {
      grid1,
      rdata,
      columns,
      selectedField,
      onRowClick,
      onSelectionChange,
      onHeaderSelectionChange,
      onclicked
    }
  }
})
</script>
