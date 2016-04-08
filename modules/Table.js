import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { CLASS_NAME, ASC, DESC } from './const';

import Header from './Header';
import Row from './Row';

class Table extends Component {

    static defaultProps = {
        sortable: true,
    };

    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.array.isRequired,
        rows: PropTypes.array.isRequired,
        footer: PropTypes.object,
        sortable: PropTypes.bool,
        onItemClick: PropTypes.func,
        onSortChange: PropTypes.func,
    };

    getSortedRows() {
        const { columns, rows, onSortChange } = this.props;
        const sortedColumn = columns.find(col => col.order !== undefined);

        if (!sortedColumn || !!onSortChange) return rows;

        return rows.sort((a, b) => {
            const colA = a[sortedColumn.name];
            const colB = b[sortedColumn.name];

            if (colA < colB) return sortedColumn.order == ASC ? -1 : 1;
            if (colA > colB) return sortedColumn.order == ASC ? 1 : -1;

            // sub sorting by `id` if values are equal
            if (sortedColumn.name !== 'id' && 'id' in a && 'id' in b) {
                if (a.id < b.id) return -1;
                if (a.id > b.id) return 1;
            }

            return 0;
        });
    }

    updateOrder(column) {
        const currentOrder = column.order || DESC;

        this.props.columns.forEach(item => {
            if (item.name !== column.name) {
                item.order = undefined;
            }
        });

        column.order = currentOrder === DESC ? ASC : DESC;
    }

    onColumnClick(column) {
        const { onSortChange } = this.props;
        this.updateOrder(column);

        if (!!onSortChange) {
            onSortChange(column.name, column.order);
        } else {
            this.forceUpdate();
        }
    }

    render() {
        const {
            className,
            columns,
            footer,
            sortable,
            onItemClick
        } = this.props;

        const rows = this.getSortedRows();

        const wrapperClasses = classNames(`${CLASS_NAME}__wrapper`, {
            [`${className}__wrapper`]: !!className,
        });

        const bodyClasses = classNames(`${CLASS_NAME}__body`, {
            [`${className}__body`]: !!className,
        });

        const footerClasses = classNames(`${CLASS_NAME}__footer`, {
            [`${className}__footer`]: !!className,
        });

        return (
            <div className={wrapperClasses}>
                <div className={classNames(CLASS_NAME, className)}>
                    <Header
                        className={className}
                        columns={columns}
                        sortable={sortable}
                        onColumnClick={::this.onColumnClick}
                    />
                    <div className={bodyClasses}>
                        {rows.map((row, index) => (
                            <Row
                                key={index}
                                className={className}
                                columns={columns}
                                row={row}
                                onItemClick={onItemClick}
                            />
                        ))}
                    </div>
                    {!footer ? null : (
                        <div className={footerClasses}>
                            <Row
                                className={className}
                                columns={columns}
                                row={footer}
                            />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Table;
