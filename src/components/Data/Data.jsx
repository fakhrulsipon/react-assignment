import React, { useState } from 'react';
import { GiSelfLove } from "react-icons/gi";

const Data = ({data}) => {
    const [isClicked, setIsClicked] = useState(false)
   const handleClick = () =>{
    setIsClicked(true);
   }
    
    return (
          <tr>
      <td><img className='w-20 h-20' src={data.image} alt="" /></td>
        <td className=''>{data.title}</td>
        <td className=''>{data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td><button
          onClick={()=>handleClick(data)}
          className={`${
            isClicked && 'text-red-600 '
          }${
            isClicked && 'cursor is not allowed'
          }`}
          disabled={isClicked} // Disable the button after click
        ><GiSelfLove size={22}/></button></td>
      </tr>
    );
};

export default Data;