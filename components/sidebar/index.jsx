import React from 'react'

const Sidebar = () => {
    return (
        <aside className="w-86 h-screen hidden lg:flex flex-col items-center justify-around fixed top-0 left-0  bg-myblue-900">
            <div className="">
                <p className="text-xl font-bold text-gray-300"> Name platform</p>
            </div>
            <div className="">
                <p className="text-2xl font-bold text-gray-300"> Nearest events</p>
                <span className="">
                    <p className="text-gray-300"> if you have any questions</p>
                    <span>
                        <p className="text-gray-300">
                            write to us
                        </p>
                        <hr className="block h-1 border-t border-myblue-500 group-hover:border-myblue-900" />
                    </span>

                </span>
            </div>
            <div className="">
                <p className="font-bold text-3xl text-gray-300 ">
                    Past events
                </p>
            </div>

        </aside>
    )
}

export default Sidebar
