import React from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent = ({cell, selected, click}: CellProps) => {
    return (
        <div 
            className={`
                ${selected ? 'bg-green-200' : 'bg-yellow-200'} 
                w-8 h-8 border border-black
                hover:bg-red-50
            `}
            onClick={() => click(cell)}
        >
            
        </div>
    );
};

export default React.memo(CellComponent);