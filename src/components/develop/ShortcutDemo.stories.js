import ShortcutDemo from './ShortcutDemo.vue'
export default {
  title: 'TCGrid/Develop/ShortcutDemo',
  component: ShortcutDemo,
  argTypes: {
    onClick: {}
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ShortcutDemo },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ShortcutDemo v-bind="args" />'
})

export const Primary = Template.bind({})
Primary.args = {
  // grid_data: products,
  // static_columns: staticColumns
}
