import { Component, h, State, Method, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-modal',
  styleUrl: 'ir-modal.css',
})
export class IrModal {
  @State() isOpen: boolean = false;

  @Method()
  async closeModal() {
    this.isOpen = false;
  }
  @Method()
  async openModal() {
    this.isOpen = true;
  }
  @Event() confirmModal: EventEmitter<any>;

  confirmClose() {
    console.log('confirmClose');
    this.confirmModal.emit()
  }


  render() {
    return [
      <div
        class={`backdropModal ${this.isOpen ? 'active' : ''}`}
        onClick={() => {
          this.closeModal();
        }}
      ></div>,
      <div class={{ modal: true, fade: true, show: this.isOpen }} tabindex="-1" style={{ display: this.isOpen ? 'block' : 'none' }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <slot></slot>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-light"
                onClick={() => {
                  this.confirmClose();
                }}
              >
                Confirm
              </button>
              <button type="button" class="btn btn-primary" onClick={() => this.closeModal()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
