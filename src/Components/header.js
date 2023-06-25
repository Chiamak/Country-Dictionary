import React from 'react'


const Header = ({changeMode, mode}) => {
    
  return (
    <div className= 'App' >
        <div className='App-title'>
            <h1 style={{color : mode ? 'navajowhite': 'teal'}}>M-Country Dictionary</h1>
        </div>
        
        <button className='App-btn' onClick={changeMode} style = {{backgroundColor: mode ? 'navajowhite' : 'teal'}}>
            {mode ? <p>Light</p> : <p>Dark</p>}
        </button>
    </div>
  )
}

export default Header