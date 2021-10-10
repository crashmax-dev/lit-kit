import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('marsbase-button')
export class Button extends LitElement {
  static get styles() {
    return css`
      :host {
        padding: 10px;
        display: inline-block;
        background: lightgrey;
      }
      .planet {
        color: blue;
      }
    `
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
      },
      backgroundColor: {
        type: String,
        attribute: 'background-color'
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
    'marsbase-button': Button
  }
}
