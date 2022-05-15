import { useEffect, useState } from "react";
import popular from './popular.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import {obj} from '../data/Rcp'
import {Link} from 'react-router-dom'


function Veggie() {

    const [veggie, setVeggie]=useState([])


    useEffect(() => {
        setVeggie(obj)
      getVeggie()
    }, [])
    const getVeggie = async ()=>{
      const check =localStorage.getItem('veggie')
      if(check){
        setVeggie(JSON.parse(check))
      }else{
        //  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50`)
        // const data = await api.json()
        // localStorage.setItem('veggie', JSON.stringify(data.recipes))
        // console.log(data);
        // setVeggie(data.recipes)
      }
      
    }
  return (

    <div className="wrapper">


        <h3>veggie picks</h3>
        <Splide options={{
            perPage:3,
            arrows:false,
            pagination:false,
            drag:'free',
            gap: '5rem',


        }
        }>

        {
            veggie.map(recipe=>

                <SplideSlide key={recipe.id} >

                  <Link to={'/recipe/' + recipe.id}>
                <div  className="card" >
                     <p>{recipe.title}</p>
                     <img src={recipe.image} alt={recipe.image} />
                     <div className="gradient"></div>
                </div>
                  </Link>
                </SplideSlide>
        )   
    }
    </Splide>
    </div>
  )
}

export default Veggie