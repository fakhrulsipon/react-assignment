
import './App.css'
import Active from './components/Active/Active';
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar'
import { GiSelfLove } from "react-icons/gi";

function App() {

  const [favorites, setFavorites] = useState([]); // To store favorite items
  const [totalBids, setTotalBids] = useState(0); // To store total bid amount

  const handleAddToFavorites = (item) => {
    const isItemExist = favorites.some(fav => fav.title === item.title);
    if (!isItemExist) {
      setFavorites(prevFavorites => [...prevFavorites, item]);
      setTotalBids(prevTotal => prevTotal + parseFloat(item.currentBidPrice)); // Update total bid price
    }
  };
  
  

  return (
    <>
      
      <Navbar></Navbar>
      <div className="banner-container relative">

        <div className='relative'>
          <img className='' src="/public/Banner-min.jpg" alt="" />
        </div>
        <div className='absolute top-92 left-18'>
        <h1 className='font-semibold text-[36px] text-white'>Bid on Unique Items from<br/>Around the World</h1>
        <p className='text-[20px] my-3 text-white'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
        <button className='py-3 px-4 rounded-3xl font-medium bg-white'>Explore Auctions</button>
        </div>
        
      </div>
      <div className="main-container bg-slate-200 pt-14">

      

      <div className='w-[92%] mx-auto mb-7'>
        <h1 className='font-medium text-[32px]'>Active Auctions</h1>
        <p className='text-[20px]'>Discover and bid on extraordinary items</p>
      </div>

      <div className="w-[92%] mx-auto flex gap-4">

      
      <div className="overflow-x-auto w-[70%] bg-[#FFFFFF] rounded-xl">
  <table className="table">
    
  
    <Active handleAddToFavorites={handleAddToFavorites}></Active>
    
    
    
  </table>
</div>


<div className='w-[30%] max-h-max bg-[#FFFFFF] rounded-lg'>
    <div className='flex items-center gap-1 justify-center border-b-1 border-b-gray-300 pt-4 pb-2'>
    <GiSelfLove size={22}/>
    <h1 className='font-medium text-[26px]'>Favorite Items</h1>
    </div>
    
 {/* Display Favorite Items */}
 <div className='text-center border-b-1 border-b-gray-300 pt-6 pb-6 add-div'>
              {favorites.length > 0 ? (
                <div>
                  {favorites.map((item, index) => (
                    <div key={index} className='m-5 p-5 border border-2 rounded-2xl'>
                      <div className='flex gap-3'>
                      <img src={item.image} alt={item.title} className='w-20 h-20 border border-2 rounded-2xl' />
                      <div>
                      <h2 className='font-medium text-[18px]'>{item.title}</h2>
                      <p>${item.currentBidPrice}   Bids:{item.timeLeft}</p>
                      </div>
                      
                      </div>
                      
                      
                      
                      </div>
                  ))}
                </div>
              ) : (
                <h2 className='font-medium text-[22px]'>No favorites yet</h2>
              )}
            </div>

            {/* Total bids amount */}
            <div className='flex justify-between px-4 py-8'>
              <h1 className='font-bold text-[20px]'>Total bids Amount</h1>
              <h1 className='font-bold text-[20px]'>${totalBids.toFixed(2)}</h1> {/* Show total amount with two decimal places */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;