# ir-dropdown



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                                           | Default |
| -------- | --------- | ----------- | -------------------------------------------------------------- | ------- |
| `data`   | --        |             | `{ name: ""; icon: ""; children: { name: ""; icon: ""; }[]; }` | `null`  |


## Events

| Event                 | Description | Type                  |
| --------------------- | ----------- | --------------------- |
| `dropdownItemCLicked` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ir-channel-manager](../ir-channel-manager)

### Depends on

- [ir-icon](../ir-icon)

### Graph
```mermaid
graph TD;
  ir-dropdown --> ir-icon
  ir-channel-manager --> ir-dropdown
  style ir-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
