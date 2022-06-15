import React, { useCallback, useEffect, useState } from 'react';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponent from './CellComponent';

interface BoardProps {
    board: Board;
}

const BoardComponent = ({board}: BoardProps) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);
   
    useEffect(() => {
        setSelectedCell(null);
    }, [board])

    const click = useCallback((cell: Cell) => {
        setSelectedCell(cell);
    }, [])

    return (
        <div className="w-80 h-80 flex-wrap flex">
            {board.cells.map(row => 
                row.map(cell => 
                    <CellComponent 
                        key={cell.id} 
                        cell={cell}
                        click={click}
                        selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
                    />
                )
            )}
        </div>
    );
};

export default BoardComponent;