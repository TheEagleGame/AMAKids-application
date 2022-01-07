import React, {useState} from "react";
import {Cell} from "./components/Cell/Cell";
import {getRandomInt} from "./helpers";
import {MovesChain} from "./components/MovesChain/MovesChain";
import {Button} from "./components/Button/Button";
import {field, movesArray} from "./data";
import './App.scss';

const App = () => {
  const [startPos, setStartPos] = useState()
  const [finishPos, setFinishPos] = useState()
  const [answer, setAnswer] = useState(null)
  const [movesChainArr, setMovesChainArr] = useState([])
  const [isMovesLoading, setIsMovesLoading] = useState(true)
  function generateStartPos() {
    setStartPos(null)
    setFinishPos(null)
    setAnswer(null)

    const randomCell = getRandomInt(9)
    setStartPos(randomCell)
    calculateMovesChain(randomCell)
  }
  const calculateMovesChain = (position) => {
    const moves = []
    while (moves.length < 10) {
      const randomMove = getRandomInt(4)
      switch (movesArray[randomMove]) {
        case 'up':
          if (position - 3 >= 0) {
            moves.push('up')
            position = position - 3;
          }
          break;
        case 'right':
          if (position % 3 + 1 < 3) {
            moves.push('right')
            position = position + 1;
          }
          break;
        case 'bottom':
          if (position + 3 < field.length) {
            moves.push('bottom')
            position = position + 3;
          }
          break;
        case 'left':
          if (position % 3 - 1 >= 0) {
            moves.push('left')
            position = position - 1;
          }
          break;
        default:
          break;
      }
    }
    setMovesChainArr(moves)
    setFinishPos(position)
  }
  return (
    <div className='app'>
      <div className="field">
        {field.map( (item, index) => {
          return (
            <Cell index={index}
                  setAnswer={setAnswer}
                  isActive = { startPos === index }
                  rightAnswer={ answer !== null && finishPos === index }
                  wrongAnswer={ answer !== null && answer === index && answer !== finishPos }
                  answered={ answer !== null}
                  isMovesLoading={isMovesLoading}
                  key={item}
            />
          )
        })}
      </div>
      <Button handleClick={generateStartPos}>Click me</Button>
      <MovesChain movesChainArr={movesChainArr} setIsMovingLoading={setIsMovesLoading} />
    </div>
  );
}

export default App;
