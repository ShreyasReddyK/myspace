import React, { useState } from 'react'

export default function () {
    const [count,setCount] = useState(0);

    const handleClickPlus = () =>{
        setCount((val) => val+1)
    }
    const handleClickMinus = () =>{
        setCount((val) => val-1)
    }

  return (
    <div >
        <button onClick= {handleClickMinus}>-</button>
        <h4>Count:{count}</h4>
        <button onClick= {handleClickPlus}>+</button>
    </div>
  )
}
