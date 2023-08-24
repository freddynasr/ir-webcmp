import { Component, h, Listen, Prop, State, Event, EventEmitter } from '@stencil/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  tag: 'ir-channel-manager',
  styleUrl: 'ir-channel-manager.css',
})
export class IrChannelManager {
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

  @Prop({ reflect: true, mutable: true }) listData: {
    title: string;
    channel: string;
    status: string;
    id: string;
    group: string;
    property: string;
    hotelId: string;
    mapping: any;
  }[] = [];

  @State() loader: boolean = false;
  @State() mode: string = 'create';
  tabs: string[] = ['General Settings', 'Mapping', 'Channel Settings'];
  @State() activeTab: string = 'General Settings';
  @State() selectedItem: any = {};
  @State() item: any = {};
  @State() anyChanges: boolean = false;

  @Event() fetchApi: EventEmitter;

  @Listen('sendToParent')
  sendToParentHandler(event: CustomEvent) {
    this.anyChanges = true;
    this.item = event.detail;
    //this.listData = [...this.listData, { ...event.detail, id: this.listData.length + 1, status: 'Active' }];
  }

  @Listen('sendMappingToParent')
  sendMappingToParentHandler(event: CustomEvent) {
    this.anyChanges = true;
    console.log(event.detail);
    const mapping = event.detail;
    if (this.mode === 'edit') {
      this.listData = this.listData.map(item => {
        if (item.id === this.selectedItem.id) {
          return { ...this.item, mapping: mapping };
        }
        return item;
      });
      this.fetchApi.emit({ ...this.item, mapping: mapping, status: 'Active', id: uuidv4() });
      this.mode = 'create';
      this.activeTab = 'General Settings';
      const sidebar = document.querySelector('ir-sidebar');
      sidebar.open = !sidebar.open;
      this._reset();
      return;
    }
    if (this.listData && this.listData.length > 0) {
      this.listData = [...this.listData, { ...this.item, mapping: mapping, status: 'Active', id: uuidv4() }];
    } else {
      this.listData = [{ ...this.item, mapping: mapping, status: 'Active', id: uuidv4() }];
    }
    console.log(this.listData);
    this.fetchApi.emit({ ...this.item, mapping: mapping, status: 'Active', id: uuidv4() });
    const sidebar = document.querySelector('ir-sidebar');
    sidebar.open = !sidebar.open;
    this._reset();
  }

  _reset() {
    this.item = {};
    this.mode = 'create';
    this.activeTab = 'General Settings';
    this.selectedItem = {};
    this.anyChanges = false;
  }

  @Listen('createNew')
  openSidebarHandler(event: CustomEvent) {
    console.log(event);
    const sidebar = document.querySelector('ir-sidebar');
    sidebar.open = !sidebar.open;
    this.loader = true;
    this.mode = 'create';
    this.activeTab = 'General Settings';
    setTimeout(() => {
      this.loader = false;
    }, 2000);
  }

  componentDidLoad() {
    // Add an event listener to the ir-topbar component
    const openSidebar = document.querySelector('ir-topbar');
    openSidebar.addEventListener('openSidebar', () => {
      console.log('openSidebar');
      const sidebar = document.querySelector('ir-sidebar');
      sidebar.open = !sidebar.open;
      this.loader = true;
      this.mode = 'create';
      this.activeTab = 'General Settings';
      setTimeout(() => {
        this.loader = false;
      }, 2000);
    });

    const dropdown = document.querySelector('ir-list-item');
    dropdown.addEventListener('openSidebar', (e: CustomEvent) => {
      if (e.detail.mode === 'edit') {
        this.mode = 'edit';
        this.selectedItem = e.detail.item;

        console.log(this.selectedItem);
        const sidebar = document.querySelector('ir-sidebar');
        sidebar.open = !sidebar.open;
      }
    });

    const modal: any = document.querySelector('ir-modal.exit');

    modal.addEventListener('confirmModal', (event: CustomEvent) => {
      console.log(event.detail);
      sidebar.open = false;
      modal.closeModal();
      this._reset();
    });

    const sidebar = document.querySelector('ir-sidebar');
    sidebar.addEventListener('irSidebarToggle', (event: CustomEvent) => {
      if (event.detail == true && this.anyChanges) {
        if (this.listData) {
          modal.openModal();
        }
      } else {
        sidebar.open = false;
        this._reset();
      }
    });
  }

  goNext() {
    if (this.activeTab == 'General Settings') {
      if (!this.item.title || !this.item.channel || !this.item.group || !this.item.property || !this.item.hotelId) {
        alert('Please fill all the fields');
      } else {
        this.activeTab = 'Mapping';
        this.loader = true;
        setTimeout(() => {
          this.loader = false;
        }, 2000);
      }
    } else if (this.activeTab == 'Mapping') {
      const IrMapping = document.querySelector('ir-mapping');
      IrMapping._onSaveMapping();
    }
  }

  _exitWithoutSave() {
    return (
      <div class="row">
        <div class="col-2 d-flex justify-content-center ">
          <ir-icon icon="ft-alert-circle warning h1"></ir-icon>
        </div>
        <div class="col-10">
          <div class="font-weight-bold">Exit without saving?</div>
          <br />
          <div class="font-size-small">All unsaved changes will be lost.</div>
        </div>
      </div>
    );
  }

  render() {
    return [
      <div id="container">
        <div class="card">
          <ir-topbar></ir-topbar>

          <ir-list-item id="ir-list-item" listData={this.listData} dropdownData={this.dropdownData}></ir-list-item>
        </div>
      </div>,
      <ir-sidebar side="right" class="font-size-small">
        <div class="container pt-1">
          <h5 class="font-weight-bold">{this.mode === 'create' ? 'Create' : 'Edit'} Channel</h5>
        </div>
        <ul class="list-group list-group-horizontal mb-2">
          {this.tabs.map(tab => (
            <li class={this.activeTab === tab ? 'active' : ''}>
              <a
                class=""
                data-mdb-ripple-color="dark"
                onClick={() => {
                  this.activeTab = tab;
                  this.loader = true;
                  setTimeout(() => {
                    this.loader = false;
                  }, 2000);
                }}
              >
                {tab}
              </a>
            </li>
          ))}
        </ul>
        {this.loader ? (
          <div class="loader-position">
            <ir-loader></ir-loader>
          </div>
        ) : (
          <span>
            {this.activeTab == 'General Settings' && <ir-general-settings data={this.selectedItem} mode={this.mode}></ir-general-settings>}
            {this.activeTab == 'Mapping' && <ir-mapping map={this.selectedItem}></ir-mapping>}
          </span>
        )}

        <div class="btn-position">
          <button type="button" class="btn btn-primary btn-sm btn-block" onClick={() => this.goNext()}>
            {this.activeTab == 'General Settings' ? 'Next' : 'Save'}
          </button>
        </div>
      </ir-sidebar>,

      <ir-modal class={'exit'}>{this._exitWithoutSave()}</ir-modal>,
    ];
  }
}
