import { Component, Prop, h, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-sidebar',
  styleUrl: 'ir-sidebar.css',
})
export class IrSidebar {
  @Prop() name: string;
  @Prop() side: 'right' | 'left' = 'right'

  @Prop({ mutable: true, reflect: true }) open: boolean = false;

  @Event() irSidebarToggle: EventEmitter;


  @Method()
  async toggleSidebar() {
    this.irSidebarToggle.emit(this.open);
  }

  render() {
    let className = '';
    if (this.open) {
      className = 'active';
    } else {
      className = '';
    }
    console.log(this.open);
    console.log(className);
    console.log(this.side);

    return [
      <div
        class={`backdrop ${className}`}
        onClick={() => {
          this.toggleSidebar();
        }}
      ></div>,
      <div class={`sidebar-${this.side} ${className}`}>
        <a
          class="close"
          onClick={() => {
            this.toggleSidebar();
          }}
        >
          <ir-icon icon="ft-x"></ir-icon>
        </a>
        <slot />
      </div>,
    ];
  }
}
