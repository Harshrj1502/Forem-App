import React from 'react'

const Button = ({text,style,onclick}) => {
  return (
    <>
    <button className={`${style}`} onClick={onclick}>
        {text} 
    </button>
    </>
  )
}

export default Button
