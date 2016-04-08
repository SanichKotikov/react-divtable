import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { CLASS_NAME } from './const';

class Cell extends Component {

    static propTypes = {
        className: PropTypes.string,
        column: PropTypes.object.isRequired,
        row: PropTypes.object.isRequired,
    };

    render() {
        const { className, column, row } = this.props;
        if (column.exclude === true) return null;

        const cellClasses = classNames(`${CLASS_NAME}__cell`, {
            [`${className}__cell`]: !!className,
            [column.className]: !!column.className,
        });

        return (
            <div className={cellClasses}>
                {column.render
                    ? column.render(row[column.name], row)
                    : row[column.name] !== undefined ? row[column.name] : ''
                }
            </div>
        );
    }
}

export default Cell;
