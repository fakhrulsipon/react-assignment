
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  

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

      <div className='w-[92%] mx-auto mt-16 mb-7'>
        <h1 className='font-medium text-[32px]'>Active Auctions</h1>
        <p className='text-[20px]'>Discover and bid on extraordinary items</p>
      </div>

      <div className='w-[92%] mx-auto'>
         <div className='w-[70%]'>
         <div className='flex justify-between'>
          <p>Item</p>
          <div className='flex gap-16'>
            <p>Current Bid</p>
            <p>Time Left</p>
            <p>Bid Now</p>
          </div>
         </div>
         </div>
         <div className='w-[30%]'>

         </div>

      </div>
     
    </>
  )
}

export default App
