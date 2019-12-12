import React, {useState, useEffect} from 'react'
import axios from 'axios'

const NavBar = (props)=>{
    
    console.log(props)
    return (
        <nav>
            <p>
              Nasa Photo of the Day:
            </p>
            <div
            onClick={()=>props.clickHandler('Yplus')}>+</div>
            <div>Year:{props.year}</div>
            <div
            onClick={()=>props.clickHandler('Yminus')}>-</div>
        </nav>
    )
}

export default NavBar