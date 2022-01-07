import React from "react";
import './Cell.scss';
import classNames from "classnames";


export const Cell = ({ isActive, index, setAnswer, rightAnswer, wrongAnswer, isMovesLoading, answered }) => {
  const cellClasses = classNames('square', {
    'square_active': isActive,
    'square_right': rightAnswer,
    'square_wrong': wrongAnswer,
    'square_disable': isMovesLoading || answered
  })
    return (
    <div className={cellClasses}
       onClick={() => setAnswer(index)}>
    </div>
    )
}