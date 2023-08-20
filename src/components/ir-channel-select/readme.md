# ir-channel-select



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type      | Default |
| ------------- | ------------- | ----------- | --------- | ------- |
| `data`        | --            |             | `any[]`   | `[]`    |
| `icon`        | `icon`        |             | `boolean` | `false` |
| `label`       | `label`       |             | `string`  | `''`    |
| `placeholder` | `placeholder` |             | `string`  | `''`    |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `irSelect` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [ir-general-settings](../ir-general-settings)

### Depends on

- [ir-icon](../ir-icon)

### Graph
```mermaid
graph TD;
  ir-channel-select --> ir-icon
  ir-general-settings --> ir-channel-select
  style ir-channel-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*