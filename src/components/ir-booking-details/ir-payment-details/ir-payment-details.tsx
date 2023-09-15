import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';
import { _formatAmount, _formatDate } from '../functions';

@Component({
  tag: 'ir-payment-details',
})
export class IrPaymentDetails {
  @Prop({ mutable: true, reflect: true }) item: any;
  @State() newTableRow: boolean = false;

  @State() confirmModal: boolean = false;

  @Event({ bubbles: true }) handlePaymentItemChange: EventEmitter<any>;

  itemToBeAdded: any = {
    PAYMENT_DATE: '',
    PAYMENT_AMOUNT: '',
    DESIGNATION: '',
    REFERENCE: '',
  };

  @State() toBeDeletedItem: any = {};

  _handleSave() {
    // emit the item to be added
    if (this.item.My_Payment == null) {
      this.item.My_Payment = [];
    }
    this.item.My_Payment = [...this.item.My_Payment, this.itemToBeAdded];
    console.log(this.item);
    this.handlePaymentItemChange.emit(this.item.My_Payment);
    this.itemToBeAdded = {
      PAYMENT_DATE: '',
      PAYMENT_AMOUNT: '',
      DESIGNATION: '',
      REFERENCE: '',
    };
  }

  @Listen('confirmModal')
  handleConfirmModal(e) {
    // Remove the item from the array
    const newPaymentArray = this.item.My_Payment.filter((item: any) => item.PAYMENT_DATE !== e.detail.PAYMENT_DATE);
    this.item.My_Payment = newPaymentArray;
    this.confirmModal = !this.confirmModal;
    this.handlePaymentItemChange.emit(this.item.My_Payment);
    this.toBeDeletedItem = {};
  }

  _renderTableRow(item: any, rowMode: 'add' | 'normal' = 'normal') {
    return (
      <div class="row m-0">
        <div class="col-9 p-0">
          <div class="row m-0">
            <div class="col-4 border-right-light p-0 border-bottom-light border-2">
              {rowMode === 'normal' ? (
                <span class="sm-padding-left">{_formatDate(item.PAYMENT_DATE)}</span>
              ) : (
                <input
                  class="border-0 w-100"
                  onChange={event => {
                    this.itemToBeAdded.PAYMENT_DATE = (event.target as HTMLInputElement).value;
                  }}
                  type="date"
                ></input>
              )}
            </div>
            <div class="col-4 border-right-light d-flex p-0 justify-content-end border-bottom-light border-2 sm-padding-right">
              {rowMode === 'normal' ? (
                <span class="sm-padding-right">${item.PAYMENT_AMOUNT}</span>
              ) : (
                <input
                  class="border-0 w-100"
                  onChange={event => {
                    this.itemToBeAdded.PAYMENT_AMOUNT = (event.target as HTMLInputElement).value;
                  }}
                  type="number"
                ></input>
              )}
            </div>
            <div class="col-4 border-right-light p-0 border-bottom-light border-2 sm-padding-left">
              {rowMode === 'normal' ? (
                <span class="sm-padding-left">{item.DESIGNATION}</span>
              ) : (
                <input
                  class="border-0 w-100"
                  onChange={event => {
                    this.itemToBeAdded.DESIGNATION = (event.target as HTMLInputElement).value;
                  }}
                  type="text"
                ></input>
              )}
            </div>
            <div class="col-12 border-right-light p-0 border-bottom-light border-2 sm-padding-left">
              {rowMode === 'normal' ? (
                <span class="sm-padding-left">{item.REFERENCE}</span>
              ) : (
                <input
                  class="border-0 w-100"
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.newTableRow = false;
                      this._handleSave();
                    }
                  }}
                  onChange={event => {
                    this.itemToBeAdded.REFERENCE = (event.target as HTMLInputElement).value;
                  }}
                  type="text"
                ></input>
              )}
            </div>
          </div>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-between border-right-light border-bottom-light border-2">
          <ir-icon
            icon="ft-save color-ir-light-blue-hover h5 pointer"
            onClick={
              rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this._handleSave();
                  }
                : () => {}
            }
          ></ir-icon>

          <ir-icon
            icon="ft-trash-2 danger h5 pointer"
            onClick={
              rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this.itemToBeAdded = {
                      PAYMENT_DATE: '',
                      PAYMENT_AMOUNT: '',
                      DESIGNATION: '',
                      REFERENCE: '',
                    };
                  }
                : () => {
                    this.toBeDeletedItem = item;
                    const modal: any = document.querySelector('.delete-record-modal');
                    modal.openModal();
                  }
            }
          ></ir-icon>
        </div>
      </div>
    );
  }

  directPayment() {
    return (
      <div>
        <strong>Booking Guarantee</strong>
        <div>
          {this.item?.My_Guest?.CCN && 'Card:'} <span>{this.item?.My_Guest?.CCN || ''}</span> {this.item?.My_Guest?.CC_EXP_MONTH && 'Expiry: '}
          <span>
            {' '}
            {this.item?.My_Guest?.CC_EXP_MONTH || ''} {this.item?.My_Guest?.CC_EXP_YEAR && '/' + this.item?.My_Guest?.CC_EXP_YEAR}
          </span>
        </div>
        <div>
          {this.item?.My_Guest?.CHN && 'Name:'} <span>{this.item?.My_Guest?.CHN || ''}</span> {this.item?.My_Guest?.CVC && '- CVC:'} <span> {this.item.My_Guest?.CVC || ''}</span>
        </div>
      </div>
    );
  }

  _renderDueDate(item) {
    return (
      <div class="row mb-1">
        <span class="col-xl-3 col-lg-4 col-md-3">{_formatDate(item.Date)}</span>
        <span class="col-xl-3 col-lg-4 col-md-3">{item.Description}</span>
        <span class="col-xl-3 col-lg-4 col-md-3 d-flex justify-content-end">{_formatAmount(item.Amount, this.item.My_Currency.REF)}</span>
        <span class="ml-1 col-12 font-size-small collapse roomName">{item.Room}</span>
      </div>
    );
  }

  render() {
    if (!this.item) {
      return <div></div>;
    }

    return [
      <div class="card">
        <div class="p-1">
          <div class="mb-2 h4">
            Due Balance: <span class="danger font-weight-bold">$40.00</span>
          </div>

          {this.item.IS_DIRECT && this.directPayment()}
          <div class="mt-2">
            <div>
              <div class="d-flex align-items-center">
                <strong class="mr-1">Payment due dates</strong>
                <ir-icon
                  id="drawer-icon"
                  icon="ft-eye h2 color-ir-light-blue-hover"
                  data-toggle="collapse"
                  data-target={`.roomName`}
                  aria-expanded="false"
                  aria-controls="myCollapse"
                  class="sm-padding-right pointer"
                ></ir-icon>
              </div>
              {this.item?.My_DueDates && this.item?.My_DueDates.map(item => this._renderDueDate(item))}
            </div>
          </div>
          <div class="mt-2">
            <strong>Payments</strong>
            <div class="fluid-container border-top-light border-2 border-left-light font-size-small">
              <div class="row m-0">
                <div class="col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0">
                  <span class="sm-padding-left">Date</span>
                </div>
                <div class="col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0">
                  <span class="sm-padding-left">Amount</span>
                </div>
                <div class="col-3 font-weight-bold border-right-light border-bottom-light border-2 p-0 sm-padding-left">
                  <span class="sm-padding-left">Designation</span>
                </div>
                <div class="col-3 text-center border-right-light p-0 border-bottom-light border-2">
                  <ir-icon
                    id="add-payment"
                    icon="ft-plus font-weight-bold color-ir-light-blue-hover pointer p-0"
                    onClick={() => {
                      this.newTableRow = true;
                    }}
                  ></ir-icon>
                </div>
              </div>
              {this.item.My_Payment && this.item.My_Payment.map((item: any) => this._renderTableRow(item))}
              {this.newTableRow ? this._renderTableRow(null, 'add') : null}
            </div>
          </div>
        </div>
      </div>,
      <ir-modal
        item={this.toBeDeletedItem}
        class={'delete-record-modal'}
        modalTitle="Are you sure you want to delete this payment record?"
        modalBody="If deleted it will be permnantly lost!"
        iconAvailable={true}
        icon="ft-alert-triangle danger h1"
        leftBtnText="Delete"
        rightBtnText="Cancel"
        leftBtnColor="danger"
        rightBtnColor="primary"
      ></ir-modal>,
    ];
  }
}
