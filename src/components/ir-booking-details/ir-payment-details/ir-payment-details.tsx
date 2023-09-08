import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';
import { _formatDate } from '../functions';

@Component({
  tag: 'ir-payment-details',
})
export class IrPaymentDetails {
  @Prop({mutable: true, reflect: true}) item: any;
  @State() newTableRow: boolean = false;

  @State() confirmModal: boolean = false;

  @Event() addItem: EventEmitter<any>;

  itemToBeAdded: any = {
    date: '',
    amount: 0,
    designation: '',
    reference: '',
  }
  
  // _formatDate(date: string) {
  //   // Month Name 3 letters, Day, Year
  //   return moment(date).format('MMM DD, YYYY');
  // }

  // _formatAmount(amount: string) {
  //   // format the amount using accounting.js
  //   return accounting.formatMoney(amount);
  // }

  _handleSave() {
    // emit the item to be added
    this.item.My_Payment = [...this.item.My_Payment, this.itemToBeAdded];
    console.log(this.itemToBeAdded);
    console.log(this.item.My_Payment);
    this.addItem.emit(this.itemToBeAdded);
    this.itemToBeAdded = {
      PAYMENT_DATE: '',
      PAYMENT_AMOUNT: '',
      DESIGNATION: '',
      REFERENCE: '',
    }
  }

  @Listen('confirmModal')
  handleConfirmModal(e) {
    console.log(e.detail);
    // Remove the item from the array
    const newPaymentArray = this.item.My_Payment.filter((item: any) => item.PAYMENT_DATE !== e.detail.PAYMENT_DATE);
    this.item.My_Payment = newPaymentArray;
    this.confirmModal = !this.confirmModal;
    
    // Close the modal
    // const modal = document.querySelector('ir-modal');
    // modal.closeModal();
  }

  _renderTableRow(item: any, rowMode: 'add' | 'normal' = 'normal') {
    return [
      <div class="row m-0">
        <div class="col-9 p-0">
          <div class="row m-0">
            <div class="col-4 border-right-dark p-0 border-bottom-dark">
              {rowMode === 'normal' ? <span class="sm-padding-left">{_formatDate(item.PAYMENT_DATE)}</span> 
              : <input class="border-0 w-100"  onChange={(event)=>{this.itemToBeAdded.PAYMENT_DATE = (event.target as HTMLInputElement).value}} type="date"></input>}
            </div>
            <div class="col-4 border-right-dark d-flex p-0 justify-content-end border-bottom-dark sm-padding-right">
              {rowMode === 'normal' ? <span class="sm-padding-right">${item.PAYMENT_AMOUNT}</span> 
              : <input class="border-0 w-100"  onChange={(event)=>{this.itemToBeAdded.PAYMENT_AMOUNT = (event.target as HTMLInputElement).value}} type="number"></input>}
            </div>
            <div class="col-4 border-right-dark p-0 border-bottom-dark sm-padding-left">
              {rowMode === 'normal' ? <span class="sm-padding-left">{item.DESIGNATION}</span> 
              : <input class="border-0 w-100"  onChange={(event)=>{this.itemToBeAdded.DESIGNATION = (event.target as HTMLInputElement).value}} type="text"></input>}
            </div>
            <div class="col-12 border-right-dark p-0 border-bottom-dark sm-padding-left">
              {rowMode === 'normal' ? <span class="sm-padding-left">{item.REFERENCE}</span> 
              : <input class="border-0 w-100" onChange={(event)=>{this.itemToBeAdded.REFERENCE = (event.target as HTMLInputElement).value}} type="text"></input>}
            </div>
          </div>
        </div>
        <div class="col-3 d-flex align-items-center justify-content-between border-right-dark border-bottom-dark">

          <ir-icon icon="ft-save primary-blue h5 pointer"
            onClick={
              rowMode === 'add'
                ? () => {
                    this.newTableRow = false;
                    this._handleSave()
                  }
                : () => {
                   
                  }
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
                    }

                  }
                : () => {
                    const modal: any = document.querySelector('.delete-record-modal');
                    modal.openModal();
                  }
            }
          ></ir-icon>
        </div>
      </div>,
      <ir-modal 
      item={item}
      class={'delete-record-modal'} 
      modalTitle="Are you sure you want to delete this payment record?" 
      modalBody="If deleted it will be permnantly lost!" 
      iconAvailable={true} 
      icon="ft-alert-triangle danger h1" 
      leftBtnText='Delete'
      rightBtnText='Cancel'
      leftBtnColor='danger'
      rightBtnColor='primary'
      ></ir-modal>,  ]
  }

  directPayment() {
    return (
      <div>
        <strong>Booking Guarantee</strong>
        <div>
          Card: <span>{this.item.My_Guest?.CCN}</span> Expiry{' '}
          <span>
            {' '}
            {this.item?.My_Guest?.CC_EXP_MONTH}/{this.item?.My_Guest?.CC_EXP_YEAR}
          </span>
        </div>
        <div>
          Name: <span>{this.item.My_Guest?.CHN}</span> - CVC: <span> {this.item.My_Guest?.CVC}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div class="card">
        <div class="p-1">
          <div class="mb-2 h4">
            Due Balance: <span class="danger font-weight-bold">$40.00</span>
          </div>

          {this.item.IS_DIRECT && this.directPayment()}
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
                  <ir-icon
                    icon="ft-plus font-weight-bold primary-blue pointer p-0"
                    onClick={() => {
                      this.newTableRow = true;
                    }}
                  ></ir-icon>
                </div>
              </div>
              {this.item.My_Payment.map((item: any) => this._renderTableRow(item))}
              {this.newTableRow ? this._renderTableRow(null, 'add') : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
