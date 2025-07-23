import { useState, useEffect} from 'react'
import {UserCard} from '../userCard/UserCard'
import './Section.css';

export const Section= () => {

const [users, setUsers]=useState([])
 
 useEffect(()=>{


   fetch('https://dummyjson.com/users')
   .then(res=>res.json())
   .then(data=>{
        console.log(data.users),
        setUsers(data.users)
   })
})



return (

<div>
    
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

  


