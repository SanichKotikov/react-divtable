# Table Component

A simple sortable table (div) component for ReactJS.   
Includes base styles in `styles.scss` that can be imported separately as scss or as css (by [PostCSS](https://github.com/postcss/postcss)).

## Install

```
$ npm install --save react-divtable
```

## Usage

```js
// using an ES6 transpiler, like babel
import Table from 'react-divtable';

// if you need base styles
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
[EXAMPLES](https://github.com/SanichKotikov/react-divtable/tree/master/examples) &
[DOCS](https://github.com/SanichKotikov/react-divtable/tree/master/docs).

## License

MIT
