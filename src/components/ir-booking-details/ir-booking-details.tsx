import { Component, Listen, h, Prop, Watch, State } from '@stencil/core';
import moment from 'moment';
import { guestInfo } from '../../common/models';

@Component({
  tag: 'ir-booking-details',
  styleUrl: 'ir-booking-details.css',
})
export class IrBookingDetails {
  @Prop({mutable: true, reflect: true}) bookingDetails: any = null;
  // Statuses and Codes
  @Prop() bookingStatuses: any = []
  @Prop() foodArrangeCats: any = []
  @Prop() arrivalTimes: any = []

  @State() guestData: guestInfo = null;
  @State() rerenderFlag = false


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

  @Listen('editSidebar')
  handleEditSidebar() {
    this.openEditSidebar();
  }

  @Listen('submitForm')
    handleFormSubmit(e) {
      const data = e.detail;
      // handle changes in the booking details
      const bookingDetails = this.bookingDetails;
      bookingDetails.My_Guest.FIRST_NAME = data.firstName;
      bookingDetails.My_Guest.LAST_NAME = data.lastName;
      bookingDetails.My_Guest.COUNTRY_ID = data.country;
      bookingDetails.My_Guest.CITY = data.city;
      bookingDetails.My_Guest.ADDRESS = data.address;
      bookingDetails.My_Guest.MOBILE = data.mobile;
      bookingDetails.My_Guest.PHONE_PREFIX = data.prefix;
      bookingDetails.My_Guest.IS_NEWS_LETTER = data.newsletter;
      bookingDetails.My_Guest.My_User.CURRENCY = data.currency;
      bookingDetails.My_Guest.My_User.DISCLOSED_EMAIL = data.altEmail;
      bookingDetails.My_Guest.My_User.PASSWORD = data.password;
      bookingDetails.My_Guest.My_User.EMAIL = data.email;
      this.bookingDetails = bookingDetails;
      console.log('Form submitted with data: ', this.bookingDetails);
      this.rerenderFlag = !this.rerenderFlag;
      // close the sidebar
      const sidebar: any = document.querySelector('ir-sidebar#editGuestInfo');
      sidebar.open = false;

  }


  @Watch('bookingDetails')
  watchHandler(newValue: any, oldValue: any) {
    console.log('The new value of bookingDetails is: ', newValue);
    console.log('The old value of bookingDetails is: ', oldValue);
    let _data: guestInfo = {
      firstName: newValue.My_Guest.FIRST_NAME,
      lastName: newValue.My_Guest.LAST_NAME,
      email: newValue.My_Guest.My_User.EMAIL,
      altEmail: newValue.My_Guest.My_User.DISCLOSED_EMAIL,
      password: newValue.My_Guest.My_User.PASSWORD,
      country: newValue.My_Guest.COUNTRY_ID,
      city: newValue.My_Guest.CITY,
      address: newValue.My_Guest.ADDRESS,
      mobile: newValue.My_Guest.MOBILE,
      prefix: newValue.My_Guest.PHONE_PREFIX,
      newsletter: newValue.My_Guest.IS_NEWS_LETTER,
      currency: newValue.My_Guest.My_User.CURRENCY,
      language: newValue.My_Guest.My_User.LANGUAGE,
    };
    this.guestData = _data;
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

  _getBookingStatus(statusCode: string) {
    // get the status from the bookingStatuses array
    const status = this.bookingStatuses.find((status: any) => status.CODE_NAME === statusCode);
    // return the status
    return status.CODE_VALUE_EN;
  }

 

  _getArrivalTime(timeCode: string) {
    // get the time from the arrivalTimes array
    const time = this.arrivalTimes.find((time: any) => time.CODE_NAME === timeCode);
    // return the time
    return time.CODE_VALUE_EN;
  }
  


  render() {
    if (!this.bookingDetails) {
      return null;
    }


    const guestInfo = document.querySelector('ir-guest-info');
    if (guestInfo) {
      guestInfo.data = this.guestData;
    }

    return [
      <div class="fluid-container d-flex justify-content-between pt-1 mr-2 ml-2">
        <div class="d-flex align-items-end">
          <div class="font-size-large sm-padding-right">{`Booking#${this.bookingDetails.BOOK_NBR}`}</div>
          {/* format date */}@ {moment(this.bookingDetails.BOOK_DATE).format('DD MMM YYYY')}
          {/* format time */}
          {this._formatTime(this.bookingDetails.BOOK_HOUR, this.bookingDetails.BOOK_MINUTE)}
        </div>
        <div class="d-flex align-items-center">
          <span class="confirmed btn-sm mr-2">{this._getBookingStatus(this.bookingDetails.BOOK_STATUS_CODE)}</span>
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
                {this.bookingDetails.My_Ac?.NAME || ''}
                <ir-label label="Source:" value={this.bookingDetails.My_Source.Label}></ir-label>
                <ir-label label="Booked by:" value={`${this.bookingDetails.My_Guest.FIRST_NAME} ${this.bookingDetails.My_Guest.LAST_NAME}`} iconShown={true}></ir-label>
                <ir-label label="Phone:" value={this.bookingDetails.My_Guest.MOBILE}></ir-label>
                <ir-label label="Email:" value={this.bookingDetails.My_Guest.My_User.EMAIL}></ir-label>
                <ir-label label="Alternate Email:" value={this.bookingDetails.My_Guest.My_User.DISCLOSED_EMAIL}></ir-label>
                <ir-label label="Address:" value={this.bookingDetails.My_Guest.ADDRESS}></ir-label>
                <ir-label label="Arrival Time:" value={this._getArrivalTime(this.bookingDetails.ARRIVAL_TIME_CODE)}></ir-label>
                <ir-label label="Notes:" value={this.bookingDetails.GUEST_REMARK}></ir-label>
              </div>
            </div>
            <div class="font-size-large d-flex justify-content-between align-items-center ml-1 mb-1">
              {`${this._formatDate(this.bookingDetails.FROM_DATE)} - ${this._formatDate(this.bookingDetails.TO_DATE)} (${this._calculateNights(
                this.bookingDetails.FROM_DATE,
                this.bookingDetails.TO_DATE,
              )} nights)`}
              <ir-icon icon="ft-plus-square h3 primary-blue pointer"></ir-icon>
            </div>
            {this.bookingDetails.My_Bsa.map((bsa: any) => {
              return <ir-room mealCode={this.foodArrangeCats} item={bsa}></ir-room>;
            })}
          </div>
          <div class="col-5 pr-0">
            <ir-payment-details item={this.bookingDetails}></ir-payment-details>
          </div>
        </div>
      </div>,
      <ir-sidebar side={'right'} id="editGuestInfo">
        <ir-guest-info ></ir-guest-info>
      </ir-sidebar>,
    ];
  }
}
