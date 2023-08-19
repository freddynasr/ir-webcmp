import { Component, h,  } from '@stencil/core';

@Component({
  tag: 'ir-general-settings',
})
export class IrGeneralSettings {


   
      

  render() {
    return [

         <div class="General Settings">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 pb-1">
          <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-end p-0 m-0">
              <label class="m-0 pr-1">Channel:</label>
            </div>
            <div class="col-8 p-0">
              <input type="text" class="form-control form-control-sm" placeholder="Channel Name" />
            </div>
          </div>
        </div>
        <div class="col-12 pb-1">
          <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-end p-0 m-0">
              <label class="m-0 pr-1">Channel:</label>
            </div>
            <div class="col-8 p-0">
              <input type="text" class="form-control form-control-sm" placeholder="Channel Name" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-1">
      <div class="text-light border-bottom-light mb-2">
        Connection Settings
      </div>
      <div class="row">
        <div class="col-12 pb-1">
          <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-end p-0 m-0">
              <label class="m-0 pr-1">Channel:</label>
            </div>
            <div class="col-8 p-0">
              <input type="text" class="form-control form-control-sm" placeholder="Channel Name" />
            </div>
          </div>
        </div>
        <div class="col-12 pb-1">
          <div class="row">
            <div class="col-4 d-flex align-items-center justify-content-end p-0 m-0">
              <label class="m-0 pr-1">Channel:</label>
            </div>
            <div class="col-8 p-0">
              <input type="text" class="form-control form-control-sm" placeholder="Channel Name" />
            </div>
          </div>
        </div>
        <div class="col-12 pb-1 ">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-8 d-flex justify-content-between align-items-center" >
              <div>
                <ir-icon icon="ft-alert-triangle warning"></ir-icon>
                <ir-icon icon="ft-check-circle success"></ir-icon> asdasd</div>
              <button class="btn btn-white border-light btn-sm text-dark">Test Connection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    ];
  }
}
