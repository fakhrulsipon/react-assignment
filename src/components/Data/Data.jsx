import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const Data = ({data, handleLove}) => {
   
    
    return (
          <tr>
      <td><img className='w-20 h-20' src={data.image} alt="" /></td>
        <td className=''>{data.title}</td>
        <td className=''>{data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td><button onClick={()=>handleLove(data)}><GiSelfLove size={22}/></button></td>
      </tr>
    );
};

export default Data;

  