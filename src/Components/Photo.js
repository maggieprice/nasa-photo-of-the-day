import React from 'react'

const Photo =(props)=>{
    console.log(props)
return (
    <div> 
    <div 
    className="photoHolder">
    <img 
    src={props.photoOfTheDay.url} 
    alt={props.photoOfTheDay.title}
    />
    
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