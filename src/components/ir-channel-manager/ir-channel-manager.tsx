import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ir-channel-manager',
  styleUrl: 'ir-channel-manager.css',
})
export class IrChannelManager {
  @Prop({ reflect: true }) dropdownData: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  } = {
    name: 'action',
    icon: '',
    children: [
      {
        name: 'Edit',
        icon: 'ft-edit',
      },
      {
        name: 'Delete',
        icon: 'ft-trash',
      },
      {
        name: 'Disable',
        icon: 'ft-trash',
      },
    ],
  };

  render() {
    return [
      <div id="container">
        <div class="card">
          {/* <!-- Top bar --> */}
          <div class="card-head">
            <div class="input-group input-group-sm">
              <input type="text" class="form-control border-light" placeholder="Search" />
              <div class="input-group-append">
                <button class="btn border-light btn-sm bg-white" type="button">
                  <ir-icon icon="ft-filter"></ir-icon> Advenced Seach
                </button>
              </div>
              <button class="ml-1 btn btn-primary btn-sm openSidebar">Create</button>
            </div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-3 p-1 section-title">
                  Title <ir-icon icon="la la-unsorted"></ir-icon>
                </div>
                <div class="col-3 p-1 section-title">
                  Channel <ir-icon icon="la la-unsorted"></ir-icon>
                </div>
                <div class="col-3 p-1 section-title">
                  Status <ir-icon icon="la la-unsorted"></ir-icon>
                </div>
                <div class="col-3 p-1 section-title">
                  Actions <ir-icon icon="la la-unsorted"></ir-icon>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End of top bar --> */}

          {/* <!-- empty state -->*/}
          {/* <!-- <div class="cardBody">
        <div class="emptyBody">
          <img
            src="./my-assets/5058446.png"
            style="width: 100px; height: auto" />
          <p class="font-size-small">
            You don't have any channels yet.<br />
            It's a good time to create
            <a class="text-primary openSidebar">new</a>
          </p>
          </div>
        </div>   --> */}
          {/*<!-- End of empty state --> */}

          {/* <!-- List of items --> */}
          <div>
            <div class="container-fluid">
              <div class="row">
                <div class="col-12 item-info">
                  <div class="row">
                    <div class="col-3 p-1">Title</div>
                    <div class="col-3 p-1">Channel</div>
                    <div class="col-3 p-1">Status</div>
                    <div class="col-3 ">
                      <ir-dropdown id="action" data={this.dropdownData}></ir-dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- End of list of items --> */}
        </div>
      </div>,
      <ir-sidebar side="right" class="font-size-small">
        {/* <!-- sidebar top bar  --> */}
        <div class="container pt-1">
          <h5 class="font-weight-bold">Create/Edit Channel</h5>
        </div>
        <ul class="list-group list-group-horizontal mb-2">
          <li class="active">
            <a class="" data-mdb-ripple-color="dark">
              General Settings
            </a>
          </li>
          <li class="">
            <a class="" data-mdb-ripple-color="dark">
              Mapping
            </a>
          </li>
          <li class="">
            <a class="" data-mdb-ripple-color="dark">
              Channel Settings
            </a>
          </li>
        </ul>
        {/* <!-- sidebar top bar end --> */}

        {/* <!-- sidebar general settings  --> */}

        {/* <div class="General Settings">
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
  </div>  */}

        {/* <!-- sidebar general settings end --> */}

        {/* <!-- sidebar mapping --> */}

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

        {/* <!-- sidebar mapping end --> */}

        <div class="btn-position">
          <button type="button" class="btn btn-primary btn-sm btn-block">
            Save
          </button>
        </div>
      </ir-sidebar>,

      <ir-modal>
        {/* <!-- modal content --> */}
        <div class="row">
          <div class="col-2 d-flex justify-content-center ">
            <ir-icon icon="ft-alert-circle warning h1"></ir-icon>
          </div>
          <div class="col-10">
            <div class="font-weight-bold">Exit without saving?</div>
            <br />
            <div class="font-size-small">All unsaved changes will be lost.</div>
          </div>
        </div>

        {/* <!-- end modal content --> */}
      </ir-modal>,
    ];
  }
}
