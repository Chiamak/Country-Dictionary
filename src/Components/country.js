import React, {useState, useEffect, Fragment} from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica } from '@fortawesome/free-solid-svg-icons';

const Country = () => {
  const[country, setCountry] = useState([]);
  const[loading, setLoading] = useState(true);
  const{name} = useParams()

  useEffect(() => {
    const loadCountry = async()=>{
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();
    // console.log(data);
    setCountry(data);
    setLoading(false);
  }    
    loadCountry();
  }, [name])
  
  return (
    <div className='A-country'>
      {loading && <FontAwesomeIcon icon={faEarthAmerica} size='3x' beatFade color='navajowhite'/>}
      <Link to={'/'} className='A-link'>Back</Link>
      {Array.from(country).map((count) =>(
        <Fragment key={count.name.common} >
          <div className='A-section'>
            <img src={count.flags.png} alt={count.flags.alt} />
            <div className='A-country-details'>
              <h1>Name : <span className='sp1'>{count.name.official}</span></h1>
              <h1>Capital: <span className='sp1'>{count.capital}</span></h1>
              <h1>Continent: <span className='sp1'>{count.continents}</span></h1>
              <h1>Region: <span className='sp1'>{count.region}</span></h1>
              {count.coatOfArms.svg !== undefined || count.coatOfArms.svg !== null ? 
                (<h1>Coat of Arms: <img src={count.coatOfArms.svg} alt='coat of arms' style={{width: 30, height: 20}}/></h1>)
                : (<h1>Coat of Arms Not Available</h1>) }
              <h1>Population: <span className='sp1'>{count.population}</span></h1>
            </div>            
          </div>
        </Fragment>
      ))}
    </div>
  )
}

export default Country