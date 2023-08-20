import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-input-channel',
})
export class IrInputChannel {

  @Prop() label = ''
  @Prop() placeholder = ''
    @Prop() value = ''

    @Event() sendValue: EventEmitter;

    handleSelectChange(event: Event) {
        const selectedValue = (event.target as HTMLSelectElement).value;
        this.sendValue.emit(selectedValue);
    }


    





   
      

  render() {
    return (
    <div class="col-12 pb-1">
          <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-end p-0 m-0">
              <label class="m-0 pr-1">{this.label}</label>
            </div>
            <div class="col-8 p-0">
              <input type="text" class="form-control form-control-sm" 
              placeholder={this.placeholder} 
              value={this.value}
                onInput={(e: any) => this.sendValue.emit(e.target.value)}  
                />
            </div>
          </div>
        </div> 
    )
  }
}
