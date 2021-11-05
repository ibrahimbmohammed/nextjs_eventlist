import React from 'react'
import { useThemeContext } from '../../utils/theme-context';

const Sidebar = () => {
  const { theme } = useThemeContext();
 

    return (
        <aside className={`w-95 h-screen hidden md:flex flex-col items-start pl-16 justify-start fixed top-0 left-0  bg-${theme}-900`}>
            <div className="">
                <p className="text-xl font-semibold text-gray-300 mt-5 "> Peddlesoft</p>
            </div>
            <div className="flex flex-col justify-between h-92">
                <span className="">
                <p className="text-2xl font-semibold text-gray-300 mt-32"> Nearest events</p>
                    <p className="text-gray-300"> if you have any questions</p>
                    <span className="">
                        <p className="text-gray-300 inline-block h-1 border-b border-myblue-500 group-hover:border-myblue-900">
                            write to us
                        </p>
                        
                    </span>

                </span>
                <div className="">
                <p className="font-semibold text-3xl text-gray-300 mt-48 ">
                    Past events

                </p>
            </div>
            </div>


        </aside>
    )
}

export default Sidebar
