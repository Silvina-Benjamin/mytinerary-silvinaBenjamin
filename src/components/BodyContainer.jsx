import React from "react";
import Carousel from "./Carousel";

const BodyContainer = () =>{
    return(
        
        <div class="bg-[url('./assets/avion.jpg')] ">
            <div className='container m-auto grid grid-cols-2 items-center justify-items-center' >
                <h2 className="text-2xl h-1/2 w-1/3 grid content-center align-center" >
                "Find your perfect trip, designed by insiders who know and love their cities!". 
                </h2>
                <Carousel />
            </div>
            
        </div>
    ); 

}
export default BodyContainer