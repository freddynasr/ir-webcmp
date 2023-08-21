# ir-channel-manager



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description | Type                                                                                                                                | Default                                                                                                                                                                                                                                                                          |
| -------------- | --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dropdownData` | --        |             | `{ name: string; icon: string; children: { name: string; icon: string; }[]; }`                                                      | `{     name: 'Action',     icon: '',     children: [       {         name: 'Edit',         icon: 'ft-edit',       },       {         name: 'Delete',         icon: 'ft-trash',       },       {         name: 'Disable',         icon: 'ft-alert-triangle',       },     ],   }` |
| `listData`     | --        |             | `{ title: string; channel: string; status: string; id: string; group: string; property: string; hotelId: string; mapping: any; }[]` | `[]`                                                                                                                                                                                                                                                                             |


## Dependencies

### Depends on

- [ir-icon](../ir-icon)
- [ir-topbar](../ir-topBar)
- [ir-list-item](../ir-listItems)
- [ir-sidebar](../ir-sidebar)
- [ir-loader](../ir-loader)
- [ir-general-settings](../ir-general-settings)
- [ir-mapping](../ir-mapping)
- [ir-modal](../ir-modal)

### Graph
```mermaid
graph TD;
  ir-channel-manager --> ir-icon
  ir-channel-manager --> ir-topbar
  ir-channel-manager --> ir-list-item
  ir-channel-manager --> ir-sidebar
  ir-channel-manager --> ir-loader
  ir-channel-manager --> ir-general-settings
  ir-channel-manager --> ir-mapping
  ir-channel-manager --> ir-modal
  ir-topbar --> ir-icon
  ir-list-item --> ir-dropdown
  ir-dropdown --> ir-icon
  ir-sidebar --> ir-icon
  ir-general-settings --> ir-select
  ir-general-settings --> ir-input-text
  ir-general-settings --> ir-loader
  ir-general-settings --> ir-icon
  ir-mapping --> ir-icon
  style ir-channel-manager fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
