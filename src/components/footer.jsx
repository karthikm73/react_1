import React from "react"
import "../index.css"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className=" bg-stone-600 text-white">
            <div className="grid grid-cols-2 md:grid md:grid-cols-3">
                <div>
                <p className="tracking-wide font-medium text-lg cursor-pointer p-4"><span className="font-bold text-2xl">T</span>aste<span className="font-bold text-xl" >I</span>t</p>
                <p className="p-2 text-xs font-semi-bold">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment</p>
                </div>
                

                <div className="options p-3  space-y-1">
                    <p className="cursor-pointer">About Us</p>
                    <p className="cursor-pointer">Careers</p>
                    <p className="cursor-pointer">Contact Us</p>
                    <p className="cursor-pointer">Feedback</p>
                    <p className="cursor-pointer">Support</p>
                </div>
                <div className="hidden-socials hidden md:block space-y-1 p-3">
                    <p className="cursor-pointer">Follow Us on</p>
                    <p className="cursor-pointer">Instagram</p>
                    <p className="cursor-pointer">Facebook</p>
                    <p className="cursor-pointer">Twitter</p>
                    <p className="cursor-pointer">Youtube</p>
                </div>
            </div>


            <div className="social-icons flex space-x-5 p-3 cursor-pointer">     <FaInstagram size={25} />
                <FaFacebook size={25} />
                <FaTwitter size={25} />
                <FaYoutube size={25} /></div>

        </div>
    )
}

export default Footer