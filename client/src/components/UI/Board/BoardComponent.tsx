import React, { FC, useCallback, useState } from 'react';
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';
import CellComponent from '../Cell/CellComponent';
import './index.css'

interface BoardProps {
    board: Board;
}

const BoardComponent: FC<BoardProps> = ({board}) => {
    const [selectedCell, setSelectedCell] = useState<Cell>();

    const click = useCallback((cell: Cell) => {
        setSelectedCell(cell);
    }, [])

    return (
        <div className="board">
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