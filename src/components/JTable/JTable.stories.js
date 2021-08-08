import JTable from './JTable'

var items = [
  ['Yair Lamb', 'yair.lamb@email.com'],
  ['Leonardo Payne', 'leonardo.payne@email.com'],
  ['Carl Henson', 'carl.henson@email.com'],
  ['Jensen Combs', 'jensen.combs@email.com'],
  ['Amiah Burton', 'amiah.burton@email.com'],
  ['Yaretzi Mayo', 'yaretzi.mayo@email.com'],
  ['Kamren Huffman', 'kamren.huffman@email.com']
]

export default {
  title: 'Lerna/JTable',
  component: JTable,
  decorators: [() => ({ template: '<div style="margin: 3em;"><story/></div>' })],
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { JTable },
  template: '<JTable v-bind="args" />',
  setup () {
    return { args }
  }
})

export const Primary = Template.bind({})
Primary.args = {
  items: items
}
