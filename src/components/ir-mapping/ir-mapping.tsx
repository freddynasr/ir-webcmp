import { Component, h, State, Event, EventEmitter, Method, Prop } from '@stencil/core';
import { mapRoom, hostRoom } from '../../data';

@Component({
  tag: 'ir-mapping',
})
export class IrMapping {
  @State() hostRoom: any = hostRoom;
  @State() mapped: any = [];
  @State() selected: any = []
  @Event() sendMappingToParent: EventEmitter;
  @Prop()  map: any = {}



  
  _onSelectMap(item, object) {
    const mapped = JSON.parse(object)
    const body = {
      itemId: item.id,
      mappedId: mapped.id,
      services: mapped.services,
    }
    if (this.selected.length >= 0) {
      const index = this.selected.findIndex(selected => selected.itemId === item.id);
      if (index !== -1) {
        this.selected[index] = body;
      } else {
        this.selected = [...this.selected, body];
      }
    }

    console.log('this.selected', this.selected);
  }

  _onSelectService(item){
    if (this.mapped.length >= 0) {
      const index = this.mapped.findIndex(mapped => mapped.itemId === item.itemId);
      if (index !== -1) {
        this.mapped[index] = item;
      } else {
        this.mapped = [...this.mapped, item];
      }
    }
  }

  @Method()
  async _onSaveMapping() {
    this.sendMappingToParent.emit(this.mapped);
  }


  _renderMapping(item) {
    // Get the services from the selected and compare with the item.id
    // If the item.id is in the selected, then show the mapped services
    const mapped = this.selected.find(selected => selected.itemId === item.id);
    
    return (
      <div class="col-12 mb-1">
        <div class="row mb-1">
          <div class="col-6 d-flex justify-content-between align-items-center">
            {item.title}<ir-icon icon="la la-long-arrow-right"></ir-icon>
          </div>
          <div class="col-6">
            <select class="form-control form-control-sm"
              onChange={(event: any) => this._onSelectMap(item, event.target.value)}>
             
              <option  value="">Select Room</option>
            {mapRoom
                  .map(mapped => {
                     // get the itemId from the map.mapping
                     if (this.map.mapping !== undefined) {
                    const mappedId =  this.map.mapping.find(mapping => mapping.itemId === item.id);
                    // if the mappedId is not undefined, then show the mappedId
                    if (mappedId !== undefined) {
                      return (
                        <option value={JSON.stringify(mapped)} selected>
                          {mapped.name}
                        </option>
                      );
                    }
                  } else {
                    // else show the mapped
                    return (
                      <option value={JSON.stringify(mapped)}>
                        {mapped.name}
                      </option>
                    );
                  }
                  })}

            </select>
          </div>
        </div>
        <div class="col-12 mb-1">
          <div class="row mb-1">
            <div class="col-6 d-flex justify-content-between align-items-center">
              <div>
                {item.description}
                <ir-icon icon="ft-user"></ir-icon> {item.number_of_people}
              </div>
              <ir-icon icon="la la-long-arrow-right"></ir-icon>
            </div>
            {}
            <div class="col-6">
              <select class="form-control form-control-sm" onChange={(event: any) => {
                mapped.selectedService = event.target.value;
                this._onSelectService(mapped)
              }
              }>
                {/* Display only the values that are not in the mapped array by comparing the values / ids */}
                <option  value="">Select Service</option>
                {mapped && mapped.services.map(service => (
                  <option value={service.id}>{service.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    console.log("this.map", this.map)
    return (
      <div class="Mapping">
        <div class="d-flex justify-content-end align-items-center">
          <a class="text-primary">Refresh</a>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 mb-1">
              <div class="row ">
                <div class="col-6 d-flex justify-content-between align-items-center font-weight-bold">
                  Iglooroom<ir-icon icon="la la-long-arrow-right"></ir-icon>
                </div>
                <div class="col-6 font-weight-bold">Channel Manager</div>
              </div>
            </div>
            {this.hostRoom.map(item => this._renderMapping(item))}
          </div>
        </div>
      </div>
    );
  }
}
