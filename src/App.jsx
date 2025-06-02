import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './componets/header.jsx'
import { Entry } from './componets/Entry.jsx'
export function App() {
  

  return (
    <>
      <Header />
      <Entry />
    </>
  )
}


