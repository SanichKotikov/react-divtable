import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { CLASS_NAME, ASC, DESC } from './const';

export default class Header extends Component {

    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.array.isRequired,
        sortable: PropTypes.bool,
        onColumnClick: PropTypes.func,
    };

    render() {
        const {
            className,
            columns,
            sortable,
            onColumnClick
        } = this.props;

        const headerClasses = classNames(`${CLASS_NAME}__header`, {
            [`${className}__header`]: !!className,
        });

        return (
            <div className={headerClasses}>
                {columns.map((column, index) => {

                    if (column.exclude === true) return null;

                    const isSortable = sortable !== false && column.sortable !== false;
                    const onClick = isSortable && onColumnClick || function () {};

                    const cellClasses = classNames(`${CLASS_NAME}__cell`, `${CLASS_NAME}__header-cell`, {
                        [`${className}__cell`]: !!className,
                        [`${className}__header-cell`]: !!className,
                        [column.className]: !!column.className,
                        sortable: isSortable,
                        asc: column.order === ASC,
                        desc: column.order === DESC,
                    });

                    return (
                        <div key={index} className={cellClasses} onClick={() => onClick(column)}>
                            {column.title || column.name}
                        </div>
                    );
                })}
            </div>
        );
    }
}
