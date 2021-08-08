import JTableRow from './JTableRow.vue'

export default {
  title: 'Lerna/JTableRow',
  component: JTableRow,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })]
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JTableRow },
  template: '<JTableRow v-bind="args"/>',
  setup() {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = { values: ['José Silva', 'email@email.com'] }
