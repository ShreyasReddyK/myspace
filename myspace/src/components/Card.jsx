import React from 'react'
import styled from 'styled-components'


function Card(params) {
  return (
    <Fancycard>
      <p>{params.text}</p>
      <img draggable='false' src={params.source} alt={params.name} />
      
    </Fancycard>
  )
}

const Fancycard = styled.div`

@keyframes pulse {
  from, to {
    scale: 1;
  }
  
  50% {
    scale: 1.08;
  }
}


width: 20rem;
aspect-ratio: 2/3;
border-style: solid;
border-radius: 1rem;
overflow: hidden;

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;    
  }
    :hover {
      animation: pulse 800ms ease-in-out;
    
    }
`


export default Card