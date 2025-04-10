
import { GiSelfLove } from "react-icons/gi";
import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const Data = ({data, handleAddFavorites}) => {

  const [isClicked, setIsClicked] = useState(false);
 

 const handleClick = () =>{
 
    handleAddFavorites(data)
    setIsClicked(true);
    toast.success(`${data.title} added to favorites!`); 
  
  
   }
  
    
    return (
    
          <tr className="border-t-2 border-t-gray-400">
      <td><img className='w-20 h-20' src={data.image} alt="" /></td>
        <td className=''>{data.title}</td>
        <td className=''>{data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td><button
  onClick={handleClick}
  disabled={isClicked}
  className={isClicked ? 'text-red-600 cursor-not-allowed' : ''}
>
  <GiSelfLove size={20} />
</button></td>
            
      </tr>
      
      
      
    );
};

export default Data;

