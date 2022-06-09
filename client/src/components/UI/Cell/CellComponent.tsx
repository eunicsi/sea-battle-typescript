import React, { FC } from 'react';
import { Cell } from '../../models/Cell';
import './index.css'

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <div className={`cell ${selected ? 'selected' : ''}`}
            onClick={() => click(cell)}
        >
            
        </div>
    );
};

export default React.memo(CellComponent);