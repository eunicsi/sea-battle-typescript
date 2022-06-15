import React, { useEffect, useState } from 'react';
import './index.css'
import { Board } from './components/models/Board';
import BoardComponent from './components/UI/BoardComponent';
import AvailableShips from './components/UI/AvailableShips';

function App() {
    const [firstBoard, setFirstBoard] = useState(new Board());
    const [secondBoard, setSecondBoard] = useState(new Board());

    useEffect(() => {
        restart();
    }, []);

    const restart = () => {
        const newFirstBoard = new Board();
        const newSecondBoard = new Board();
        newFirstBoard.initCells();
        newSecondBoard.initCells();
        setFirstBoard(newFirstBoard);
        setSecondBoard(newSecondBoard);
    }

    return (
        <div className="w-screen h-screen flex flex-row justify-evenly items-center bg-slate-300 bg-gradient-to-tl from-indigo-300">
            <AvailableShips />
            <div className="w-screen h-screen flex flex-col justify-evenly items-center">
                <button onClick={restart}>restart</button>
                <BoardComponent board={firstBoard}/>
                <BoardComponent board={secondBoard}/>
            </div>
        </div>
    );
}

export default App;