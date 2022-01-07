import React, {useEffect, useState} from "react";
import classNames from "classnames";
import Arrow from './../../assets/arrow.png';
import './MovesChain.scss';


export const MovesChain = ({movesChainArr, setIsMovingLoading}) => {
  const [displayedArrows,setDisplayedArrows] = useState(0)
  useEffect( () => {
    if (movesChainArr.length > 0) {
      if (displayedArrows < movesChainArr.length) {
        setTimeout(() => setDisplayedArrows(displayedArrows + 1), 500)
      } else {
        setIsMovingLoading(false)
      }
    }
  })
  return (
    <div className='moves'>
      {movesChainArr.map( (item,index) => {
        let arrowClasses = classNames('arrow',{
          'arrow_up': item === 'up',
          'arrow_right': item === 'right',
          'arrow_bottom': item === 'bottom',
          'arrow_hidden': displayedArrows < index
        })
        let movesItemClasses = classNames('moves__item', {
          'moves__item_active': displayedArrows === index
        })
        return (
          <div className={movesItemClasses} key={index}>
            <img src={Arrow}
                 className={arrowClasses}
                 alt='arrow'
            />
          </div>
        )
      })}
    </div>
  )
}

