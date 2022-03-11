import React, { useEffect, useState} from 'react'
import { Redirect,Link } from "react-router-dom";
import './tempco.css'
import $ from 'jquery';


function Carousel() {

    const [data, setData]=useState([])
    const [length, setLength]=useState(10)
    

    useEffect(() => {
        if(localStorage.getItem('newsData'))
        {
            setData(JSON.parse(localStorage.getItem('newsData')))
        }
            // setData(JSON.parse(localStorage.getItem('newsData'), null, -1))
        console.log("News Data in Carousel.js = ", data)
    },[localStorage.getItem('newsData')])

    useEffect(() => {
        
    })
    

    return (
        <div >
            
        </div>
     );
}

export default Carousel;