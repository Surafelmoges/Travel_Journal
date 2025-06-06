import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from './componets/header.jsx'
import mount from '../images/mount.jpg'
import markImage from "/images/mark.jpg";
import Data from './componets/Data.js'
import Entry  from './componets/Entry.jsx'

export default function App() {
  
const dataElement = Data.map((entry)=> {

  return (
      <Entry 
      key={entry.id}
         {...entry}
      />
  )


})
  return (
    <>
      <Header />
          {dataElement}
    </>
  )
}


