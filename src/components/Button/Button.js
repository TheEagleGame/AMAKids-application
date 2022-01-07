import React from "react";
import './Buton.scss'

export const Button = ({children, handleClick}) => {
  return (
    <button className='button' onClick={handleClick}>
      {children}
    </button>
  )
}