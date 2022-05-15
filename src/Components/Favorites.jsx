import { motion } from 'framer-motion'
import React, { useEffect,useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import   '../Pages/cuisine.scss'
import  '../Pages/Recipe';

function Favorites({meals}) {
    const [favorites, setFavorites]= useState([]);
    let params =useParams()


    // const getCousine= async (name)=>{
    //     const data =await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    //     const recipes = await data.json()
    //     set(recipes.results);
    // }

    // useEffect(() => {
    //    getCousine(params.type)
    //    console.log(params.type);
    // }, [params.type])


  return (
      <motion.div className="grid" 
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity: 0}}
        transition={{duraction: 0.5}}
      >

      {
         meals.length >0? meals.map(item =>
              <Link to={'/recipe/' + item.idMeal}>
            <div className="card" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMealThumb} />
            <h4>{item.strMeal}</h4>
            </div>
            </Link> 
            ):
            <div className="missing">

            <h2>You dont have favorite dishes</h2>
            </div>
        }
        </motion.div>
  )
}

export default Favorites