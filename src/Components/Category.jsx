import { useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
import { Rcp } from '../data/Category';



function Category() {
    const [category, setCategory]=useState([])


  
    // const getCategory = async ()=>{
    //   const check =localStorage.getItem('category')
    //   if(check){
    //     setCategory(JSON.parse(check))
    //   }else{
    //      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    //     const data = await api.json()
    //     setCategory(data.meals)
    //   }
      
    // } 
     useEffect(() => {
       setCategory(Rcp)
      // getCategory()
    }, [])
  return (
    <div className="wrapper">
       <Splide options={{
            perPage:6,
            arrows:false,
            pagination:false,
            drag:'free',
            gap: '1rem',
        }
        }>

      {
          category.map((item,index)=> 
          <SplideSlide key={index} >
              <div  className='list'>
          <NavLink  to={`/cuisine/${item.strArea}`}>
          <div className='containeris'>
              <h4>{item.strArea}</h4>
          </div>
          </NavLink> 
      </div>
          </SplideSlide>
          )
      }
      </Splide>
    {/* <div  className='list'>
        <NavLink to={'/cuisine/Italian'}>
        <div className='containeris'>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </div>
        </NavLink>
        <NavLink to={'/cuisine/American'}>
        <div className='containeris'>
            <FaHamburger/>
            <h4>American</h4>
        </div>
        </NavLink>
        <NavLink to={'/cuisine/Thai'}>
        <div className='containeris'>
            <GiNoodles/>
            <h4>Thai</h4>

        </div>
        </NavLink>
        <NavLink to={'/cuisine/Japanese'}>
        <div className='containeris'>
            <GiChopsticks/>
            <h4>Japanese</h4>

        </div>
        </NavLink>

    </div> */}
      </div>
  )
}

export default Category