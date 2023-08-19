import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ir-button',
})
export class IrButton {
  @Prop() name: string;
  @Prop() text;
  @Prop() icon = 'ft-save';
  @Prop() btn_color = 'btn-info';
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';
  @Prop() textSize: 'sm' | 'md' | 'lg' = 'md';
  @Prop() btn_block = true;
  @Prop() btn_disabled = false;
  @Prop() btn_type = 'button';

  connectedCallback() {}
  disconnectedCallback() {}
  @Event() clickHanlder: EventEmitter<any>;

  render() {
    let block = '';
    if (this.btn_block) {
      block = 'btn-block';
    }
    return (
      <button
        onClick={() => {
          this.clickHanlder.emit();
        }}
        class={`btn ${this.btn_color} btn-${this.size} text-${this.textSize} ${block}`}
        type={this.btn_type}
      >
        <i class={this.icon}></i>&nbsp;{this.text}
      </button>
    );
  }
}
