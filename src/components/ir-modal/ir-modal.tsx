import { Component, h, State, Method, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'ir-modal',
  styleUrl: 'ir-modal.css',
})
export class IrModal {
  @Prop() rightBtnActive: boolean = true;
  @Prop() leftBtnActive: boolean = true;

  @Prop() rightBtnText: string = 'Confirm';
  @Prop() leftBtnText: string = 'Close';

  @Prop() rightBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';
  @Prop() leftBtnColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'secondary';

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
  @Event() cancelModal: EventEmitter<any>;

  @Listen('clickHanlder')
  btnClickHandler(event: CustomEvent) {
    let target = event.target as HTMLInputElement;
    let name = target.name;

    if (name === this.leftBtnText) {
      this.confirmModal.emit();
      this.closeModal();
    } else if (name === this.rightBtnText) {
      this.cancelModal.emit();
      this.closeModal();
    }
  }

  @Prop({ reflect: true }) item: any = {};

  confirmClose() {
    console.log('confirmClose');
    this.confirmModal.emit();
    this.confirmModal.emit(this.item);
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
              {this.leftBtnActive && (
                <ir-button btn_color={this.leftBtnColor} btn_block name={this.leftBtnText}>
                  {this.leftBtnText}
                </ir-button>
              )}
              {this.rightBtnActive && (
                <ir-button btn_color={this.rightBtnColor} btn_block name={this.rightBtnText}>
                  {this.rightBtnText}
                </ir-button>
              )}
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}
