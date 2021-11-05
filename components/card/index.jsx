import React from 'react'
import Link from 'next/link';
import {FiTwitter} from 'react-icons/fi';

const card = ({event}) => {
    return (
        <div className="w-4/6 group h-5/6 p-6 flex flex-col justify-around items-start  rounded-md bg-myblue-800 hover:bg-myblue-500 border-t border-myblue-900  transition-all delay-150 ease-in-out">
        <span className="logo py-2">
            <FiTwitter className="group-hover:text-myblue-800 text-white"/>
        </span>
        <Link href={`/event/${event.id}`} passHref><h1 className="group-hover:text-myblue-800 text-white font-semibold text-3xl py-2 cursor-pointer" >{event.name}</h1></Link>

         <time className=" group-hover:text-myblue-800 text-white font-light text-3xl py-3"> june 27-29</time>

         <span className=" group-hover:text-myblue-800 text-white font-semibold text-sm py-4">
             more details
             <hr className="block h-1 border-t border-myblue-500 group-hover:border-myblue-900"/>
         </span>
            
        </div>
    )
}

export default card
