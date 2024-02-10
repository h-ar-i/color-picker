import { useState } from 'react'

import './App.css'

function App() {
  const [backgroundColor,setBackgroundColor] = useState('black')

  const blueButtonClick = () =>{
    setBackgroundColor('blue')
  }

  const salmonButtonClick = () =>{
    setBackgroundColor('salmon')
  }
  
  const yellowButtonClick = () =>{
    setBackgroundColor('yellow')
  }

  const redButtonClick = () =>{
    setBackgroundColor('red')
  }
  const resetButtonClick = () =>{
    setBackgroundColor('black')
  }
 

  return (
    <>
    <div className='two'>
      <div className='d-flex justify-content-center align-items-center p-5' style={{ width: '100%', height: '100vh', backgroundColor: backgroundColor }}>
      <div style={{ backgroundColor: backgroundColor, width: '650px'}} className='p-5 text-center rounded ' >
        <h1 className='text-white'> <b><u>"Background Color Changer"</u></b> </h1>
        <div className='mt-4 p-3 d-flex justify-content-center align-items-center' style={{ gap: '30px' }}>
          <button onClick={blueButtonClick} >Blue</button>
          <button onClick={salmonButtonClick} >salmon</button>
          <button onClick={yellowButtonClick} >Yellow</button>
          <button onClick={redButtonClick} >red</button>
          <button onClick={resetButtonClick} className='text-white'> <b>reset:-</b></button>
          

        </div>
      </div>
    </div>
    </div>
   
    </>
  )
}

export default App
