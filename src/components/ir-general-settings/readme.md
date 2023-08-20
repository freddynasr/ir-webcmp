# ir-general-settings



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description | Type     | Default                                                                                                                                          |
| ------------------ | ------------------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionStatus` | `connection-status` |             | `string` | `'Not connected'`                                                                                                                                |
| `data`             | `data`              |             | `any`    | `{     id: '123456',     channel: 'Channel Name',     group: 'Group',     title: 'Title',     property: 'Property',     hotelId: "hotelId",   }` |
| `mode`             | `mode`              |             | `string` | `undefined`                                                                                                                                      |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `sendToParent` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ir-channel-manager](../ir-channel-manager)

### Depends on

- [ir-channel-select](../ir-channel-select)
- [ir-input-channel](../ir-input-channel)
- [ir-icon](../ir-icon)

### Graph
```mermaid
graph TD;
  ir-general-settings --> ir-channel-select
  ir-general-settings --> ir-input-channel
  ir-general-settings --> ir-icon
  ir-channel-select --> ir-icon
  ir-channel-manager --> ir-general-settings
  style ir-general-settings fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*