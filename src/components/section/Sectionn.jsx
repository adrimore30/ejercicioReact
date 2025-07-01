
import './section.css';
import { useState, useEffect} from 'react'
import {UserCard} from '../UserCard/UserCard'
import  ensalada from '../../assets/ensalada.png'
import vegetall from '../../assets/vegetal.png'
import verdduras from '../../assets/verduras.png'



const users =[
  {
    id:1,
    name:'ensalada',
    description:'Ensalada rica y nutritiva',
    image:ensalada
  },
  {
    id:2,
    name:'vegetal',
    description:'Come vegetales son muy nutritivos',
    image:vegetall

  },
  {
    id:3,
    name:'verduras',
    description:'No comas chatarra come bien',
    image:verdduras

  }
]
export const Section = () => {

const [count, setCount]= useState(0)
 //console.log('antes dek useEffect');
 useEffect(()=>{
   //console.log('useEffect ejecutandose');

   fetch('https://dummyjson.com/users')
   .then(res=>res.json())
   .then(data=>console.log(data.users))
   //console.log(resultado)
 },[count])

 const handleClick=()=>{
  setCount(count + 1)
 }
 //console.log('despues del useEffect');

    return (

<div>
    <h2>{count}</h2>
    <button onClick={handleClick}>Contador</button>
      <section>
        {
          users.map((user)=>{
            return(
              <UserCard key ={user.id} user={user}/>
            )
        })
      }
      </section>
      </div>
    )
    }

  


