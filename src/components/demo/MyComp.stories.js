import Demo from './Demo.vue'
export default {
  title: 'TCGrid/Demo/Demo',
  component: Demo,
  argTypes: {
    // onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Demo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Demo v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  // grid_data: products,
  // static_columns: staticColumns
}
