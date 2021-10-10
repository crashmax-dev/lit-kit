import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import theme from '../styles/theme'

@customElement('lit-component')
export class Component extends LitElement {
  static styles = theme
}
