<template>
  <div>
    <Grid
      :style="{ height: '520px' }"
      :data-items="rdata.products"
      :columns="columns"
      :selected-field="selectedField"
      @selectionchange="onSelectionChange"
      @rowclick="onRowClick"
      @headerselectionchange="onHeaderSelectionChange"
    >
    </Grid>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  computed,
  onMounted,
  watch
} from 'vue'
import { Grid } from '@progress/kendo-vue-grid'

import { Product } from '@/models/products.inteface'

export default defineComponent({
  name: 'CheckboxGrid',
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
  emits: ['selectChanged', 'dataChanged'],
  // watch: {
  //   grid_data: {
  //     // This will let Vue know to look inside the array
  //     deep: true,

  //     // We have to move our method to a handler field
  //     handler (value) {
  //       console.log('The list of colors has changed!', value)
  //     }
  //   }
  // },

  setup (props, { emit }) {
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

    onMounted(() => {
      emit('selectChanged', rdata.products)
    })

    const columns = computed(() => {
      let notSelectedIndex
      if (rdata.products.length === 0) notSelectedIndex = 0
      else {
        notSelectedIndex = rdata.products.findIndex((i) => {
          return i.selected === false
        })
      }
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
      emit('selectChanged', rdata.products)
    }

    const onRowClick = (event) => {
      console.log(event)
      event.dataItem[selectedField] = !event.dataItem[selectedField]
      emit('selectChanged', rdata.products)
    }

    const onHeaderSelectionChange = (event) => {
      console.log(event)
      const checked = event.event.target.checked
      rdata.products = rdata.products.map((item) => {
        return { ...item, selected: checked }
      })
      emit('selectChanged', rdata.products)
    }

    // watch(rdata.products, (selection, prevSelection) => {
    //   /* ... */
    //   console.log(selection, prevSelection)
    // })
    watch(
      () => [...rdata.products],
      (currentValue, oldValue) => {
        emit('dataChanged', currentValue)
      }
    )

    return {
      rdata,
      columns,
      selectedField,
      onRowClick,
      onSelectionChange,
      onHeaderSelectionChange
    }
  }
})
</script>
