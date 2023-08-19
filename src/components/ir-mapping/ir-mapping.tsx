import { Component, h } from '@stencil/core';

@Component({
  tag: 'ir-mapping',
})
export class IrMapping {

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
            <div class="col-12 mb-1">
              <div class="row mb-1">
                <div class="col-6 d-flex justify-content-between align-items-center">
                  Room Type 1<ir-icon icon="la la-long-arrow-right"></ir-icon>
                </div>
                <div class="col-6">
                  <select class="form-control form-control-sm"></select>
                </div>
              </div>
              <div class="col-12">
                <div class="row ">
                  <div class="col-6 d-flex justify-content-between align-items-center">
                    <div>
                      Service Type<ir-icon icon="ft-user"></ir-icon>2
                    </div>
                    <ir-icon icon="la la-long-arrow-right"></ir-icon>
                  </div>
                  <div class="col-6">
                    <select class="form-control form-control-sm"></select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 mb-1">
              <div class="row mb-1">
                <div class="col-6 d-flex justify-content-between align-items-center">
                  Room Type 1<ir-icon icon="la la-long-arrow-right"></ir-icon>
                </div>
                <div class="col-6">
                  <div class="text-danger">Not Mapped</div>
                </div>
              </div>
              <div class="col-12">
                <div class="row ">
                  <div class="col-6 d-flex justify-content-between align-items-center">
                    <div>
                      Service Type<ir-icon icon="ft-user"></ir-icon>2
                    </div>
                    <ir-icon icon="la la-long-arrow-right"></ir-icon>
                  </div>
                  <div class="col-6 d-flex justify-content-between">
                    <div class="text-primary">
                      Premium Suites <ir-icon icon="ft-user"></ir-icon>2
                    </div>
                    <ir-icon icon="text-primary ft-trash"></ir-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
