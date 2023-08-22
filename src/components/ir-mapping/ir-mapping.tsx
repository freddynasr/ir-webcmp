import { Component, h, State, Event, EventEmitter, Method, Prop, Watch } from '@stencil/core';
import { mapRoom, hostRoom } from '../../data';

@Component({
  tag: 'ir-mapping',
})
export class IrMapping {
  @State() mapRoom: any = mapRoom;
  @State() hostRoom: any = hostRoom;
  @State() mapped: any = [];
  @State() selected: any = [];

  @Event() sendMappingToParent: EventEmitter;
  @Prop() map: any = {};

  @State() mapState: ('notMapped' | 'mapping' | 'mapped')[];

  @State() selectedMap: any = [];

  @Watch('map')
  mapChangedHandler(newValue: any) {
    this.mapState = new Array(newValue.mapping.length).fill('notMapped');
    // console.log('this.mapState', this.mapState);
  }

  _onSelectMap(item, object) {
    const mapped = JSON.parse(object);
    const body = {
      itemId: item.id,
      mappedId: mapped.id,
      services: mapped.services,
    };
    if (this.selected.length >= 0) {
      const index = this.selected.findIndex(selected => selected.itemId === item.id);
      if (index !== -1) {
        this.selected[index] = body;
      } else {
        this.selected = [...this.selected, body];
      }
    }

    // console.log('this.selected', this.selected);
  }

  _onSelectService(item) {
    console.log('item', item);
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

  componentWillLoad() {
    this.mapState = new Array(hostRoom.length).fill('notMapped');
    if (this.map.mapping !== undefined) {
      this.selected = this.map.mapping;
      this.mapState = this.map.mapping.map(map => {
        const index = this.mapRoom.findIndex(room => room.id === map.mappedId);
        if (index !== -1) {
          return 'mapped';
        }
      });
    }
   
  }

  _deleteMapping(item) {
    // console.log('item', item);
    const index = this.selected.findIndex(selected => selected.itemId === item.itemId);
    // console.log('index', index);
    if (index !== -1) {
      this.selected = [...this.selected.slice(0, index), ...this.selected.slice(index + 1)];
    }
  }


  _getMapNameFromId(itemId) {
    console.log(itemId)
    if (this.selected.length === 0) {
      return;
    }
    // Get object from this.mapped that has itemId === itemId then return the name
    const mapped = this.selected.find(map => map.itemId === itemId)
    if (!mapped || mapped == undefined) {
      return
    }
    const toBeCompared = mapped.mappedId;
    const map = this.mapRoom.find(map => map.id === toBeCompared);
    return [map.name, map.number_of_people]
  }






  _renderMapping(item, mapState, index) {
    // Get the services from the selected and compare with the item.id
    // If the item.id is in the selected, then show the mapped services
    const mapped = this.selected.find(selected => selected.itemId === item.id)
    const remainingRoom = this.mapRoom.filter(map => {
      const index = this.selected.findIndex(selected => selected.mappedId === map.id);
      if (index === -1) {
        return map;
      }
    });

    // this.selected contains a property called selectedService which is a string of service id. 
    // the mapped should be than an array of services with no service that is in the selectedService
    const mappedServices = mapped ? mapped.services : [];

    
    
   
  
    return (
      <div class="col-12 mb-1">
        <div class="row mb-1">
          <div class="col-6 d-flex justify-content-between align-items-center">
            {item.title}
            <ir-icon icon="la la-long-arrow-right"></ir-icon>
          </div>
          <div class={`col-6 `}>
            {mapState === 'notMapped' ? (
              <div
                class="text-danger"
                onClick={() => {
                  const select = document.querySelector(`select[id="${index}"]`) as HTMLSelectElement;
                  this.mapState = [...this.mapState.slice(0, index), 'mapping', ...this.mapState.slice(index + 1)];
                 // console.log('this.mapState', this.mapState);
                  setTimeout(() => {
                    select.click();
                  }, 100);
                }}
              >
                Not mapped
              </div>
            ) : mapState === 'mapping' ? (
              <select
                id={index}
                class="form-control form-control-sm"
                onChange={(event: any) => {
                  this._onSelectMap(item, event.target.value);
                  if (event.target.value !== '') {
                    this.mapState = [...this.mapState.slice(0, index), 'mapped', ...this.mapState.slice(index + 1)];
                  }
                }}
              >
                <option value="">Select Room</option>
                {remainingRoom.map(mapped => {
                  // get the itemId from the map.mapping
                  if (this.map.mapping !== undefined) {
                    const index = this.map.mapping.findIndex(mapping => mapping.itemId === item.id);
                    if (index !== -1) {
                      // if the itemId is in the map.mapping, then show the mapped services
                      return (
                        <option value={JSON.stringify(mapped)} selected={mapped.id === this.map.mapping[index].mappedId}>
                          {mapped.name}
                        </option>
                      );
                    } else {
                      // if the itemId is not in the map.mapping, then show the mapped services
                      return <option value={JSON.stringify(mapped)}>{mapped.name}</option>;
                    }
                  } else {
                    // if the map.mapping is undefined, then show the mapped services
                    return <option value={JSON.stringify(mapped)}>{mapped.name}</option>;
                  }
                })}
              </select>
            ) : (
              <div class="d-flex flex-grow-1 justify-content-between">
                <div class="text-primary">
                  {/* {this._getMapNameFromId(item.id)[0]} */}
                   {/* <ir-icon icon="ft-user"></ir-icon> {this._getMapNameFromId(item.id)[1]} */}
                </div>
                <ir-icon
                  icon="text-primary ft-trash"
                  onClick={() => {
                    this._deleteMapping(item);
                    this.mapState = [...this.mapState.slice(0, index), 'notMapped', ...this.mapState.slice(index + 1)];
                  }}
                ></ir-icon>
              </div>
            )}
          </div>
        </div>
        <div class="col-12 mb-1">
          {item.ratePlans && item.ratePlans.length && item.ratePlans.map(ratePlan => (
          <div class="row mb-1">
            <div class="col-6 d-flex justify-content-between align-items-center">
              <div>
                {ratePlan.name}
                <ir-icon icon="ft-user"></ir-icon> {item.number_of_people}
              </div>
              <ir-icon icon="la la-long-arrow-right"></ir-icon>
            </div>
            {}
            <div class="col-6 pr-0">
              <select
                class="form-control form-control-sm"
                onChange={(event: any) => {
                  mapped.selectedService = event.target.value;
                  this._onSelectService(mapped);
                }}
              >

                {/* Display only the values that are not in the mapped array by comparing the values / ids */}
                <option value="">Select Plan</option>
                {mappedServices && mappedServices.map(service => {
                    console.log('service', service)
                    console.log('mappedServices', mapped)
                    if (service.id == mapped.selectedService.id) {
                      console.log('Equal')
                      return <option value={JSON.stringify(service)}
                        >{service.name}</option> 
                    } else {
                      console.log('not equal')
                      return <option value={JSON.stringify(service)}
                        >{service.name}</option> 
                    }
                  })}
              </select>
            </div>
          </div>
          ))}
        </div>
      </div>
    );
  }
  render() {
    
    // console.log('this.selected', this.selected);

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
            {this.hostRoom.map((item, index) => this._renderMapping(item, this.mapState[index], index))}
          </div>
        </div>
      </div>
    );
  }
}
