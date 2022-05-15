import { useEffect, useState } from "react";
import popular from './popular.scss'
import category from './category.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import {obj} from '../data/Rcp'
import { Link } from 'react-router-dom';
import rand from "../StaticComponents/random";
import {motion} from 'framer-motion'



function Popular() {

    const [popular, setPopular]=useState([])


    const getPopular = async ()=>{
          let search = obj[rand(1, 25)].strArea
          console.log(search);
          const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`)
          const data = await api.json()
          console.log(data.meals, 'data');
          setPopular([...popular, ...data.meals])
          console.log(popular);
        
       
      }
   
      useEffect(() => {
        getPopular()
       
      }, [])

      // while (popular.length<=10) {
      //   getPopular()
      // }
   return (
    <motion.div className="grid" 
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity: 0}}
      transition={{duraction: 0.5}}
    >

    {
        popular.map(item =>
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

export default Popular