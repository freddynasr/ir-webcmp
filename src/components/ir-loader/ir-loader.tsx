import { Component, h } from '@stencil/core';

@Component({
  tag: 'ir-loader',
  styleUrl: 'ir-loader.css',
})
export class IrLoader {
  render() {
    return <span class="loader"></span>;
  }
}
