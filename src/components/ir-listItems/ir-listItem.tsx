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

  @Prop({ reflect: true }) dropdownDataDisable: {
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
        name: 'Enable',
        icon: 'ft-check',
      },
    ],
  };

  @Prop({ reflect: true }) listData: {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
  }[] = [
    {
      title: 'Title',
      channel: 'Channel',
      status: 'Status',
      id: '1',
      group: 'All',
      property: 'Twins',
      hotelId: '123',
    },
  ];

  

  addEventListenerToDropdown(item: any) {
    const dropdown = document.querySelector(`ir-dropdown.dropdown-action-${item.id}`);
    console.log("dropdown", dropdown)
    if (dropdown) {
      const eventHandler = (e: CustomEvent) => {
        if (e.detail.name === 'Edit') {
          this.handleCreate('edit', item);
        } else if (e.detail.name === 'Delete') {
          this.onPressDelete(item);
        } else if (e.detail.name === 'Disable') {
          this.onPressDisable(item);
        } else if (e.detail.name === 'Enable') {
          this.onPressEnable(item);
        }
      };

      dropdown.addEventListener('dropdownItemCLicked', eventHandler);
    }
  }

  @Event() openSidebar: EventEmitter;
  @Event() createNew: EventEmitter;

  handleCreate(mode: string, item: any) {
    
    this.openSidebar.emit({ mode: mode, item: item });
  }

  onPressDelete(item: any) {
    console.log("item", item);
   const dropdown = document.querySelector(`ir-dropdown.dropdown-action-${item.id}`);
  if (dropdown) {
    //dropdown.removeEventListener('dropdownItemCLicked', this.handleCreate);
  }
    this.listData = this.listData.filter((data) => data.id !== item.id);
    // Remove the event listener
  }

  onPressDisable(item: any) {
    console.log("item", item);
    // Change the status of the item
    this.listData = this.listData.map((data) => {
      if (data.id === item.id) {
        data.status = 'Disabled';
      }
      return data;
    }
    );
  }

  onPressEnable(item: any) {
    console.log("item", item);
    // Change the status of the item
    this.listData = this.listData.map((data) => {
      if (data.id === item.id) {
        data.status = 'Enabled';
      }
      return data;
    }
    );
  }


  componentDidLoad() {
    this.listData.forEach(item => {
      this.addEventListenerToDropdown(item);
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    this.listData.forEach(item => {
      this.addEventListenerToDropdown(item);
    });
  }


  // disconnectedCallback() {
  //   this.listData.forEach(item => {
  //     const dropdown = document.querySelector(`ir-dropdown.dropdown-action-${item.id}`);
  //     if (dropdown) {
  //       dropdown.removeEventListener('dropdownItemCLicked', this.handleCreate);
  //     }
  //   });
  // }
 
  

  _renderEmptyState() {
    return (
      <div class="cardBody">
        <div class="emptyBody">
          <img src="./my-assets/5058446.png" alt="empty" class="img-fluid emptyImg" />
          <p class="font-size-small">
            You don't have any channels yet.
            <br />
            It's a good time to create
            <a class="text-primary openSidebar"
              onClick={() => this.createNew.emit({ mode: 'create', item: null })}
              > new</a>
          </p>
        </div>
      </div>
    );
  }



  _renderItem() {
    return (
      <div>
        <div class="container-fluid">
          {this.listData.map(item => {
            
             return (
            <div class="row">
              <div class="col-12 item-info">
                <div class="row">
                  <div class="col-3 p-1">{item.title}</div>
                  <div class="col-3 p-1">{item.channel}</div>
                  <div class="col-3 p-1">{item.status}</div>
                  <div class="col-3 ">
                  <ir-dropdown class={`dropdown-action-${item.id}`} 
                  data={item.status === 'Enabled' ? this.dropdownData : this.dropdownDataDisable}
                  object={item}></ir-dropdown>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    );
  }

  render() {
    return this.listData.length > 0 ? this._renderItem() : this._renderEmptyState();
  }
}
