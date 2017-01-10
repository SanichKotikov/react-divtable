import React, { Component } from 'react';
import { render } from 'react-dom';

import './index.css';

import Table, { ASC, DESC } from 'react-divtable';
import 'react-divtable/styles.scss';

import './table.css';

const TEST_ROWS = [
    { id: 1, title: 'React', date: 1458813079000 },
    { id: 2, title: 'Angular', date: 1459945334611 },
    { id: 3, title: 'Angular 2', date: 1459945334611 },
    { id: 5, title: 'Native', date: 1459945386073 },
    { id: 99, title: 'Something else...', date: 1353813079000 },
];

const TEST_ROWS2 = [
    { id: 1, a: 456, b: 635, c: 682 },
    { id: 2, a: 100, b: 99, c: 33 },
    { id: 3, a: 283, b: 238, c: 123 },
];

class App extends Component {

    columns = [
        { name: 'id', title: '#' },
        { name: 'title' },
        {
            name: 'date',
            order: DESC,
            render: val => (new Date(val)).toDateString()
        }
    ];

    columns2 = [
        { name: 'id', title: 'Index' },
        { name: 'a', title: 'Value A', className: 'right' },
        { name: 'b', title: 'Value B', className: 'right' },
        { name: 'c', title: 'Value C', className: 'right' },
    ];

    constructor(props) {
        super(props);

        this.state = {
            'example1-row': null,
            'example2-column': null,
        };

        this.rows2 = TEST_ROWS2.concat();
        this.footer2 = this.createFooterRow();
    }

    onRowClick(row) {
        this.setState({ 'example1-row': row });
    }

    sortHandler(column, order) {
        // Your custom sort function here,
        // where you have to update this.rows2 and call forceRender.
        this.setState({ 'example2-column': { column: column, order: order } });
    }

    createFooterRow() {
        const footer = {};

        for (let i = 0; i < this.rows2.length; i++) {
            const row = this.rows2[i];

            for (const name in row) {
                if (name === 'id') {
                    if (!(name in footer)) footer.id = 'Total';
                    continue;
                }

                if (!(name in footer)) footer[name] = 0;

                footer[name] += +row[name];
            }
        }

        return footer;
    }

    render() {
        return (
            <div className="app">
                <h1>Table Component</h1>
                <h4>Example #1</h4>
                <p>Using columns, rows and onItemClick.</p>
                <Table
                    columns={this.columns}
                    rows={TEST_ROWS}
                    onItemClick={::this.onRowClick}
                />
                <p>Row: {JSON.stringify(this.state['example1-row'])}</p>
                <h4>Example #2</h4>
                <p>Using className and onSortChange also. <br/>
                    <em>Note: sorting doesn't work because you need your own sort function.</em></p>
                <Table
                    className='my-table'
                    columns={this.columns2}
                    rows={this.rows2}
                    onSortChange={::this.sortHandler}
                    footer={this.footer2}
                />
                <p>Column: {JSON.stringify(this.state['example2-column'])}</p>
            </div>
        );
    }
}

render(<App />, document.getElementById('root'));
