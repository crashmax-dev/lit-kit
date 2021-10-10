import { html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import styles from './button.styles'
import { Component } from '../../util/components'

@customElement('lit-button')
export class Button extends Component {
  static get styles() {
    return [super.styles, styles]
  }

  @property({ type: String, reflect: true }) greeting = ''
  @property({ type: String, reflect: true }) planet = 'World'

  togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World'
  }

  render() {
    return html`
      <span @click=${this.togglePlanet}>
        ${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lit-button': Button
  }
}
