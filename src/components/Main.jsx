import React, { useState } from "react"
import "../index.css"
import { Buttons } from "./Buttons"
import Cards from "./Cards"
import data from "../data"
import { Link } from "react-router-dom"


function Main() {
   
    
    const cards = data.map(item => {
        return (
            <Cards
                key={item.id}
                {...item}

            />
        )
    })
    

    return (
        <>
            <div className="image-text  flex flex-col mx-auto p-4 lg:flex-row lg:justify-center  ">
                <div className="left "><img src="https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cheese-cake" className="w-full max-h-[450px] object-cover rounded-t-xl lg:rounded-l-xl" /></div>
                <div className="right bg-slate-800 w-full lg:w-[500px] pt-5 lg:pt-10 rounded-b-xl lg:rounded-r-xl text-white">
                    <div className="flex flex-col p-4  lg:p-12 ">
                        <h4 className=" text-xl lg:text-2xl
                pb-2 lg:pb-5 font-medium font-sans tracking-wide	">Mighty Super Chesscake</h4>
                        <h6 className="text-base lg:text-xl font-sans font-thin tracking-tight	">Look no further for a creamy and ultra smooth classic cheesecake recipe! no one can deny its simple decadence.</h6>


                    </div>


                </div>
            </div>
            <h2 className="font-bold p-4 text-3xl tracking-wide font-sans">Super Delicious</h2>
          <Buttons />
            <section className="cards-list p-6 md:grid md:grid-cols-5 md:gap-6 cursor-pointer">
                {cards}
            </section>
            <button className=" absolute right-0 pt-3 m-6 mt-[-40px]  rounded  justify-end"><Link to="/categories">More...</Link></button>
        </>
    )
}

export default Main