import { html } from 'lit'
import { Meta, Story } from '@storybook/web-components'
import { ifDefined } from 'lit/directives/if-defined.js'

// ???
import type { Button } from '../../src'
import '../../src/components/button'

export default {
  title: 'Components/Button',
  // Need to set the tag to make addon-docs works properly with CustomElementsManifest
  component: 'marsbase-button',
  argTypes: {
    onClick: {
      action: 'onClick'
    }
  },
  parameters: {
    actions: {
      handles: [
        'click',
        'marsbase-button:click'
      ]
    }
  }
} as Meta

const Template: Story<Button> = ({ greeting }) =>
  html`<marsbase-button greeting="${ifDefined(greeting)}"></marsbase-button>`

export const MarsBase: Story<Button> = Template.bind({})
MarsBase.args = {
  greeting: 'Hello'
}
