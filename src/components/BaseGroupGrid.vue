<template>
  <div>
    <Grid
      :style="{ height: '520px' }"
      :data-items="rdata.gridData"
      :columns="columns"
      :groupable="true"
      :group="rdata.group"
      :take="rdata.take"
      :skip="rdata.skip"
      :expand-field="'expanded'"
      @datastatechange="dataStateChange"
      @expandchange="expandChange"
    >
    </Grid>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, computed } from 'vue'
import { Grid } from '@progress/kendo-vue-grid'
import { process, DataResult } from '@progress/kendo-data-query'

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
    const selectedField = 'selected'

    let skip = 0
    let take = 10
    let group = [{ field: 'UnitsInStock' }]
    let gridData: DataResult = { data: [], total: 0 }
    const columns = computed(() => {
      return [...props.static_columns]
    })

    const dataStateChange = (event) => {
      console.log(event.data)
      createAppState(event.data)
    }
    const getData = () => {
      rdata.gridData = process(props.grid_data, {
        take: rdata.take,
        skip: rdata.skip,
        group: rdata.group
      })
    }
    onMounted(() => {
      getData()
      console.log(gridData)
    })
    const createAppState = (dataState) => {
      rdata.group = dataState.group
      rdata.take = dataState.take
      rdata.skip = dataState.skip
      getData()
    }
    const expandChange = (event) => {
      console.log(event.value)
      console.log(event.target.$props.expandField)
      event.dataItem[event.target.$props.expandField] = event.value
    }

    const rdata = reactive({
      skip,
      take,
      group,
      gridData,
      data: props.grid_data
    })

    return {
      rdata,
      columns,
      selectedField,
      dataStateChange,
      expandChange
    }
  }
})
</script>
