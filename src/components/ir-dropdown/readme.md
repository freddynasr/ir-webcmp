# ir-dropdown



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type                                                                           | Default |
| -------- | --------- | ----------- | ------------------------------------------------------------------------------ | ------- |
| `data`   | --        |             | `{ name: string; icon: string; children: { name: string; icon: string; }[]; }` | `null`  |


## Events

| Event                 | Description | Type                  |
| --------------------- | ----------- | --------------------- |
| `dropdownItemCLicked` |             | `CustomEvent<string>` |


## Dependencies

### Used by

 - [ir-list-item](../ir-listItems)

### Depends on

- [ir-icon](../ir-icon)

### Graph
```mermaid
graph TD;
  ir-dropdown --> ir-icon
  ir-list-item --> ir-dropdown
  style ir-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
