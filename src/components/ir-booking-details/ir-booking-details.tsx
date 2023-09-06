import { Component, Listen, h, Prop, Watch } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'ir-booking-details',
  styleUrl: 'ir-booking-details.css',
})
export class IrBookingDetails {

  @Prop() bookingDetails: any;
  @Prop() bookingStatuses: any;
  @Prop() foodPackages: any;
  @Prop() arrivalTimes: any;

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

  @Watch('bookingDetails')
  watchHandler(newValue: any, oldValue: any) {
    console.log('The new value of bookingDetails is: ', newValue);
    console.log('The old value of bookingDetails is: ', oldValue);
  }

  _formatTime(hour: string, minute: string) {
    // format them as AM/PM using moment.js
    return moment(`${hour}:${minute}`, 'HH:mm').format('hh:mm A');
    
  }

  _formatDate(date: string) {
    // Month Name 3 letters, Day, Year
    return moment(date).format('MMM DD, YYYY');
  }

  _calculateNights(fromDate: string, toDate: string) {
    // calculate the difference between the two dates
    const diff = moment(toDate).diff(moment(fromDate), 'days');
    // return the difference
    return diff;
  }


  render() {

    if (!this.bookingDetails) {
      return null;
    }
    return [
      <div class="fluid-container d-flex justify-content-between pt-1 mr-2 ml-2">
        <div class="d-flex align-items-end">
          <div class="font-size-large sm-padding-right">{`Booking#${this.bookingDetails.BOOK_NBR}`}</div>
          {/* format date */}
          @ {moment(this.bookingDetails.BOOK_DATE).format('DD MMM YYYY')} 
          {/* format time */}
          {this._formatTime(this.bookingDetails.BOOK_HOUR, this.bookingDetails.BOOK_MINUTE)}
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
                <ir-label label="Source:" value="CH-BDC-37973903"></ir-label>
                <ir-label label="Booked by:" value={`${this.bookingDetails.My_Guest.FIRST_NAME} ${this.bookingDetails.My_Guest.LAST_NAME}`} iconShown={true}></ir-label>
                <ir-label label="Phone:" value={this.bookingDetails.My_Guest.MOBILE}></ir-label>
                <ir-label label="Email:" value={this.bookingDetails.My_Guest.My_User.EMAIL}></ir-label>
                <ir-label label="Alternate Email:" value={this.bookingDetails.My_Guest.My_User.DISCLOSED_EMAIL}></ir-label>
                <ir-label label="Address:" value={this.bookingDetails.My_Guest.ADDRESS}></ir-label>
                <ir-label label="Arrival Time:" value="2 PM - 4 PM"></ir-label>
                <ir-label label="Notes:" value={this.bookingDetails.GUEST_REMARK}></ir-label>
              </div>
            </div>
            <div class="font-size-large d-flex justify-content-between align-items-center ml-1 mb-1">
              {`${this._formatDate(this.bookingDetails.FROM_DATE)} - ${this._formatDate(this.bookingDetails.TO_DATE)} (${this._calculateNights(this.bookingDetails.FROM_DATE, this.bookingDetails.TO_DATE)} nights)`}
              {/* Jul 12, 2023 - Jul 23 - 2023 (3 nights - 2 rooms) */}
              <ir-icon icon="ft-plus-square h3 primary-blue pointer"></ir-icon>
            </div>
            {this.bookingDetails.My_Bsa.map((bsa: any) => {
              return (
           <ir-room item={bsa}></ir-room>
              );
            })}
          </div>
          <div class="col-5 pr-0">
           <ir-payment-details item={this.bookingDetails}></ir-payment-details>
          </div>
        </div>
      </div>,
      <ir-sidebar side={'right'} id="editGuestInfo">
        <ir-guest-info></ir-guest-info>
      </ir-sidebar>,
    ];
  }
}
