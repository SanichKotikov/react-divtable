# Table Component

A simple ReactJS Table component, based on `div`.   
Include base styles in `styles.scss` (import separately).

## Install

```
$ npm install --save react-divtable
```

## Usage

```js
// using an ES6 transpiler, like babel
import Table from 'react-divtable';

// if you need base styles & using scss
import 'react-divtable/styles.scss';

const TEST_ROWS = [
    { id: 1, title: 'React', date: 1458813079000 },
    { id: 2, title: 'Angular', date: 1459945334611 },
];

columns = [
    { name: 'id', title: '#' },
    { name: 'title' },
    { name: 'date', render: val => (new Date(val)).toDateString() }
];

<Table columns={this.columns} rows={TEST_ROWS} />
```

For more detail, see:
[EXAMPLES](https://github.com/cdrpro/react-divtable/tree/master/examples) &
[DOCS](https://github.com/cdrpro/react-divtable/tree/master/docs).

## License

MIT
