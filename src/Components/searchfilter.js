import React from 'react'

const Search_filter = ({onChange, input, handleChange}) => {

  return (
    <div className='Search-bar'>
      <input type='text' placeholder='Search..' onChange={(e) => onChange(e.target.value)} value={input}/>
      <select name='select' id='s1' onChange={(e)=> handleChange(e.target.value)} value={input}>
        <option disabled={true} value=''> Filter by</option>
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