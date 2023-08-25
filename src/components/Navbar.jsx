import React, {useState} from 'react';
import {SlBag, SlHandbag} from "react-icons/sl";
import {FaBars} from "react-icons/fa6"
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai"
import {BsFillCartCheckFill, BsFillCartFill} from "react-icons/bs"
import {GrFavorite} from "react-icons/gr"
import {BiHelpCircle} from "react-icons/bi"
import {IoWalletSharp} from "react-icons/io5"
import {TbDiscountCheckFilled} from "react-icons/tb"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">


            {/*left side*/}
            <div className="flex items-center">
                <div onClick={() =>
                    setNav(!nav)} className="cursor-pointer">
                    <FaBars className="text-gray-700 mt-1 hover:text-gray-900" size={25}/>
                </div>
                <div className="text-1 xl sm:text-2xl lg:text-3xl pl-5 px-1">
                    <h1 className="text-gray-700">cool<span className="font-bold text-gray-7500">Brands</span></h1>
                </div>
                <div className="hidden lg:flex items-center rounded px-5 text-[20px]">
                    <p className="bg-gray-300 text-black font-bold  pl-4 pr-4 rounded-lg  hover:text-gray-900 hover:underline flex cursor-pointer">
                        <MdKeyboardDoubleArrowRight className="items-center mr-2 mt-1" size={25}/>shopMan</p>
                    <p><SlBag/></p>
                    <p className="bg-gray-300 text-black font-bold  pl-4 pr-4 rounded-lg  hover:text-gray-900 hover:underline flex cursor-pointer">
                        <MdKeyboardDoubleArrowRight className="items-center mr-2 mt-1" size={25}/>shopWomen</p>
                    <p><SlHandbag/></p>
                </div>
            </div>


            {/* Search input*/}
            <div
                className="px-2 py-2 bg-gray-100 flex items-center rounded-full sm:w-[300px] md-[400] lg:w-[500px] hidden:flex ">
                <AiOutlineSearch size={20}/>
                <input className="bg-transparent pl-2 w-full focus:outline-none" type="text"
                       placeholder="search item..."/>
            </div>


            {/*cart button*/}
            <div className="pr-4">
                <button
                    className="bg-black text-amber-50 hover:bg-gray-300 hover:text-black border rounded items-center py-1 px-4 hidden: sm:flex ">
                    <BsFillCartFill size={15} className="mr-2"/> Cart
                </button>
            </div>


            {/*mobile menu*/}
            {/*overlay*/}
            {nav ? <div className='bg-black/70 fixed w-full h-screen top-0 left-0 z-10'></div> : ''}


            {/*side driver menu*/}
            <div
                className={nav ? "fixed top-0 left-0 bg-gray-300 w-[300px] h-screen duration-300 z-10" : "fixed top-0 left-[-100%] bg-white w-[300px] h-screen duration-300 z-10"}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={25}
                                className="absolute right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl p-4">cool<span className="font-bold">Brands</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-600">
                        <li className="font-bold text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-2 flex items-center ">
                            <SlBag size={20} className="mr-4"/> shopMan
                        </li>
                        <li className="font-bold text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-2 flex items-center ">
                            <SlHandbag size={20} className="mr-4"/> shopWomen
                        </li>
                        <li className="text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded mt-4 ml-4 flex items-center ">
                            <GrFavorite size={20} className="mr-4"/> myFavorites
                        </li>

                        <li className="text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-1 ml-4 flex items-center ">
                            <BsFillCartCheckFill size={20} className="mr-4"/> Orders
                        </li>
                        <li className="text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-1 ml-4 flex items-center ">
                            <BiHelpCircle size={20} className="mr-4"/> Help
                        </li>
                        <li className="text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-1 ml-4 flex items-center ">
                            <IoWalletSharp size={20} className="mr-4"/> Wallet
                        </li>
                        <li className="text-xl hover:underline cursor-pointer hover:bg-gray-50 rounded py-1 ml-4 flex items-center ">
                            <TbDiscountCheckFilled size={20} className="mr-4"/> Promotions
                        </li>


                    </ul>
                </nav>
            </div>

        </div>


    );
};

export default Navbar;
