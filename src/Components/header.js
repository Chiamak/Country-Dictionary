import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica} from '@fortawesome/free-solid-svg-icons'


const Header = ({changeMode, mode}) => {
    
  return (
    <div className= 'App' >
        <div className='App-title'>
            <FontAwesomeIcon icon={faEarthAmerica} size='3x' pull='left' bounce style={{color: 'red'}}/>
            <h1 style={{color : mode ? 'beige': 'teal'}}>Find your countries...</h1>
        </div>
        
        <button className='App-btn' onClick={changeMode} style = {{backgroundColor: mode ? 'beige' : 'teal'}}>
            {mode ? <p>Light</p> : <p>Dark</p>}
        </button>
    </div>
  )
}

export default Header