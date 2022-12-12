import { useState } from 'react'
import './App.css'
import { Forecast } from './components/Forecast/index';
import axios from 'axios';


function App() {
  
  return (
    <div className="App">
      <Forecast />
    </div>
  )
}

export default App
