
import './section.css';
import ensalada from '../../assets/ensalada.png'
import vegetall from '../../assets/vegetal.png'
import verdduras from '../../assets/verduras.png'
//import { useState } from 'react';

import {UserCard}from '../UserCard/UserCard'

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
 // const [count, setCount]=useState(0)
//  console.log(count)

    return (
      <section>
        {
          users.map((user)=>{
            return(
              <UserCard key ={user.id} user={user}/>
            )
        })
      }
      </section>
    )
    }

  


