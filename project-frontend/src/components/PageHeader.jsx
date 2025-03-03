import React from 'react'
import userImage from '../assets/user.jpg'
import sriLanka from '../assets/srilanka.webp'
import { MdNotificationsActive } from "react-icons/md"; 
import { RxHamburgerMenu } from "react-icons/rx";
const PageHeader = () => {
  return (
    <div className='flex flex-wrap justify-between items-center pr-4 mt-8'>
        <div>
   
            <p className="text-2xl font-bold text-gray-900 bg-orange-500 px-6 py-3 md:mb-0 mb-6 flex items-center gap-2">
            <RxHamburgerMenu className='block md:hidden translate-y-[2px] text-white cursor-pointer' /> 
                Manage Interactions</p>
        </div>
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={userImage} alt="user" className="w-10 h-10 object-cover" />
                
            </div>
            <div className="">
                <p className="text-sm font-bold">Kavindu Lakshan</p>
                <p className='text-xs font-semibold'>CC0001</p>
            </div>
            <div className="w-12">
                <img src={sriLanka} alt="user" className="w-12 object-cover" />
                
            </div>
            <div>
                <MdNotificationsActive className="text-3xl text-black" />
            </div>
        </div>
    </div>
  )
}

export default PageHeader