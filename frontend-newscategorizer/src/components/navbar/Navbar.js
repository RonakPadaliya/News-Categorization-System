import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Redirect,Link , Navigate, useNavigate  } from "react-router-dom";
import './Navbar.css'
import axios from 'axios';

function Navbar() {
    
    useEffect(()=>{
        $("#search-icon").click(function() {
            $(".nav").toggleClass("search");
            $(".nav").toggleClass("no-search");
            $(".search-input").toggleClass("search-active");
        });
          
        $('.menu-toggle').click(function(){
            $(".nav").toggleClass("mobile-nav");
            $(this).toggleClass("is-active");
        });
        
        $('.nav-item').click(function()
        {
            $(this).parent().removeClass("mobile-nav");
            $(".menu-toggle").removeClass("is-active");
        });
    },[]);

    const [category, setCategory] = useState([])
    const [val,setVal] = useState("no")

    useEffect(()=>{
        axios.get('https://api.currentsapi.services/v1/available/categories?apiKey=GTc76J05xalLJ9s7EwkdnQv_5ba8sjsKt0lHMhX39vjpM3Qt')
            .then(res=>{
                let data=res.data
                setCategory(data.categories)
                console.log(category)
            })
            .catch(err => {"Error in fetching News !"
                    console.log(err)})
    },[])

    let navigate = useNavigate();

    function redirection(event)
    {
        if(event.target.value != "--Select--")
            navigate("/category?type="+event.target.value)
    }

    return ( 
        <div>
            <div class="page-wrapper">
                <div class="nav-wrapper" style={{zIndex:2}}>
                    <div class="grad-bar"></div>
                    <nav class="navbar">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" /> */}
                        {/* <img src="https://looka.com/s/85007381" alt="Company Logo" /> */}
                        <Link to="/" >
                            <img src={process.env.PUBLIC_URL+"logo4.png"} style={{width:'100px', height:'40px'}} alt="Web Application Logo" />
                        </Link>
                        <div class="menu-toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        <ul class="nav no-search" style={{zIndex:'1'}}>
                            <li class="nav-item"><Link to="/" >Home</Link></li>
                            <li class="nav-item"><Link to="/news-categorizer" >News</Link></li>
                            <li class="nav-item"><Link to="/about" >AboutUs</Link></li>
                            <li class="nav-item"><Link to="/contact" >ContactUs</Link></li>
                            
                            {/* <i class="fas fa-search" id="search-icon" ></i>
                            <input class="search-input" type="text" placeholder="Search.." /> */}
                        </ul>
                    </nav>
                    <div class="grad-bar"></div>

                    <div class="d-flex justify-content-end m-3">
                        <div class="custom-select " >
                            <select id="lang" onChange={(event)=>redirection(event)}>
                                <option >--Select--</option>
                                {
                                    category.map((item,index)=>(
                                        <option value={item} key={index}>
                                            {item}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Navbar;