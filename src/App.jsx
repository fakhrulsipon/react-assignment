
import './App.css'
import Active from './components/Active/Active';

import Navbar from './components/Navbar/Navbar'
import { GiSelfLove } from "react-icons/gi";

function App() {

  const handleLove= (data) => {
    console.log(data)
  }
  
  

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
    
  
    <Active handleLove={handleLove}></Active>
    
    
    
  </table>
</div>


<div className='w-[30%] max-h-max bg-[#FFFFFF] rounded-lg'>
    <div className='flex items-center gap-1 justify-center border-b-1 border-b-gray-300 pt-4 pb-2'>
    <GiSelfLove size={22}/>
    <h1 className='font-medium text-[26px]'>Favorite Items</h1>
    </div>
    <div className='text-center border-b-1 border-b-gray-300 pt-6 pb-6'>
      <h2 className='font-medium text-[22px]'>No favorites yet</h2>
      <p>Click the heart icon on any item <br /> to add it to your favorites</p>
    </div>

    <div className='flex justify-between px-4 py-8'>
      <h1 className='font-bold text-[20px]'>Total bids Amount</h1>
      <h1 className='font-bold text-[20px]'>0</h1>
    </div>
  </div>
</div>

</div>



     
    </>
  )
}

export default App


{/* <div className='w-[70%]'>
  <table className=" border-separate border-spacing-4 bg-[#FFFFFF] rounded-lg">
    <thead>
      <tr className="text-left">
        <th className="text-[18px] font-medium">Item Image</th>
        <th className="text-[18px] font-medium">Item Name</th>
        <th className="text-[18px] font-medium">Current Bid Price</th>
        <th className="text-[18px] font-medium">Time Left</th>
        <th className="text-[18px] font-medium">Bid Now</th>
      </tr>
    </thead>
    
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
    
  </table>
</div> */}