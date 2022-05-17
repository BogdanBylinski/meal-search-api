import {  Route,Routes, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine"
import Home from "./Home"
import Recipe from "./Recipe"
import Searched from "./Searched"
import {AnimatePresence} from 'framer-motion'
import { useEffect, useState } from "react"
import Favorites from "../Components/Favorites"

function Pages() {
  const location =useLocation()
  const [data1, setData]=useState([])
  const [allMeals, setAllMeals]=useState([])
  const [meal, setMeal]=useState([])
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('meals'));
    if (data === null){
      localStorage.setItem('meals',JSON.stringify([]))
      setMeal([]);
    }else
    {
      setMeal([...data]);
   
      
    }
  },[])

  const like=(e)=>{
    console.log(e.idMeal);
    let local = localStorage.getItem('meals');
    // console.log(`${e}`);
    const filtras = JSON.parse(local).filter(data => data.idMeal === e.idMeal )
    console.log(filtras);
    // console.log((JSON.parse(local).filter(e => e.id === `${e}`)).length);
    if ((JSON.parse(local).filter(data => data.idMeal === e.idMeal)).length > 0) {
      console.log('has');
      console.log(meal);
    }
    else{

      const arr = [...JSON.parse(local), e]
      window.localStorage.setItem('meals',JSON.stringify(arr))
      let new1 = localStorage.getItem('meals');
      setMeal(...[JSON.parse(new1)])

    }

    
   }
   const delas=(e)=>{
    let local = localStorage.getItem('meals');
    console.log(JSON.parse(local, 'delas'));

    const filtras = JSON.parse(local).filter(data => data.idMeal !== e.idMeal )
    console.log(filtras , 'filtras') ;
    window.localStorage.setItem('meals', JSON.stringify(filtras))
    let new1 = localStorage.getItem('meals');
    setMeal(...[JSON.parse(new1)])
    
   }



  return (
    <AnimatePresence exitBeforeEnter>

    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home ></Home>}></Route>
      <Route path="/meal-search-api" element={<Home ></Home>}></Route>
      <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      <Route path="/searched/:search" element={<Searched  />}></Route>
      <Route path="/recipe/:name" element={<Recipe delas={delas} like={like} meals={meal} ></Recipe>}></Route>
      <Route path="/favorites" element={<Favorites like={like} meals={meal} />}></Route>
    </Routes>
    </AnimatePresence>

  )
}

export default Pages