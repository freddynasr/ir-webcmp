import { Component, h, Prop, State, EventEmitter, Event, Listen } from '@stencil/core';
import moment from 'moment';

@Component({
  tag: 'ir-room',
})
export class IrRoom {
  @Prop() item: any;
  @Prop({reflect: true}) mealCode: any;
  @State() tAmount: number = 0;

  @Event({bubbles: true, composed: true}) pressCheckIn: EventEmitter;
  @Event({bubbles: true, composed: true}) pressCheckOut: EventEmitter;

  @Listen('clickHanlder')
  handleClick(e) {
    let target = e.target;
    if (target.id == 'checkin') {
      this.pressCheckIn.emit(this.item);
    } else if (target.id == 'checkout') {
      this.pressCheckOut.emit(this.item);
    }
  }


  _formatDate(date: string) {
    // Month Name 3 letters, Day, Year
    return moment(date).format('MMM DD, YYYY');
  }

  _getDay(date: string) {
    // formate it as day number/month number and day name
    return moment(date).format('DD/MM ddd');
  }

  componentWillLoad() {
    // get total amount from this.item.My_Bsad.TOTAL_AMOUNT and add them to tAmount
    this.item.My_Bsad.forEach((item: any) => {
      this.tAmount += item.TOTAL_AMOUNT;
    });
  }

  _getFoodArrangeCat(catCode: string) {
    // get the category from the foodArrangeCats array
    const cat = this.mealCode.find((cat: any) => cat.CODE_NAME === catCode);
    // return the category
    return cat.CODE_VALUE_EN;
  }

  

  render() {
    return (
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
                <strong>{this.item.My_Room_type.My_Room_category.NAME} </strong> {this.mealCode && this._getFoodArrangeCat(this.item.My_Room_type.FOOD_ARRANGE_CAT_CODE)} -{' '}
                {this.item.My_Room_type.IS_NON_REFUNDABLE ? 'Refundable' : 'Non-refundable'} {this.item.My_Room_type.My_Room_type_desc[0].CUSTOM_TXT || ''}
              </div>
              <div>
                {/* <span class="mr-1">{this.item.TOTAL_AMOUNT + this.item.EXCLUDED_TAXES}</span> */}
                <span class="mr-1">${this.tAmount}</span>
                <ir-icon icon="ft-edit primary-blue h4 pointer"></ir-icon>
                <ir-icon icon="ft-trash-2 danger h4 pointer"></ir-icon>
              </div>
            </div>
            <div>
              <span class="mr-1">{`${this.item.GUEST_FIRST_NAME} ${this.item.GUEST_LAST_NAME}`}</span>
              {this.item.ADULTS_NBR > 0 && (
                <span>
                  {' '}
                  {this.item.ADULTS_NBR} {this.item.ADULTS_NBR > 1 ? 'Adults' : 'Adult'}
                </span>
              )}
              {this.item.CHILD_NBR > 0 && (
                <span>
                  {' '}
                  {this.item.CHILD_NBR} {this.item.CHILD_NBR > 1 ? 'Children' : 'Child'}
                </span>
              )}
            </div>
            <div class="d-flex align-items-center">
              <span class=" mr-1">
                {this._formatDate(this.item.FROM_DATE)} - {this._formatDate(this.item.TO_DATE)}
              </span>
              {this.item.UNIT && <span class="light-blue-bg mr-2 ">{this.item.UNIT}</span>}
              <ir-button id="checkin" icon="" class="mr-1" btn_color="info" size="sm" text="Check in"></ir-button>
              <ir-button id='checkout' icon="" btn_color="info" size="sm" text="Check out"></ir-button>
            </div>
            <div class="collapse" id="myCollapse">
              <div class="d-flex">
                <div class=" sm-padding-top">
                  <strong class="sm-padding-right">Rate BreakDown:</strong>
                </div>
                <div class="sm-padding-top">
                  {this.item.My_Bsad.length > 0 &&
                    this.item.My_Bsad.map(item => (
                      <div>
                        {this._getDay(item.ALLOTMENT_DATE)} ${item.TOTAL_AMOUNT}
                      </div>
                    ))}
                </div>
              </div>
              <ir-label label="Cancelation:" value={this.item.CANCELATION_POLICY_PHRASE}></ir-label>
              <ir-label label="PrePayment:" value={this.item.My_Room_type.My_Translated_Prepayment_Policy}></ir-label>
              <ir-label label="Smoking Preference:" value={this.item.My_Room_type.My_Translated_Cancelation_Policy}></ir-label>
              <ir-label label="Meal Plan:" value={this.mealCode && this._getFoodArrangeCat(this.item.FOOD_ARRANGE_CAT_CODE)}></ir-label>
              <ir-label label="Special rate:" value="Non-refundable"></ir-label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
