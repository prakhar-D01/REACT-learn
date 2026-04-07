import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter]= useState(15)

  //let counter=5

  const addValue=()=>{
    //counter=counter+1;
    setCounter(counter+1);
  }

  const remValue=()=>{
    setCounter(counter-1); 
  }

  return (
    <>
      <h1> chai aur react</h1>
      <h2>counter value: {counter}</h2>


      <button onClick={addValue}>add value {counter}</button>
      <br/>
      <button onClick={remValue}>remove value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
