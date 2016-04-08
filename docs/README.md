# Table

* **className**: (string) additional custom class name.
* **columns**: (required) array of [column](#column) objects.
* **rows**: (required) array of objects.
* **footer**: (object) footer row.
* **sortable**: (bool) enable/disable sorting. Sortable by default.
* **onItemClick(row)**: (func) handler of click on a row.
* **onSortChange(column, order)**: (func) handler of click on a sortable column.

### Column

* **name**: (string, required) property's name of row object.
* **title**: (string) caption of table's column.
* **exclude**: (bool) exclude a column from render.
* **sortable**: (bool) enable/disable sorting for a column. Sortable by default.
* **order**: (ASC or DESC) sorting direction. `import { ASC, DESC } from 'react-divtable'`
* **className**: (string) additional custom class name for a column.
* **render(val, row)**: (func) custom render function.
