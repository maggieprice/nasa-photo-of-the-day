import React from 'react'
import { MyImgHolder, MyImage } from "./Styles.js";

const Photo =(props)=>{
    console.log(props)
return (
    <div> 
    <div 
    className="photoHolder">
        <MyImgHolder>

        <MyImage
          src={props.photoOfTheDay.url}
          alt={props.photoOfTheDay.title}
        />
      
 </MyImgHolder>
    </div>
    {props.photoOfTheDay.copyright ? (
        <p className="phototCopyright">
        {props.photoOfTheDay.copyright}
        </p>
    ):(
        <p className="photoCopyright">
        Not Attributed in Data
    </p>

    )}
   
</div>
)
}

export default Photo