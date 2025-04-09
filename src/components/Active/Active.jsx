import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';

const Active = () => {
    const [bidData, setBidData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data =>setBidData(data))
    },[])
    return (
        <div>
            {
                bidData.map(data =><Data key={data.id} data={data}></Data>)
            }
        </div>
    );
};

export default Active;