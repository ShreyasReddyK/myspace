import React, { useState } from 'react'
import Card from '../components/Card'
import apple from '../assets/appleimg.png'

function Fruits() {
    const [fruit,setFruit] = useState()

    console.log(fruit)

  return (
    <div>
        <Card 
        text='this is an apple' 
        source = {apple}
        selected = {fruit == 'apple'}
        onClick = {() => setFruit('apple')}/>

    </div>
  )
}

export default Fruits