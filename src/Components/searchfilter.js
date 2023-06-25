import React from 'react'

const Search_filter = ({onChange, input, handleChange, inputs}) => {

  return (
    <div className='Search-bar'>
      <input id='inp' type='text' placeholder='search..' onChange={(e) => onChange(e.target.value)} value={input}/>
      <select name='select' id='s1' onChange={(e)=> handleChange(e.target.value)} value={inputs}>
        <option value=''>Region</option>
        <option value='Americas'>Americas</option>
        <option value='Africa'>Africa</option>
        <option value='Oceania'>Oceania</option>
        <option value='Europe'>Europe</option>
        <option value='Asia'>Asia</option>
      </select>
    </div>
  )
}

export default Search_filter