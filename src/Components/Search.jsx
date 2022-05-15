import './search.scss'
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'




function Search() {


    const [input, setInput]=useState('')
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault()
        setInput('')
        navigate('/searched/' + input)
    }
  return (
      
      <div className="search-container">
          <div className="navLinks">

          <Link to={'/'}>
              <p>Home</p>
          </Link>
          </div>
      <form onSubmit={submitHandler} className='formStyle' action="">
          <input onChange={(e)=>setInput(e.target.value)} type="text" value={input} placeholder='Search...' />
          <button id='button' type='submit' className="iconS"><FaSearch></FaSearch></button>
      </form>
      <div className="navLinks">

      <Link to={'/favorites'}>
              <p>Favorites</p>
          </Link>
      </div>
      </div>
  )
}

export default Search