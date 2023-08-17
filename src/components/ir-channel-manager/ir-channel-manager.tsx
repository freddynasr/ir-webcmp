import { Component, h } from '@stencil/core';

@Component({
  tag: 'ir-channel-manager',
  styleUrl: 'ir-channel-manager.css',
})
export class IrChannelManager {
  render() {
    return [
      <div id="container">
        <div class="card">
          <div class="card-head">
            {/* <div class="input-group input-group-sm">
            <div class="input-group-prepend">
          <span class="input-group-text border-none" id="basic-addon1"
            ><ir-icon icon="ft-search"></ir-icon
          ></span>
        </div> */}

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
        {/* <div class="cardBody">
          <div class="emptyBody">
            <img
              src="./my-assets/5058446.png"
              style="width: 100px; height: auto" />
            <p class="font-size-small">
              You don't have any channels yet.<br />
              It's a good time to create
              <a class="text-primary openSidebar">new</a>
            </p>
          </div>  */}
        <div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 item-info">
                <div class="row">
                  <div class="col-3 p-1">Title</div>
                  <div class="col-3 p-1">Channel</div>
                  <div class="col-3 p-1">Status</div>
                  <div class="col-3 p-1">
                    <a class="text-primary">
                      Actions <ir-icon icon="ft-chevron-down"></ir-icon>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <ir-sidebar side="right" class="font-size-small" open>
        <div class="container pt-1">
          <h5 class="font-weight-bold">Create/Edit Channel</h5>
        </div>
        <ul class="list-group list-group-horizontal mb-2">
          <li class="active">
            <a class="">General Settings</a>
          </li>
          <li class="">
            <a class="">Mapping</a>
          </li>
          <li class="">
            <a class="">Channel Settings</a>
          </li>
        </ul>

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
      </div>
    </div>
  </div>  */}

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
                  Iglooroom<ir-icon icon="la la-long-arrow-right"></ir-icon>
                </div>
                <div class="col-6">
                  <select class="form-control form-control-sm"></select>
                </div>
              </div>
              <div class="col-12">
                <div class="row ">
                  <div class="col-6 d-flex justify-content-between align-items-center">
                    <div>
                      Iglooroom <ir-icon icon="ft-user"></ir-icon>2
                    </div>
                    <ir-icon icon="la la-long-arrow-right"></ir-icon>
                  </div>
                  <div class="col-6">
                    <select class="form-control form-control-sm"></select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="btn-position">
          <button type="button" class="btn btn-primary btn-sm btn-block">
            Save
          </button>
        </div>
      </ir-sidebar>,
    ];
  }
}
