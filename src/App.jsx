
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

      {/* <div className='w-[92%] mx-auto'>
         <div className='w-[70%]'>
         <div className='flex justify-between'>
          <div className='flex gap-20'>
          <p>Item Image</p>
          <p>Item Name</p>
          </div>
          <div className='flex gap-16'>
            <p>Current Bid Price</p>
            <p>Time Left</p>
            <p>Bid Now</p>
          </div>
         </div>
         </div>
         <div className='w-[30%]'>

         </div>

      </div> */}

<div className="w-[92%] mx-auto">

  <table className="w-[70%] border-separate border-spacing-4">
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
          <img src="/path/to/image.jpg" alt="Item Image" className="w-[50px] h-[50px] object-cover" />
        </td>
        <td>First Edition 'The Great Gatsby' by F. Scott Fitzgerald</td>
        <td>$150</td>
        <td>12h 30m</td>
        <td>
          <button className="py-2 px-4 bg-blue-500 text-white rounded-xl">Bid Now</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div className='w-[30%]'>
    <div>
    <h1>Favorite Items</h1>
    </div>

  </div>
</div>
     
    </>
  )
}

export default App
