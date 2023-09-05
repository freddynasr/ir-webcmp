import { Component, Listen, h } from '@stencil/core';

@Component({
  tag: 'ir-booking-details',
  styleUrl: 'ir-booking-details.css',
})
export class IrBookingDetails {
  openEditSidebar() {
    const sidebar: any = document.querySelector('ir-sidebar#editGuestInfo');
    sidebar.open = true;
  }
  selectData = [
    { value: '1', text: 'One' },
    { value: '2', text: 'Two' },
    { value: '3', text: 'Three' },
  ];
  @Listen('irSidebarToggle')
  handleSidebarToggle() {
    const sidebar: any = document.querySelector('ir-sidebar#editGuestInfo');
    sidebar.open = false;
  }

  render() {
    return [
      <div class="fluid-container d-flex justify-content-between pt-1 mr-2 ml-2">
        <div class="d-flex align-items-end">
          <div class="font-size-large sm-padding-right">Booking#00126335</div>@ 9-Aug-2022 01:00 PM
        </div>
        <div class="d-flex align-items-center">
          <span class="confirmed btn-sm mr-2">Confirmed</span>
          <ir-select id="update-status" size="sm" label-available="false" data={this.selectData} textSize="sm" class="sm-padding-right"></ir-select>
          <ir-button icon="" id="update-status-btn" size="sm" text="Update"></ir-button>
          <ir-icon icon="ft-file-text h1 primary-blue ml-1 pointer"></ir-icon>
          <ir-icon icon="ft-printer h1 primary-blue ml-1 pointer"></ir-icon>
          <ir-icon icon="ft-trash-2 h1 danger ml-1 pointer"></ir-icon>
          <ir-icon icon="ft-list h1 primary-blue ml-1 pointer"></ir-icon>
        </div>
      </div>,
      <div class="fluid-container m-1">
        <div class="row m-0">
          <div class="col-7 pl-0">
            <div class="card">
              <div class="p-1">
                Theo Sunset Bay hotel
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Source:</strong>CH-BDC-37973903
                </div>
                <div class="sm-padding-right sm-padding-top">
                  <strong class="sm-padding-right">Booked by:</strong>
                  Inese Krjuckova
                  <ir-icon icon="ft-edit primary-blue pointer" class="sm-padding-left" onClick={() => this.openEditSidebar()}></ir-icon>
                </div>
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Phone:</strong>+353-587101225
                </div>
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Email:</strong>inesekrjuckova@hotmail.com
                </div>
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Address:</strong>Thrules, Street 55, Ireland
                </div>
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Arrival Time:</strong>2 PM - 4 PM
                </div>
                <div class="sm-padding-top">
                  <strong class="sm-padding-right">Notes:</strong>
                  You have a booker that would like free parking (based on availability)
                  <div>An extra bed/crib was requested</div>
                  <div>Meal Plan: Breakfast is included in the room rate</div>
                  <div>Payment Collect: hotel collect</div>
                </div>
              </div>
            </div>
            <div class="font-size-large d-flex justify-content-between align-items-center ml-1 mb-1">
              Jul 12, 2023 - Jul 23 - 2023 (3 nights - 2 rooms)
              <ir-icon icon="ft-plus-square h3 primary-blue pointer"></ir-icon>
            </div>
            <div class="card">
              <div class="p-1 d-flex">
                <ir-icon
                  id="drawer-icon"
                  icon="ft-eye h2 primary-blue"
                  data-toggle="collapse"
                  data-target="#myCollapse"
                  aria-expanded="false"
                  aria-controls="myCollapse"
                  class="sm-padding-right pointer"
                ></ir-icon>
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                    <div>
                      <strong>Double or Twin Room </strong> All-inclusive - Non-refundable - Spa package
                    </div>
                    <div>
                      <span class="mr-1">$165.00</span>
                      <ir-icon icon="ft-edit primary-blue h4 pointer"></ir-icon>
                      <ir-icon icon="ft-trash-2 danger h4 pointer"></ir-icon>
                    </div>
                  </div>
                  <div>
                    <span class="mr-1">Elizabeth Vornworthski:</span>
                    <span> 2 Adults</span>
                    <span> - 1 Child</span>
                  </div>
                  <div class="d-flex align-items-center">
                    <span>Sep 12, 2022 - Sep 16 2022 </span>
                    <span class="light-blue-bg mr-2 ml-1">204</span>
                    <ir-button icon="" class="mr-1" btn_color="info" size="sm" text="Check in"></ir-button>
                    <ir-button icon="" btn_color="info" size="sm" text="Check out"></ir-button>
                  </div>
                  <div class="collapse" id="myCollapse">
                    <div class="d-flex">
                      <div class=" sm-padding-top">
                        <strong class="sm-padding-right">Rate BreakDown:</strong>
                      </div>
                      <div>
                        <div>21/07 Fri $55.00</div>
                        <div>22/07 Sat $55.00</div>
                        <div>23/07 Sun $55.00</div>
                      </div>
                    </div>
                    <div class=" sm-padding-top">
                      <strong class="sm-padding-right">Cancelation:</strong>
                    </div>
                    <div class=" sm-padding-top">
                      <strong class="sm-padding-right">Payment:</strong>
                    </div>
                    <div class="sm-padding-top">
                      <strong class="sm-padding-right">Smoking Preference:</strong>
                    </div>
                    <div class=" sm-padding-top">
                      <strong class="sm-padding-right">Meal Plan:</strong>
                    </div>
                    <div class=" sm-padding-top">
                      <strong class="sm-padding-right">Special rate:</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-5 pr-0">
            <div class="card">
              <div class="p-1">
                <div class="mb-2 h4">
                  Due Balance: <span class="danger font-weight-bold">$40.00</span>
                </div>
                <div>
                  <strong>Booking Guarantee</strong>
                  <div>
                    Card: <span>1234 5678 9123</span> Expiry <span> 1/2027</span>
                  </div>
                  <div>
                    Name: <span>Rony Rizk</span> - CVC: <span> 123</span>
                  </div>
                </div>
                <div class="mt-2">
                  <div>
                    <strong>Payment due dates</strong>
                    <div class="d-flex justify-content-between">
                      <span>Aug 09 2023</span>
                      <span>Prepayment</span>
                      <span>$60.00</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>Aug 20 2023</span>
                      <span>Cancelation</span>
                      <span>$100.00</span>
                    </div>
                    <div class="d-flex justify-content-between">
                      <span>Aug 25 2023</span>
                      <span>Cancelation</span>
                      <span>$25.00</span>
                    </div>
                  </div>
                </div>
                <div class="mt-2">
                  <strong>Payments</strong>
                  <div class="fluid-container border-top-dark border-left-dark font-size-small">
                    <div class="row m-0">
                      <div class="col-3 font-weight-bold border-right-dark border-bottom-dark p-0">
                        <span class="sm-padding-left">Date</span>
                      </div>
                      <div class="col-3 font-weight-bold border-right-dark border-bottom-dark p-0">
                        <span class="sm-padding-left">Amount</span>
                      </div>
                      <div class="col-3 font-weight-bold border-right-dark border-bottom-dark p-0 sm-padding-left">
                        <span class="sm-padding-left">Designation</span>
                      </div>
                      <div class="col-3 text-center border-right-dark p-0 border-bottom-dark">
                        <ir-icon icon="ft-plus font-weight-bold primary-blue pointer p-0"></ir-icon>
                      </div>
                    </div>
                    <div class="row m-0">
                      <div class="col-9 p-0">
                        <div class="row m-0">
                          <div class="col-4 border-right-dark p-0 border-bottom-dark">
                            <span class="sm-padding-left">Aug 09 2023</span>
                          </div>
                          <div class="col-4 border-right-dark d-flex p-0 justify-content-end border-bottom-dark sm-padding-right">
                            <span class="sm-padding-right">$60.00</span>
                          </div>
                          <div class="col-4 border-right-dark p-0 border-bottom-dark sm-padding-left">
                            <span class="sm-padding-left">MGPS</span>
                          </div>
                          <div class="col-12 border-right-dark p-0 border-bottom-dark sm-padding-left">
                            <span class="sm-padding-left">1233243 3423 24 3</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-3 d-flex align-items-center justify-content-between border-right-dark border-bottom-dark">
                        <ir-icon icon="ft-save primary-blue h5 pointer"></ir-icon>
                        <ir-icon icon="ft-trash-2 danger h5 pointer"></ir-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <ir-sidebar side={'right'} id="editGuestInfo">
        <ir-guest-info></ir-guest-info>
      </ir-sidebar>,
    ];
  }
}
