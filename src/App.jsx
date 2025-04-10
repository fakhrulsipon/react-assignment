
import './App.css'
import Active from './components/Active/Active';
import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import Navbar from './components/Navbar/Navbar'
import { GiSelfLove } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [addfavorites, setAddFavorites] = useState([]); 
  const [totalBids, setTotalBids] = useState(0);
  
  const handleAddFavorites = (item) => {
    const isItemExist = addfavorites.find(fav => fav.title === item.title);
    if (!isItemExist) {
      setAddFavorites([...addfavorites, item]);
      setTotalBids(totalBids + item.currentBidPrice);
    }
  };
  
  const handleRemoveFromFavorites = (item) => {
    
    const updatedFavorites = addfavorites.filter(fav => fav.title !== item.title);
    setAddFavorites(updatedFavorites);

    setTotalBids(totalBids - item.currentBidPrice);
    toast.success('Item removed from favorites!');
  };
  

  return (
    <>
      
      <Navbar></Navbar>
      <div className="banner-container relative">

        <div className='relative'>
          <img className='h-[773px] w-full' src="/public/Banner-min.jpg" alt="" />
        </div>
        <div className='absolute top-80 left-18'>
        <h1 className='font-semibold text-[42px] text-white'>Bid on Unique Items from<br/>Around the World</h1>
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

      
      <div className="overflow-x-auto w-[70%] bg-[#FFFFFF] rounded-xl border-2 border-gray-400 mb-10">
  <table className="table">
    
  
    <Active handleAddFavorites={handleAddFavorites}></Active>
    
    
    
  </table>
</div>


<div className='w-[30%] max-h-max bg-[#FFFFFF] rounded-lg border-2 border-gray-400'>
    <div className='flex items-center gap-1 justify-center border-b-2 border-b-gray-400 pt-4 pb-2'>
    <GiSelfLove size={22}/>
    <h1 className='font-medium text-[26px]'>Favorite Items</h1>
    </div>
    

 <div className='text-center border-b-2 border-b-gray-400 pt-6 pb-6 add-div'>
              {addfavorites.length > 0 ? (
                <div>
                  {addfavorites.map((item, index) => (
                    <div key={index} className='m-5 p-5 border border-2 rounded-2xl'>
                      <div className='flex gap-3 items-center'>
                      <img src={item.image} alt={item.title} className='w-20 h-20 border border-2 rounded-2xl' />
                      <div className='text-start'>
                      <h2 className='font-medium'>{item.title}</h2>
                      <div className='flex justify-between'>
                      <p>${item.currentBidPrice}</p>
                      <button onClick={() => handleRemoveFromFavorites(item)}  className='hover:bg-emerald-500 hover:text-white rounded-full'><CiCircleRemove size={25}/></button>
                      </div>
                      
                      <p>Bids:{item.timeLeft}</p>

                      </div>
                      
                      </div>
                      
                      
                      
                      </div>
                  ))}
                </div>
              ) : (
                 
                <h2 className='font-medium text-[22px]'>No favorites yet</h2>
                
              )}
            </div>

            
            <div className='flex justify-between px-4 py-8'>
              <h1 className='font-bold text-[20px]'>Total bids Amount</h1>
              <h1 className='font-bold text-[20px]'>${totalBids.toFixed(2)}</h1>
            </div>
          </div>
        </div>
      </div>
       
       <ToastContainer />

       
       <div className="py-20 text-center">
        
        <h2 className='text-[32px] mb-3 poppins'>Auction <span className='font-bold text-[#FFD337]'>Gallery</span></h2>
        <div className='flex gap-3 justify-center items-center mb-3'>
          <p>Bid.</p>
          <p>Win.</p>
          <p>Own.</p>
        </div>
        <div className='flex gap-6 justify-center items-center mb-3'>
          <p className='poppins'>Home</p>
          <p className='poppins'>Auctions</p>
          <p className='poppins'>Categories</p>
          <p className='poppins'>How To Works</p>
        </div>
        <p>© 2025 AuctionHub. All rights reserved.</p>
        
      </div>
       
    </>
  );
}

export default App;