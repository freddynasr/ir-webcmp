import { Component, h, State, Event, EventEmitter, Method, Prop, Watch } from '@stencil/core';
import { mapRoom, hostRoom } from '../../../sample/channel/data';

@Component({
  tag: 'ir-mapping',
})
export class IrMapping {
  @State() mapRoom: any = mapRoom;
  @State() hostRoom: any = hostRoom;
  @State() mapped: any = [];
  @State() mappingWithServices: any = [];

  @Event() sendMappingToParent: EventEmitter;
  @Prop() map: any = {};

  @State() mapState: { room: 'notMapped' | 'mapping' | 'mapped'; plans: { plan: 'notMapped' | 'mapping' | 'mapped'; selectedPlan?: any }[] }[];

  @State() selectedMap: any = [];

  @Watch('map')
  mapChangedHandler(newValue: any) {
    this.mapState = new Array(newValue.mapping.length).fill('notMapped');
    // console.log('this.mapState', this.mapState);
  }

  @Method()
async _onSaveMapping() {
  // Check if all map elements have selected plans
  const allSelected = this.mapped.every(map => map.selectedPlans !== undefined);

  if (allSelected) {
    // Emit the event once if all have selected plans
    this.sendMappingToParent.emit(this.mapped);
  } else {
    alert('Please select all the rate plans');
  }
}

  componentWillLoad() {
    console.log(this.map.mapping);
    this.mapped = this.map.mapping || [];
    let temp = this.hostRoom.map(room => ({
      room: 'notMapped',
      plans: room.ratePlans.map(() => ({ plan: 'notMapped', selectedPlan: '' })),
    }));
    console.log(temp);
    if (this.map.mapping != undefined) {
      this.map.mapping.forEach(map => {
        console.log(map, map.mappedRoomID);
        const index = this.hostRoom.findIndex(room => room.id === map.mappedRoomID);
        if (index !== -1) {
          map.selectedPlans.forEach(plan => {
            const _index = this.mapRoom[index].services.findIndex(ratePlan => {
              return ratePlan.id === plan.id;
            });
            console.log(_index);
            if (_index !== -1) {
              temp[index] = {
                room: 'mapped',
                plans: [...temp[index].plans.slice(0, _index), { plan: 'mapped', selectedPlan: plan.id }, ...temp[index].plans.slice(_index + 1)],
              };
            } else {
              temp[index] = {
                room: 'mapped',
                plans: [...temp[index].plans.slice(0, _index), { plan: 'notMapped', selectedPlan: '' }, ...temp[index].plans.slice(_index + 1)],
              };
            }
          });
        }
      });
    }

    this.mapState = temp;
    console.log(this.mapState);
  }

  _onSelectMap(initialRoom, object) {
    const parsedObj = JSON.parse(object);

    const obj = {
      mappingId: this.mapped.length + 1,
      initialRoomID: initialRoom.id,
      mappedRoomID: parsedObj.id,
      availableRatePlans: parsedObj.services,
    };

    if (this.mapped.length == 0) {
      this.mapped = [obj];
    } else {
      const index = this.mapped.findIndex(map => initialRoom.id == map.initialRoomID && map.mappedRoomID == parsedObj.id);
      if (index == 1) {
        this.mapped[index] = obj;
      } else {
        this.mapped = [...this.mapped, obj];
      }
    }

    // const mapped = JSON.parse(object);
    // const body = {
    //   itemId: item.id,
    //   mappedId: mapped.id,
    //   services: mapped.services,
    // };
    // if (this.selected.length >= 0) {
    //   const index = this.selected.findIndex(selected => selected.itemId === item.id);
    //   if (index !== -1) {
    //     this.selected[index] = body;
    //   } else {
    //     this.selected = [...this.selected, body];
    //   }
  }

  //   // console.log('this.selected', this.selected);
  // }

  _onSelectRatePlan(i) {
    const mappingId = i.mappingId;

    this.mapped = this.mapped.map(item => {
      if (item.mappingId === mappingId) {
        const selectedPlans = item.selectedPlans || [];
        // Get the ratePlan from the availableService using the selectedPlan
        const ratePlan = i.availableRatePlans.find(ratePlan => ratePlan.id === i.selectedPlan);
        console.log(ratePlan);
        return {
          ...item,
          selectedPlans: [...selectedPlans, ratePlan],
        };
      }
      return item;
    });
  }

  _deleteMapping(item) {
    // Find the itemId in this.selected that has item.id and remove it
    console.log(item);
    const index = this.mapped.findIndex(selected => selected.initialRoomID === item.id);
    if (index !== -1) {
      this.mapped.splice(index, 1);
    }
  }

  _getMapNameFromId(itemId) {
    if (this.mapped.length === 0) {
      return;
    }
    // Get object from this.mapped that has itemId === itemId then return the name
    const mapped = this.mapped.find(map => map.initialRoomID === itemId);
    if (!mapped || mapped == undefined) {
      return;
    }
    const toBeCompared = mapped.mappedRoomID;
    const map = this.mapRoom.find(map => map.id === toBeCompared);
    return [map.name, map.number_of_people];
  }

  _deleteRatePlan(ratePlanId) {
    console.log(ratePlanId);
    console.log(this.mapped);
    // Find the object that has the same id as the ratePlanId is this.mapping.selectedPlans
    // then add it to the availableRatePlans
    this.mapped = this.mapped.map(item => {
      const index = item.selectedPlans.findIndex(plan => plan.id === ratePlanId);
      if (index !== -1) {
        const ratePlan = item.selectedPlans[index];
        item.availableRatePlans = [...item.availableRatePlans, ratePlan];
        item.selectedPlans.splice(index, 1);
      }
      return item;
    });
  }

  _getRatePlanNameFromId(ratePlanId) {
    for (let item of this.mapped) {
      for (let plan of item.selectedPlans) {
        if (plan.id === ratePlanId) {
          return plan.name;
        }
      }
    }
    // If no matching plan is found, return undefined or some default value
    return undefined;
  }

  _renderMapping(item, mapState, index) {
    // Get the services from the selected and compare with the item.id
    // If the item.id is in the selected, then show the mapped services

    let mapped = this.mapped.find(selected => selected.initialRoomID === item.id);

    const remainingRoom = this.mapRoom.filter(map => {
      const index = this.mapped.findIndex(selected => selected.mappedRoomID === map.id);
      if (index === -1) {
        return map;
      }
    });

    // get the ramining rateplan by checking the mapped and the selectedPlans
    if (mapped?.selectedPlans) {
      mapped.availableRatePlans = mapped.availableRatePlans.filter(ratePlan => {
        const isSelected = mapped.selectedPlans.includes(ratePlan);
        return !isSelected;
      });
    }

    let remainingRatePlans = [];
    if (mapped !== undefined) {
      remainingRatePlans = mapped.availableRatePlans;
    }

    return (
      <div class="col-12 mb-1">
        <div class="row mb-1">
          <div class="col-6 d-flex justify-content-between align-items-center">
            {item.title}
            <ir-icon icon="la la-long-arrow-right"></ir-icon>
          </div>
          <div class={`col-6 `}>
            {mapState.room === 'notMapped' ? (
              <div
                class="text-danger"
                onClick={() => {
                  const select = document.querySelector(`select[id="${index}"]`) as HTMLSelectElement;
                  // this.mapState = [...this.mapState.slice(0, index), 'mapping', ...this.mapState.slice(index + 1)];
                  this.mapState = [
                    ...this.mapState.slice(0, index),
                    {
                      room: 'mapping',
                      plans: new Array(item.ratePlans.length).fill({
                        plan: 'notMapped',
                        selectedPlan: '',
                      }),
                    },
                    ...this.mapState.slice(index + 1),
                  ];
                  // console.log('this.mapState', this.mapState);
                  setTimeout(() => {
                    select.click();
                  }, 100);
                }}
              >
                Not mapped
              </div>
            ) : mapState.room === 'mapping' ? (
              <select
                id={index}
                class="form-control form-control-sm"
                onChange={(event: any) => {
                  this._onSelectMap(item, event.target.value);
                  if (event.target.value !== '') {
                    this.mapState = [
                      ...this.mapState.slice(0, index),
                      {
                        room: 'mapped',
                        plans: new Array(item.ratePlans.length).fill({
                          plan: 'notMapped',
                          selectedPlan: '',
                        }),
                      },
                      ...this.mapState.slice(index + 1),
                    ];
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
                  {this._getMapNameFromId(item.id)[0]}
                  <ir-icon icon="ft-user"></ir-icon> {this._getMapNameFromId(item.id)[1]}
                </div>
                <ir-icon
                  icon="text-primary ft-trash"
                  onClick={() => {
                    this._deleteMapping(item);
                    this.mapState = [
                      ...this.mapState.slice(0, index),
                      { room: 'notMapped', plans: new Array(item.ratePlans.length).fill('notMapped') },
                      ...this.mapState.slice(index + 1),
                    ];
                  }}
                ></ir-icon>
              </div>
            )}
          </div>
        </div>
        <div class="col-12 mb-1">
          {item.ratePlans &&
            item.ratePlans.length &&
            item.ratePlans.map((ratePlan, _index) => (
              <div class="row mb-1">
                <div class="col-6 d-flex justify-content-between align-items-center">
                  <div>
                    {ratePlan.name}
                    <ir-icon icon="ft-user"></ir-icon> {item.number_of_people}
                  </div>
                  {mapState.room === 'mapped' && <ir-icon icon="la la-long-arrow-right"></ir-icon>}
                </div>

                <div class="col-6 pr-0">
                  {mapState.room === 'mapped' &&
                    (mapState.plans[_index].plan === 'notMapped' ? (
                      <div
                        class="text-danger"
                        onClick={() => {
                          const select = document.querySelector(`select[id="${index}"]`) as HTMLSelectElement;
                          // this.mapState = [...this.mapState.slice(0, index), 'mapping', ...this.mapState.slice(index + 1)];
                          this.mapState = [
                            ...this.mapState.slice(0, index),
                            { room: 'mapped', plans: [...mapState.plans.slice(0, _index), { plan: 'mapping', selectedPlan: '' }, ...mapState.plans.slice(_index + 1)] },
                            ...this.mapState.slice(index + 1),
                          ];
                          // console.log('this.mapState', this.mapState);
                          setTimeout(() => {
                            select.click();
                          }, 100);
                        }}
                      >
                        Not mapped
                      </div>
                    ) : mapState.plans[_index].plan === 'mapping' ? (
                      <select
                        class="form-control form-control-sm"
                        onChange={(event: any) => {
                          mapped.selectedPlan = event.target.value;
                          this._onSelectRatePlan(mapped);
                          if (event.target.value !== '') {
                            this.mapState = [
                              ...this.mapState.slice(0, index),
                              {
                                room: 'mapped',
                                plans: [...mapState.plans.slice(0, _index), { plan: 'mapped', selectedPlan: event.target.value }, ...mapState.plans.slice(_index + 1)],
                              },
                              ...this.mapState.slice(index + 1),
                            ];
                          }
                        }}
                      >
                        <option value="">Select Plan</option>
                        {remainingRatePlans.length > 0 &&
                          remainingRatePlans.map(plan => {
                            return <option value={plan.id}>{plan.name}</option>;
                          })}
                      </select>
                    ) : (
                      <div class="d-flex flex-grow-1 justify-content-between">
                        <div class="text-primary">
                          {this._getRatePlanNameFromId(mapState.plans[_index].selectedPlan)}
                          <ir-icon icon="ft-user"></ir-icon> {this._getMapNameFromId(item.id)[1]}
                        </div>
                        <ir-icon
                          icon="text-primary ft-trash"
                          onClick={() => {
                            this._deleteRatePlan(mapState.plans[_index].selectedPlan);
                            this.mapState = [
                              ...this.mapState.slice(0, index),
                              { room: 'mapped', plans: [...mapState.plans.slice(0, _index), { plan: 'notMapped', selectedPlan: '' }, ...mapState.plans.slice(_index + 1)] },
                              ...this.mapState.slice(index + 1),
                            ];
                          }}
                        />
                      </div>
                    ))}
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
