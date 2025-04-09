import React from 'react';
import { GiSelfLove } from "react-icons/gi";

const Data = ({data}) => {
    console.log(data)
    return (
        <div>
          <tbody>
    <tr>
    <td>
        <img src={data.image} alt="Item Image" className="w-[50px] h-[50px] object-cover" />
     
        </td>
        <td> {data.title}</td>
        <td>{data.currentBidPrice}</td>
        <td>{data.timeLeft}</td>
        <td>
          <button className=""><GiSelfLove size={22}/></button>
        </td>
      </tr>
    </tbody>
        </div>
    );
};

export default Data;

  