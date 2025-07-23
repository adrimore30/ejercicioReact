
import {useState} from 'react'
import "./UserCard.css";
export const UserCard = ({user}) => {
    //estructura general de un hook
  const [isContacted, setIsContacted]=useState(false)
  const [alertContacted, setAlertContacted]=useState(false)

  const {id,firsName,email,image}=user

const handleClick=()=>{
    setIsContacted(!isContacted);
    setAlertContacted(!alertContacted);

     alertContacted ? alert(`ya contactaste a ${firsName}`):alert(`contacta ${firsName}`)
}
console.log(`tarjetas de ${firsName} fue renderizada`)
        
return(
    <div className='card'>
        <img className='image' src={image} alt={firsName} />
        <p className='name'>{firsName}</p>
        <p className=''>{email}</p>
        <button id={id} onClick={()=>handleClick()}>
            {
                isContacted ? 'Contactado' : 'Contactar'
               
            }
        </button>
    </div>

) 

}


export default UserCard
