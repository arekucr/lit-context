import { LitElement, html  } from 'lit-element';
import { customElement, property  } from 'lit/decorators.js';;
import { consume } from '../../../src/lit-context';

@customElement('simple-message')
@consume('message-provider')
export class SimpleMessage extends LitElement {
  @property({ type: String })
  message: string = "";
  
  updates: number = 0;

  render() {
    this.updates++;
    return html`
      Simple Message Updates: ${this.updates}
      <p>${this.message}</p>
    `;
  }
}