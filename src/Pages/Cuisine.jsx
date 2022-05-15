import { motion } from 'framer-motion'
import React, { useEffect,useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import   './cuisine.scss'
import  './Recipe';


function Cuisine() {
    const [cuisine, setCusine]= useState([]);
    let params =useParams()


    const getCousine= async (name)=>{
        const data =await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
        const recipes = await data.json()
        console.log(recipes);
        setCusine(recipes.meals);
    }

    useEffect(() => {
       getCousine(params.type)
       console.log(params.type);
    }, [params.type])


  return (
      <motion.div className="grid" 
        animate={{opacity:1}}
        initial={{opacity:0}}
        exit={{opacity: 0}}
        transition={{duraction: 0.5}}
      >

      {
          cuisine.map(item =>
              <Link to={'/recipe/' + item.idMeal}>
            <div className="card" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMealThumb} />
            <h4>{item.strMeal}</h4>
            </div>
            </Link>
            )
        }
        </motion.div>
  )
}

export default Cuisine