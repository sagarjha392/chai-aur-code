import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj ={
    name: "Sagar Gmail",
    email:"sagarjha392@gmail.com",
    age: 21,
}
  let myObj2 ={
    name: "Sagar Outlook",
    email:"sagarjha365@outlook.com",
    age: 21,
}

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card  username="Sagarjha392" someObj={myObj}/>
    <Card username="Skjha392" someObj={myObj2} />
    <Card/>
    </>
  )
}

export default App
