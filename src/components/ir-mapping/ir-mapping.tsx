import { Component, h, State } from '@stencil/core';
import { mapRoom, hostRoom } from '../../data';

@Component({
  tag: 'ir-mapping',
})
export class IrMapping {

  @State() hostRoom: any = hostRoom;
  @State() mapped: any = [];

  // OLD
  // {/* <div class="col-12 mb-1">
  //             <div class="row mb-1">
  //               <div class="col-6 d-flex justify-content-between align-items-center">
  //                 Room Type 1<ir-icon icon="la la-long-arrow-right"></ir-icon>
  //               </div>
  //               <div class="col-6">
  //                 <select class="form-control form-control-sm"></select>
  //               </div>
  //             </div>
              
  //           </div>
  //           <div class="col-12 mb-1">
  //             <div class="row mb-1">
  //               <div class="col-6 d-flex justify-content-between align-items-center">
  //                 Room Type 1<ir-icon icon="la la-long-arrow-right"></ir-icon>
  //               </div>
  //               <div class="col-6">
  //                 <div class="text-danger">Not Mapped</div>
  //               </div>
  //             </div>
  //             <div class="col-12">
  //               <div class="row ">
  //                 <div class="col-6 d-flex justify-content-between align-items-center">
  //                   <div>
  //                     Service Type<ir-icon icon="ft-user"></ir-icon>2
  //                   </div>
  //                   <ir-icon icon="la la-long-arrow-right"></ir-icon>
  //                 </div>
  //                 <div class="col-6 d-flex justify-content-between">
  //                   <div class="text-primary">
  //                     Premium Suites <ir-icon icon="ft-user"></ir-icon>2
  //                   </div>
  //                   <ir-icon icon="text-primary ft-trash"></ir-icon>
  //                 </div>
  //               </div>
  //             </div>
  //           </div> */}


  _onSelectMap(host, mapped) {
    // Add the mapped to the mapped array
    console.log(host, mapped);
    this.mapped = [...this.mapped, mapped];

  }



  _renderMapping(item) {

    
    return (
      <div class="col-12">
      <div class="row ">
        <div class="col-6 d-flex justify-content-between align-items-center">
          <div>
            {item.description}<ir-icon icon="ft-user"></ir-icon> {item.number_of_people}
          </div>
          <ir-icon icon="la la-long-arrow-right"></ir-icon>
        </div>
        <div class="col-6">
          <select class="form-control form-control-sm"
            onChange={(event: any) => this._onSelectMap(item, event.target.value)}
          >
            {/* Display only the values that are not in the mapped array by comparing the values / ids */}
            {mapRoom.filter((mapped) => this.mapped.includes(mapped.id)).map((mapped) =>
              <option
               value={mapped.id}>{mapped.name}</option>
            )}

          </select>
        </div>
      </div>
    </div>
    )
  }

  render() {
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
            </div>
              {this.hostRoom.map((item) => this._renderMapping(item))}
          </div>
        </div>
    );
  }
}
