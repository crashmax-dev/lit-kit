import { html } from 'lit'
import { Meta, Story } from '@storybook/web-components'
import { ifDefined } from 'lit/directives/if-defined.js'

import type { Button } from './button'
import './button'

export default {
  title: 'Components/Button',
  component: 'lit-button',
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  },
  parameters: {
    actions: {
      handles: [
        'click',
        'lit-button:click'
      ]
    }
  }
} as Meta

const Template: Story<Button> = ({ greeting }) =>
  html`<lit-button greeting="${ifDefined(greeting)}"></lit-button>`

export const MarsBase: Story<Button> = Template.bind({})
MarsBase.args = {
  greeting: 'Hello'
}
