<template>
  <div>
    <div v-if="checkbox_enabled">
      <Grid
        ref="grid"
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
    <div v-else>
      <Grid
        ref="grid"
        :style="{ height: '520px' }"
        :data-items="rdata.products"
        :columns="columns"
      ></Grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, computed } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'

import { Product, BaseData, ProductSelect } from '@/models/products.inteface'

export default defineComponent({
  components: {
    Grid: Grid
  },
  props: {
    grid_data: {
      type: Array as PropType<BaseData[]>,
      required: true
    },
    static_columns: {
      type: Array,
      required: true
    },
    checkbox_enabled: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  setup(props, { emit }) {
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
      if (props.checkbox_enabled) {
        return [
          {
            field: 'selected',
            width: '50px',
            headerSelectionValue: notSelectedIndex === -1,
            filterable: false
          },
          ...props.static_columns
        ]
      } else {
        return [...props.static_columns]
      }
    })

    const onSelectionChange = (event) => {
      console.log(event)
      event.dataItem[selectedField] = !event.dataItem[selectedField]
      emit('selectItem', rdata.products)
    }

    const onRowClick = (event) => {
      console.log(event)
      event.dataItem[selectedField] = !event.dataItem[selectedField]
      emit('selectItem', rdata.products)
    }

    const onHeaderSelectionChange = (event) => {
      console.log(event)
      let checked = event.event.target.checked
      rdata.products = rdata.products.map((item) => {
        return { ...item, selected: checked }
      })
      emit('selectItem', rdata.products)
    }

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
