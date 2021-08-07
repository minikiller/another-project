<template>
  <Grid
    :data-items="rdata.data"
    :filterable="true"
    :filter="rdata.filter"
    @filterchange="filterChange"
    :columns="columns"
  >
  </Grid>
</template>
<script lang="ts">
import { Grid } from '@progress/kendo-vue-grid'
import { defineComponent, PropType, reactive, computed } from 'vue'

import { filterBy, CompositeFilterDescriptor } from '@progress/kendo-data-query'
import { BaseData } from '@/models/products.inteface'

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
    }
  },
  setup (props) {
    // let filter = {
    //   logic: 'and',
    //   filters: [
    //     // { field: 'UnitPrice', operator: 'neq', value: 18 }
    //     // {
    //     //   field: 'FirstOrderedOn',
    //     //   operator: 'gte',
    //     //   value: new Date('1996-10-10')
    //     // }
    //   ]
    // }
    const rdata = reactive({
      data: props.grid_data,
      filter: {
        logic: 'and',
        filters: [
          //   { field: 'UnitPrice', operator: 'neq', value: 18 }
          // {
          //   field: 'FirstOrderedOn',
          //   operator: 'gte',
          //   value: new Date('1996-10-10')
          // }
        ]
      } as CompositeFilterDescriptor
    })
    const columns = computed(() => {
      return [
        // {
        //   field: 'ProductID',
        //   filterable: false,
        //   title: 'Product ID',
        //   width: '50px'
        // },
        ...props.static_columns
      ]
    })
    const products = computed(() => {
      return filterBy(props.grid_data, rdata.filter)
    })
    const filterChange = (ev) => {
      rdata.filter = ev.filter
      rdata.data = filterBy(props.grid_data, ev.filter)
    }
    return { columns, rdata, products, filterChange }
  }
  //   return filterBy(products, this.filter
})
</script>
