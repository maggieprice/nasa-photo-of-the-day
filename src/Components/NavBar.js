import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { NasaPhotoTitle } from "./Styles.js";

const NavBar = (props)=>{
    
    console.log(props)
    return (
        <nav>
            <NasaPhotoTitle>
            <p>
              Nasa Photo of the Day:
            </p>
            <div
            onClick={()=>props.clickHandler('Yplus')}>+</div>
            <div>Year:{props.year}</div>
            <div
            onClick={()=>props.clickHandler('Yminus')}>-</div>
            </NasaPhotoTitle>
        </nav>
    )
}

export default NavBar