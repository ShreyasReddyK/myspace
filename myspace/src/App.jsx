import './App.css'
import Card from './components/Card'
import apple from './assets/appleimg.png'
import styled from 'styled-components'


function App() {

  return (
    <>
      <Card name="apple" source={apple} text="this is an apple"/>
    </>
  )
}

export default App
