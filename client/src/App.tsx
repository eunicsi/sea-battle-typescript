import React, { useEffect, useState } from 'react';
import './app.css'
import { Board } from './components/models/Board';
import BoardComponent from './components/UI/Board/BoardComponent';

function App() {
    const [firstBoard, setFirstBoard] = useState(new Board());
    const [secondBoard, setSecondBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []);

    const restart = () => {
        const newBoard = new Board();
        newBoard.initCells();
        setFirstBoard(newBoard);
        setSecondBoard(newBoard);
    }

    return (
        <div className="app">
            <button onClick={restart}>restart</button>
            <BoardComponent board={firstBoard}/>
            <BoardComponent board={secondBoard}/>
        </div>
    );
}

export default App;