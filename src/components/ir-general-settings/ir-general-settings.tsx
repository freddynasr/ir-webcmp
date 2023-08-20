import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ir-general-settings',
})
export class IrGeneralSettings {

  @Prop() mode: string;
  @Prop() connectionStatus: string = 'Connected';
  @Prop() data: any = {
    id: '123456',
    channel: 'Channel Name',
    group: 'Group',
    title: 'Title',
    property: 'Property',
    hotelId: 'Hotel ID',
  };

  componentDidLoad() {
    console.log(this.data);
    console.log(this.mode);
  }



   
      

  render() {
    return [

         <div class="General Settings">
    <div class="container-fluid">
      { this.mode == 'edit' && <span class="text-light border-bottom-light mb-2">{`ID ${this.data.id}`}</span>}
      <div class="column">
        <ir-input-channel label="Channel" placeholder="Channel Name" value={this.data.channel} />
        <ir-channel-select label="Group" placeholder="Group" data={[
          { value: 'all', name: 'All' },
        ]}
        />
        <ir-input-channel label="Title" placeholder="Title" value={this.data.title} />
        <ir-channel-select label="Propery" placeholder="Propery" data={[
          { value: 'Mist', name: 'Mist' },
        ]}
        />
      </div>
    </div>
    <div class="container-fluid mt-1">
      <div class="text-light border-bottom-light mb-2">
        Connection Settings
      </div>
      <div class="row">
        <ir-input-channel label="Hotel ID" placeholder="Hotel ID" value={this.data.hotelId} />
        <ir-channel-select label='Channel' placeholder='Channel' data={[]} />
        <div class="col-12 pb-1 ">
          <div class="row">
            <div class="col-4"></div>
            <div class="col-8 d-flex justify-content-between align-items-center" >
              <div>
                <ir-icon icon="ft-alert-triangle warning"></ir-icon>
                { this.connectionStatus == 'connected' && 
                <div>
                <ir-icon icon="ft-check-circle success"></ir-icon>
                {this.connectionStatus}
                </div>
                }
                </div>
              <button class="btn btn-white border-light btn-sm text-dark">Test Connection</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>  
    ];
  }
}
