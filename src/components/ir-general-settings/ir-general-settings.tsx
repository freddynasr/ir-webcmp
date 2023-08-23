import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-general-settings',
})
export class IrGeneralSettings {
  @State() testLoader: boolean = false;
  @Prop() mode: string;
  @Prop({ reflect: true, mutable: true }) connectionStatus: string = 'Not connected';
  @Prop({ reflect: true, mutable: true }) data: any = {
    id: '123456',
    channel: 'Channel Name',
    group: 'Group',
    title: 'Title',
    property: 'Property',
    hotelId: 'hotelId',
  };
  @State() selectedChannel: string = '';

  @State() connected: boolean = false;
  @Event() sendToParent: EventEmitter;

  componentDidLoad() {
    const channelSelect = document.querySelector('ir-select#channel-select');
    console.log('channelSelect', channelSelect);
    channelSelect.addEventListener('selectChange', (event: CustomEvent) => {
      this.selectedChannel = event.detail;
      this.data = {
        ...this.data,
        channel: event.detail,
      };
    });

    const groupSelect = document.querySelector('ir-select#group-select');
    groupSelect.addEventListener('selectChange', (event: CustomEvent) => {
      this.data = { ...this.data, group: event.detail };
    });

    const titleInput = document.querySelector('ir-input-text#title-input');
    titleInput.addEventListener('textChange', (event: CustomEvent) => {
      this.data = { ...this.data, title: event.detail };
    });

    const propertySelect = document.querySelector('ir-select#property-select');
    propertySelect.addEventListener('selectChange', (event: CustomEvent) => {
      this.data = { ...this.data, property: event.detail };
    });
  }

  componentDidUpdate() {
    const hotelID = document.querySelector('ir-input-text#hotel-id');
    hotelID.addEventListener('textChange', (event: CustomEvent) => {
      this.connected = false;
      this.connectionStatus = 'Not connected';
      this.data = {
        ...this.data,
        hotelId: event.detail.trim(),
      };
    });

    const minimumStay = document.querySelector('ir-select#minimum-stay-select');
    minimumStay.addEventListener('selectChange', (event: CustomEvent) => {
      console.log('minimumStay', event.detail);
      this.data = {
        ...this.data,
        minimumStay: event.detail.trim(),
      };
    });
  }

  testConnection() {
    // check if all data is filled
    if (!this.data.hotelId) {
      const alertModal: any = document.querySelector('ir-modal.alertFields');
      alertModal.openModal();
    }
    this.testLoader = true;
    setTimeout(() => {
      this.testLoader = false;
      if (this.data.hotelId == '123456') {
        console.log('testConnection', this.data.hotelId);
        this.connected = true;
        this.connectionStatus = ' Connected';

        this.sendToParent.emit(this.data);
        console.log('this.data', this.data);
      } else {
        this.connected = false;
      }
    }, 2000);
  }

  _alert(message: string) {
    return (
      <div class="row">
        <div class="col-2 d-flex justify-content-center ">
          <ir-icon icon="ft-alert-triangle warning h1"></ir-icon>
        </div>
        <div class="col-10">
          <div class="font-weight-bold h3">{message}</div>
        </div>
      </div>
    );
  }

  render() {
    return [
      <div class="General Settings">
        <div class="container-fluid">
          {this.mode == 'edit' && <span class="text-light border-bottom-light mb-2">{`ID ${this.data.id}`}</span>}
          <div class="column">
            <ir-select
              id="channel-select"
              label="Channel"
              data={[
                { value: 'expedia', text: 'Expedia' },
                { value: 'zourouna', text: 'Zourouna' },
              ]}
              label-background="white"
              label-position="right"
              label-border="none"
              size="sm"
              textSize="sm"
              labelWidth={4}
              selectedValue={this.data.channel}
            />
            <ir-select
              id="group-select"
              label="Group"
              // placeholder="Group"
              data={[{ value: 'all', text: 'All' }]}
              label-background="white"
              label-position="right"
              label-border="none"
              size="sm"
              textSize="sm"
              labelWidth={4}
              selectedValue={this.data.group}
            />
            <ir-input-text
              id="title-input"
              label="Title"
              placeholder="Title"
              value={this.data.title}
              label-background="white"
              label-position="right"
              label-border="none"
              size="sm"
              labelWidth={4}
            />
            <ir-select
              id="property-select"
              label="Propery"
              // placeholder="Propery"
              data={[{ value: 'Mist', text: 'Mist' }]}
              label-background="white"
              label-position="right"
              label-border="none"
              size="sm"
              textSize="sm"
              labelWidth={4}
              selectedValue={this.data.property}
            />
          </div>
        </div>
        {this.selectedChannel && (
          <div class="container-fluid mt-1">
            <div class="text-light border-bottom-light mb-2">Connection Settings</div>
            <div class="row">
              <ir-input-text
                id={'hotel-id'}
                label="Hotel ID"
                placeholder="Hotel ID"
                value={this.data.hotelId}
                label-background="white"
                label-position="right"
                label-border="none"
                size="sm"
                labelWidth={4}
                class="col-12"
              />
              <ir-select
                id="minimum-stay-select"
                label="Minimum Stay Type"
                data={[{ value: 'arrival', text: 'Arrival' }]}
                label-background="white"
                label-position="right"
                label-border="none"
                size="sm"
                textSize="sm"
                class="col-12"
                labelWidth={4}
                selectedValue={this.data.minimumStay}
              />
              <div class="col-12 pb-1 ">
                <div class="row">
                  <div class="col-4"></div>
                  <div class="col-8 d-flex justify-content-between align-items-center">
                    <div>
                      {this.testLoader ? (
                        <ir-loader size="xs"></ir-loader>
                      ) : (
                        <span>
                          <ir-icon class="test-icon" icon={this.connected ? 'ft-check-circle success' : 'ft-alert-triangle warning'}></ir-icon>
                          {this.connected && this.connectionStatus}
                          {!this.connected && this.connectionStatus}
                        </span>
                      )}
                    </div>
                    {!this.connected && (
                      <button onClick={() => this.testConnection()} class="btn btn-white border-light btn-sm text-dark ">
                        Test Connection
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ir-modal class="alertFields" leftBtnActive={false} btnPosition="center" rightBtnText="Close" rightBtnColor="primary">
          {this._alert('Please fill in all the fields')}
        </ir-modal>
      </div>,
    ];
  }
}
