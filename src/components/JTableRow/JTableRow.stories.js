import { storiesOf } from '@storybook/vue3'
import JTableRow from './JTableRow.vue'

storiesOf('JTableRow', module).add('normal', () => ({
  components: { JTableRow },
  template: `
      <JTableRow
        :values="values"
      />
    `,
  data: () => ({
    values: ['José Silva', 'email@email.com']
  })
}))
