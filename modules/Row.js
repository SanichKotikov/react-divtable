import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Cell from './Cell';
import { CLASS_NAME } from './const';

class Row extends Component {

    static propTypes = {
        className: PropTypes.string,
        columns: PropTypes.array.isRequired,
        row: PropTypes.object.isRequired,
        onItemClick: PropTypes.func,
    };

    render() {
        const {
            className,
            columns,
            row,
            onItemClick
        } = this.props;

        const rowClasses = classNames(`${CLASS_NAME}__row`, {
            [`${className}__row`]: !!className,
            clickable: !!onItemClick,
        });

        const onClick = onItemClick || function () {};

        return (
            <div className={rowClasses} onClick={() => onClick(row)}>
                {columns.map((column, index) => {
                    return (
                        <Cell
                            key={index}
                            className={className}
                            column={column}
                            row={row}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Row;
