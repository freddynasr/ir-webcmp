import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-channel-select',
})
export class IrChannelSelect {
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() icon: boolean = false;
  @Prop() data: any[] = [];

  @Event() irSelect: EventEmitter;

  handleSelectChange(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.irSelect.emit(selectedValue);
  }

  render() {
    return (
      <div class="row mb-1">
        <div class="col-6 d-flex justify-content-between align-items-center">
          {this.label} {this.icon && <ir-icon icon="la la-long-arrow-right"></ir-icon>}
        </div>
        <div class="col-6">
          <select class="form-control form-control-sm" onChange={this.handleSelectChange.bind(this)}>
            {this.data.map((item) => (
              <option
                selected={item.value == this.placeholder}
                value={item.value}
              >
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
