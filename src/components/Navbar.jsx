import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../index.css"
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"

function Navbar() {
    const [nav, setNav] = useState(false)


    return (

        <nav className="flex  p-2 justify-around items-center shadow-md	 ">
            <Link to="/"><p className="tracking-wide font-medium text-lg cursor-pointer"><span className="font-bold text-2xl">T</span>aste<span className="font-bold text-xl" >I</span>t</p></Link>
            <div className="options hidden lg:flex lg: space-x-20">
                <p className="cursor-pointer"><Link to="/">Home Page</Link> </p>
                <p className="cursor-pointer"><Link to="/categories">Categories</Link> </p>
                <p className="cursor-pointer"><Link to="/contactus">Contact</Link> </p>
            </div>
            <div className="flex items-center bg-gray-300 rounded-full p-1 sm:w-[200px] md:[400px] lg:[500px]">
                <AiOutlineSearch size={20} />
                <input type="text" placeholder="Search Reciepe" className="bg-gray-300 rounded-full pl-0.5 focus:outline-none text-sm"  />
            </div>

            <div onClick={() => setNav(!nav)} className="cursor pointer lg:hidden">
                <AiOutlineMenu />
            </div>


            {/* MObile menu  */}

            {/* Overlay */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 right-0"></div> : ""}




            {/* Side drawer Menu */}
            <div className={nav ? "fixed top-6 right-0 w-[200px]  h-auto bg-white z-10 duration 300  rounded-xl" : "fixed top-6 right-[-100%] w-[200px]  h-auto bg-white z-10 duration 300  rounded-xl"}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={20} className="absolute right-4 top-1.5 cursor-pointer" />
                <p className="p-2">TasteIt</p>
                <hr />
                <div >
                    <p className="p-2">Home Page</p>
                    <hr />
                    <p className="p-2">Categories</p>
                    <hr />
                    <p className="p-2">Categories</p>
                    <hr />
                    <p className="p-2">Contact</p>

                </div>

            </div>



        </nav>
    )
}

export default Navbar