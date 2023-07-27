import React from "react"

function Newsletter() {
    return (
        <div className="bg-red-200 w-full h-min[300px] ">
            <p className="text-4xl  p-8 text-center">Deliciousness to your inbox</p>
            <p className="text-center text-lg">Enjoy weekly hand picked recipes
                and recommendations</p>
           <div className="p-5">
           <input type="email" placeholder="Email address" className="  rounded-sm text-center  block m-auto h-12 w-92 " />
           </div>
                
                <div className="p-2">
                <button className="border-black border-2  rounded-lg bg-slate-800 p-2
                pr-4 pl-4 block m-auto font-semibold text-white">JOIN</button>
                </div>
                
            

            <p className="text-sm font-thin p-5 text-center">By joining our newsletter you agree to our Terms and Conditions</p>
        </div>
    )
}

export default Newsletter