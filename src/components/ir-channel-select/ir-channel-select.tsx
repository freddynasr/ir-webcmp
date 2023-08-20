import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ir-channel-select',
})
export class IrChannelSelect {

    @Prop() label: string = ' '
    @Prop() placeholder: string = ' '
    @Prop() icon: boolean = false;
    @Prop() data: any[] = [];

  render() {
    return (
       
              <div class="row mb-1">
                <div class="col-6 d-flex justify-content-between align-items-center">
                  {this.label} { this.icon && <ir-icon icon="la la-long-arrow-right"></ir-icon>}
                </div>
                <div class="col-6">
                  <select class="form-control form-control-sm" >
                    {this.data.map((item) => {  
                        return <option value={item.value}>{item.name}</option>
                    })}
                    </select>

                </div>
              </div>
    );
  }
}
