import React from "react";
// import Gallery from "./Carousel";
import Carousel from "./Carousel2";

const BodyContainer = () =>{
    return(
        
        <div class="background">
            <div id="description-text">
                <p>
                "Find your perfect trip, designed by insiders who know and love their cities!". 
                </p>
                {/* <Gallery    /> */}
                <Carousel />
            </div>
            
        </div>
    ); 

}
export default BodyContainer