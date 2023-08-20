import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ir-general-settings',
})
export class IrGeneralSettings {

  @State() selectedChannel: string = '';

  @Prop() mode: string;
  @Prop({ reflect: true, mutable: true }) connectionStatus: string = 'Not connected';
  @Prop({ reflect: true, mutable: true }) data: any = {
    id: '123456',
    channel: 'Channel Name',
    group: 'Group',
    title: 'Title',
    property: 'Property',
    hotelId: "hotelId",
  }

  @State() connected: boolean = false;

  @Event() sendToParent: EventEmitter;

  componentDidLoad() {
    const channelSelect = document.querySelector('ir-channel-select#channel-select');
    console.log("channelSelect", channelSelect);
    channelSelect.addEventListener('irSelect', (event: CustomEvent) => {
      this.selectedChannel = event.detail;
      this.data = {
        ...this.data,
        channel: event.detail
      };
    }
    );

    const groupSelect = document.querySelector('ir-channel-select#group-select');
    groupSelect.addEventListener('irSelect', (event: CustomEvent) => {
      this.data = {...this.data, group: event.detail};
    }
    );

    const titleInput = document.querySelector('ir-input-channel#title-input');
    titleInput.addEventListener('sendValue', (event: CustomEvent) => {
      this.data = {...this.data, title: event.detail};
    }
    );

    const propertySelect = document.querySelector('ir-channel-select#property-select');
    propertySelect.addEventListener('irSelect', (event: CustomEvent) => {
      this.data = {...this.data, property: event.detail};
    }
    );
  }

  componentDidUpdate() {
    const hotelID = document.querySelector('ir-input-channel#hotel-id');
    hotelID.addEventListener('sendValue', (event: CustomEvent) => {
      console.log("hotelID", event.detail);
      this.data = {
        ...this.data,
        hotelId: event.detail.trim()
      };
    }
    );

    const minimumStay = document.querySelector('ir-channel-select#minimum-stay-select');
    minimumStay.addEventListener('irSelect', (event: CustomEvent) => {
      console.log("minimumStay", event.detail);
      this.data = {
        ...this.data,
        minimumStay: event.detail.trim()
      };
    }
    );
  }

  testConnection() {
    if (this.data.hotelId == "123456") {
      console.log("testConnection", this.data.hotelId);
      this.connected = true;
      this.connectionStatus = 'Connected';
      this.sendToParent.emit(this.data);
    } else {
      this.connected = false;
    }
  }
    



   
      

  render() {
    return [

         <div class="General Settings">
    <div class="container-fluid">
      { this.mode == 'edit' && <span class="text-light border-bottom-light mb-2">{`ID ${this.data.id}`}</span>}
      <div class="column">
         <ir-channel-select 
         id="channel-select"
         label="Channel" data={[
          { value: '', name: 'Channel Name' },
          { value: 'expedia', name: 'Expedia' },
        ]}
        />
        <ir-channel-select
          id="group-select"
          label="Group" placeholder="Group" data={[
          { value: '', name: '' },
          { value: 'all', name: 'All' },
        ]}
        />
        <ir-input-channel
          id="title-input"
         label="Title" placeholder="Title" value={this.data.title} />
        <ir-channel-select
          id="property-select"
         label="Propery" placeholder="Propery" data={[
          { value: '', name: '' },
          { value: 'Mist', name: 'Mist' },
        ]}
        />
      </div>
    </div>
    { this.selectedChannel && <div class="container-fluid mt-1">
      <div class="text-light border-bottom-light mb-2">
        Connection Settings
      </div>
      <div class="row">
        <ir-input-channel 
        id={'hotel-id'}
         label="Hotel ID" placeholder="Hotel ID" value={this.data.hotelId} />
        <ir-channel-select
          id="minimum-stay-select"
        label='Minimum Stay Type' placeholder='Channel' data={[
          { value: '', name: '' },
          { value: 'arrival', name: 'Arrival' },
        ]}
        />
        <div class="col-12 pb-1 ">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-8 d-flex justify-content-between align-items-center" >
              <div>
                <ir-icon icon="ft-alert-triangle warning"></ir-icon>
                { this.connected && 
                <div>
                <ir-icon icon="ft-check-circle success"></ir-icon>
                {this.connectionStatus}
                </div>
                }
                </div>
              <button 
              onClick={() => this.testConnection()}
              class="btn btn-white border-light btn-sm text-dark">Test Connection</button>
            </div>
          </div>
        </div>
      </div>
    </div>}
  </div>  
    ];
  }
}
