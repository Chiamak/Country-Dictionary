import { faEarthAmerica} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Searchfilter from './searchfilter';


const Countries = ({mode}) => {
    const[loading, setLoading] = useState(true);
    const[countries, setCountries] = useState([]);
    const[input, setInput] = useState('');
    const[inputs, setInputs] = useState('');
    const[filtered, setFiltered] = useState([]);


    const loadCountries= async ()=>{
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json();
        setCountries(data);
        // const result = Array.isArray(data);
        setLoading(false);
        // console.log(result);http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_ACCESS_KEY}
    }
    useEffect(() => {
        loadCountries();
    }, [])
    
    const onChange = (val) =>{
      // val.preventDefault();
      setInput(val);

      if(input){
        const filteredCountries = countries.filter((country)=>{
          return(
            Object.values(country.name.common).join('').toLowerCase().includes(val.toLowerCase())
          );
        })
        setFiltered(filteredCountries)
      } else{
        setFiltered(countries)
      }
  }

  const handleChange = (vals) =>{
    setInputs(vals);
    if(vals){
      const filterRegion = countries.filter((country)=>{
        return(
          Object.values(country.region).join('').toLowerCase().includes(vals.toLowerCase())
        )
      })
      setFiltered(filterRegion);
    } else{
      setFiltered(countries);
    }
  }
    
  return (
    <div className='Countries'>
        <Searchfilter onChange={onChange} input={input} handleChange={handleChange} inputs={inputs}/>
            <div className='Countries-body'>
              {loading && <FontAwesomeIcon icon={faEarthAmerica} size='3x' beatFade color='yellow'/>}
              {input.length > 0 || inputs.length ? (
              Array.from(filtered).map((country) =>(
                <Link to={`/${country.name.common}`} key={country.name.common} className='Linkin'>
                  <div className='country' style={{ backgroundColor: mode ? 'navajowhite' : 'teal', color: mode ? 'red' : 'navajowhite'}}>
                    <img src={country.flags.png} alt={country.capital}/>
                    <h1>Country: <span className='sp'>{country.name.common}</span></h1>
                    <h1>Capital: <span className='sp'>{country.capital}</span></h1>
                    <h1>Region: <span className='sp'>{country.region}</span></h1>
                    <h1>Population: <span className='sp'>{country.population}</span></h1>
                  </div>                   
                </Link>
                )
              )) : (
                Array.from(countries).map((country) =>(
                  <Link to={`/${country.name.common}`} key={country.name.common}className='Linkin'>
                    <div className='country' style={{ backgroundColor: mode ? 'navajowhite' : 'teal', color: mode ? 'red' : 'navajowhite'}}>
                      <img src={country.flags.png} alt={country.capital}/>
                      <h1>Country: <span className='sp'>{country.name.common}</span></h1>
                      <h1>Capital: <span className='sp'>{country.capital}</span></h1>
                      <h1>Region: <span className='sp'>{country.region}</span></h1>
                      <h1>Population: <span className='sp'>{country.population}</span></h1>
                    </div>   
                  </Link>
                )
              )
              )} 
            </div>
    </div>
  )
}

export default Countries