import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import './App.css';
import Countries from './Components/countries';
import Country from './Components/country';
import Error from './Components/error';


const App = () => {
    const[mode, setMode] = useState(true);
    const changeMode = () =>{
        document.body.classList.toggle("dark");
        localStorage.setItem(
            "dark",
            document.body.className
        );
        setMode((current) => !current);
    };
    useEffect(() => {
      if(localStorage.getItem("dark")){
        document.body.classList.add("dark");
      }
    }, [])
    
  return (
    <Router>
        <Header changeMode={changeMode} mode={mode}/>
        <Routes>
          <Route path='/' element= {<Countries mode={mode}/>} />
          <Route path='/:name' element={<Country/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
    </Router>
  )
}

export default App
