# ir-mapping



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type  | Default |
| -------- | --------- | ----------- | ----- | ------- |
| `map`    | `map`     |             | `any` | `{}`    |


## Events

| Event                 | Description | Type               |
| --------------------- | ----------- | ------------------ |
| `sendMappingToParent` |             | `CustomEvent<any>` |


## Methods

### `_onSaveMapping() => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [ir-channel-manager](../ir-channel-manager)

### Depends on

- [ir-icon](../../ir-icon)
- [ir-modal](../../ir-modal)

### Graph
```mermaid
graph TD;
  ir-mapping --> ir-icon
  ir-mapping --> ir-modal
  ir-modal --> ir-icon
  ir-modal --> ir-button
  ir-channel-manager --> ir-mapping
  style ir-mapping fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
