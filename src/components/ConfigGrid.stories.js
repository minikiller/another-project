import ConfigGrid from '../components/ConfigGrid.vue'
import { products } from '../views/products'
export default {
  title: 'TCGrid/Example/ConfigGrid',
  component: ConfigGrid,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] }
    },
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ConfigGrid },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ConfigGrid v-bind="args" />'
})

const staticColumns = [
  { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
  { field: 'UnitsInStock', title: 'Units In Stock' }
]

export const Primary = Template.bind({})
Primary.args = {
  grid_data: products,
  static_columns: staticColumns
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button'
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button'
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button'
// }
