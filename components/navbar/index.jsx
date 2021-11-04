import React from 'react'

const Navbar = () => {
    return (
        <nav className=" ml-86 cus-width h-16  flex justify-between items-center fixed top-0 bg-transparent ">
   <div className="flex justify-between items-center text-gray-500 font-semibold text-sm space-x-8">
       <p>About us</p>
       <p>Product</p>
       <p>Pricing</p>
       <p>Team</p>
       <p>Contact</p>
       <button className="px-2 pt-2 pb-2 text-gray-100 bg-blue-300 rounded-md ">
           Schedule
       </button>
   </div>

<div className="side ml-95 ">
    <p className="font-semibold  "> write to us</p>
</div>
        </nav>
    )
}

export default Navbar
