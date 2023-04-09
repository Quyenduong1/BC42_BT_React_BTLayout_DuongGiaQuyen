import React, {useState} from 'react'

function Search({onSearch}) {
  const [search, setSearch] = useState("");

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }



  return (
    <div>
      <div className='w-25 d-flex'>
          <input value={search} onChange={handleChange} className='form-control' type="text" placeholder='Search By Name' />
          <button onClick={() => onSearch(search)} className='btn btn-success ms-2'>Search</button>
      </div>
    </div>
  )
}

export default Search