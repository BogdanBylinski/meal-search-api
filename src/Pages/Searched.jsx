import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import   './cuisine.scss'
import {Link} from 'react-router-dom'


function Searched() {

    const[ searchedRecipes, setSearchedRecipes]=useState([]);
    let params =useParams()
    
    const getSearched= async (name)=>{
        const data =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        const recipes = await data.json()
        setSearchedRecipes(recipes.meals);
    }
    useEffect(()=>{
        getSearched(params.search)
    },[params.search])
 
  return (
    <div className="grid"> {
      searchedRecipes !==null?
        searchedRecipes.map(item =>
          <Link key={item.idMeal} to={'/recipe/' +item.idMeal}>
          <div className="card" >
          <img src={item.strMealThumb} alt={item.strMealThumb} />
          <h4>{item.strMeal}</h4>
          </div>
          </Link>
          ):
          <p className='missing'>

          We couldn`t find anything :(
          </p>
      }</div>
  )
}

export default Searched