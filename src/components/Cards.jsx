import React from "react"
import "../index.css"
import { Link,useParams} from "react-router-dom"
import data from "../data";


function Cards(props){

    return(
    
         
        <Link to = {`/reciepes/${props.id}`} ><div className="card border-2 border-slate-800 rounded-xl ">
        <img src={props.img} alt="images" className="w-full max-h-[150px] object-fit rounded-xl"/>
        <div className="stats  md:pb-none ">
            <p className=" text-sm text-center">{props.rating}</p>
            <h3 className="text-xl font-medium text-center">{props.title}</h3>
        </div>
    </div>
    </Link>

    
    
    )
}


export default Cards