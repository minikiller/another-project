<template>
  <!-- <div class="about">
    <h1>This is an about page</h1>
  </div> -->

  <!-- <test :mydata="products"></test> -->
  <tabstrip :selected="selected" @select="onselect">
    <tabstripTab :title="'column'">
      <div>
        <column-grid></column-grid>
      </div>
    </tabstripTab>
    <tabstripTab :title="'render'">
      <div>
        <render-grid></render-grid>
      </div>
    </tabstripTab>
    <tabstripTab :title="'checkbox'">
      <div>
        <my-grid
          :grid_data="products"
          :static_columns="staticColumns"
          :checkbox_enabled="true"
          @selectItem="onselect"
        ></my-grid>
      </div>
    </tabstripTab>
    <tabstripTab :title="'filter'">
      <div>
        <h1>This is an filter page</h1>
        <filter-grid
          :grid_data="products"
          :static_columns="staticColumns"
        ></filter-grid>
      </div>
    </tabstripTab>
    <tabstripTab :title="'group'">
      <div>
        <h1>This is an group page</h1>
        <group-grid></group-grid>
      </div>
    </tabstripTab>
    <tabstripTab :title="'mygroup'">
      <my-group-grid></my-group-grid>
    </tabstripTab>
    <tabstripTab :title="'base'">
      <base-group-grid
        :grid_data="products"
        :static_columns="staticColumns"
      ></base-group-grid>
    </tabstripTab>
    <tabstripTab :title="'basegrid'">
      <base-grid
        :grid_data="products"
        :static_columns="staticColumns"
      ></base-grid>
    </tabstripTab>
    <tabstripTab :title="'changed'">
      <change-grid
        :grid_data="products"
        :static_columns="staticColumns"
      ></change-grid>
    </tabstripTab>
  </tabstrip>
</template>

<script>
import { defineComponent, ref } from 'vue'
import ColumnGrid from '@/components/ColumnGrid.vue'
import MyGrid from '@/components/MyGrid.vue'
import FilterGrid from '@/components/FilterGrid.vue'
import GroupGrid from '@/components/GroupGrid.vue'
import MyGroupGrid from '@/components/MyGroupGrid.vue'
import BaseGroupGrid from '@/components/BaseGroupGrid.vue'
import BaseGrid from '@/components/BaseGrid.vue'
import ChangeGrid from '@/components/ChangeGrid.vue'
import RenderGrid from '@/components/RenderGrid.vue'
import { products } from './products'
import { TabStrip, TabStripTab } from '@progress/kendo-vue-layout'

export default defineComponent({
  components: {
    ColumnGrid,
    MyGrid,
    ChangeGrid,
    BaseGrid,
    FilterGrid,
    GroupGrid,
    MyGroupGrid,
    BaseGroupGrid,
    RenderGrid,
    tabstrip: TabStrip,
    tabstripTab: TabStripTab
  },
  setup() {
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
    return { products, staticColumns, onselect, selected }
  }
})
</script>
