import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import theme from '../../styles/theme'
import styles from './button.styles'

@customElement('lit-button')
export class Button extends LitElement {
  static get styles() {
    return [theme, styles]
  }

  static get properties() {
    return {
      greeting: {
        type: String,
        reflect: true
      },
      planet: {
        type: String,
        reflect: true
      }
    }
  }

  greeting = ''
  planet = 'World'

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
