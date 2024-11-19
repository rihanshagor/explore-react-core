import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </>
  )
}
function Person(){
  const age = 25;
 return <h4>I am a person age {age}</h4>
}

export default App
