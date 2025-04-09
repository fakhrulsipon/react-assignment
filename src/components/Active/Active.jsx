import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';

const Active = ({handleLove}) => {
    const [bidData, setBidData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBidData(data))
    },[])
    return (
        <div>
            <thead>
      <tr>
        <td className='text-[#000000] text-[20px]'>Item Image</td>
        <td className='text-[#000000] text-[20px]'>Item Name</td>
        <td className='text-[#000000] text-[20px]'>Current Bid Price</td>
        <td className='text-[#000000] text-[20px]'>Time Left</td>
        <td className='text-[#000000] text-[20px]'>Bid Now</td>
        <th></th>
      </tr>
    </thead>
    <tbody>

    
            {
                bidData.map(data =><Data key={data.id} data={data} handleLove={handleLove}></Data>)
            }
            </tbody>
        </div>

    );
};

export default Active;