import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Recipe.scss'
import {BsHeartFill} from 'react-icons/bs'

import React from 'react'

function Recipe({like, delas, meals}) {
  console.log(meals);

  let params = useParams()
  const [details, setDetails]=useState({})
  const [activeTab, setActiveTab]=useState('instructions')


  const fetchDetails = async () =>{
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
    const detailData = await data.json()
    setDetails(...detailData.meals)
  }

    useEffect(()=>{
      fetchDetails();

    },[params.name])
    console.log(meals, '<-----mealai');
    console.log(meals.filter(meals=> meals.idMeal === details.idMeal).length );
    console.log(details, '<-----== details');
const log=(e)=>{
  console.log(details)

}
  return (
    <div className="detailWrapper">
        <div className="left">
          <h2>{details.strMeal}</h2>
          <img src={details.strMealThumb} alt={details.strMealThumb} />
        </div>
        <div className="info">
          <div className="buttons">

          <button className={activeTab=== 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>instructions</button>
          <button className={activeTab=== 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>ingredients</button>
          {/* <div class="heart"></div> */}
          {
           meals.filter(meals=> meals.idMeal === details.idMeal).length === 1?
           
           <div className="delas">

             <BsHeartFill  onClick={()=>delas(details)}></BsHeartFill>
           </div>
           :
           <div className="like">

             <BsHeartFill onClick={()=>like(details)}></BsHeartFill>
           </div>

          }
          </div>
          {
          activeTab==='instructions'?    
          <div className="rightIngredients">
          <h3>{details.strInstructions}</h3>
        </div>
        : <>
        <div className="right">

        <ul className="igredient">

        {Object.keys(details).map((k,i)=>{
          if(k.substring(0, 13 )=== 'strIngredient' && details[k]!=='' && details[k]!==null){
            return  <li key={i}>{details[k]}</li>
          }
        })}
        </ul>
        <ul className="measure">

        {Object.keys(details).map((k,i)=>{
          if(k.substring(0, 10 )=== 'strMeasure' && details[k]!=='' && details[k]!==null && details[k]!==" "){
            return  <li key={i}>{details[k]}</li>
          }
        })}
        </ul>
        </div>
        </>
        }
     
        </div>

      
    </div>
  )
}

export default Recipe