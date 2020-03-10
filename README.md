```
{
  filters: [
    {
      key: 'name',
      dataType: 'string',
      values: ['Underbelly', 'Dockyard'], // OR
      operator: 'contains_any_text',
    },
    {
      key: 'status',
      dataType: 'string',
      values: ['Underbelly'], // OR
      operator: 'contains_any_text',
    },
  ]
}
```
