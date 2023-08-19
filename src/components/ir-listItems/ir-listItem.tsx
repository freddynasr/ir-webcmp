import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
@Component({
  tag: 'ir-list-item',
})
export class IrListItem {
  @Prop({ reflect: true }) dropdownData: {
    name: string;
    icon: string;
    children: {
      name: string;
      icon: string;
    }[];
  } = {
    name: 'Action',
    icon: '',
    children: [
      {
        name: 'Edit',
        icon: 'ft-edit',
      },
      {
        name: 'Delete',
        icon: 'ft-trash',
      },
      {
        name: 'Disable',
        icon: 'ft-alert-triangle',
      },
    ],
  };

  @Prop({ reflect: true }) listData: {
    title: string;
    channel: string;
    status: string;
  }[] = [
    {
      title: 'Title',
      channel: 'Channel',
      status: 'Status',
    },
  ];

  @Event() openSidebar: EventEmitter;

  handleCreate(mode: string) {
    this.openSidebar.emit(mode);
  }

  componentDidLoad() {
    // Add an event listener to the dropdown component
    const item = document.querySelector('ir-dropdown');
    item.addEventListener('dropdownItemCLicked', (e: CustomEvent) => {
      if (e.detail === 'Edit') {
        console.log(e.detail);
        this.handleCreate('edit');
      }
    });
  }

  _renderEmptyState() {
    return (
      <div class="cardBody">
        <div class="emptyBody">
          <img src="./my-assets/5058446.png" alt="empty" class="img-fluid emptyImg" />
          <p class="font-size-small">
            You don't have any channels yet.
            <br />
            It's a good time to create
            <a class="text-primary openSidebar"> new</a>
          </p>
        </div>
      </div>
    );
  }

  _renderItem() {
    return (
      <div>
        <div class="container-fluid">
          {this.listData.map(item => (
            <div class="row">
              <div class="col-12 item-info">
                <div class="row">
                  <div class="col-3 p-1">{item.title}</div>
                  <div class="col-3 p-1">{item.channel}</div>
                  <div class="col-3 p-1">{item.status}</div>
                  <div class="col-3 ">
                    <ir-dropdown id="action" data={this.dropdownData}></ir-dropdown>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    return this.listData.length > 0 ? this._renderItem() : this._renderEmptyState();
  }
}
