import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { Redirect,Link } from "react-router-dom";
import './Navbar.css'

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

    return ( 
        <div>
            <div class="page-wrapper">
                <div class="nav-wrapper" style={{zIndex:2}}>
                    <div class="grad-bar"></div>
                    <nav class="navbar">
                        {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo" /> */}
                        {/* <img src="https://looka.com/s/85007381" alt="Company Logo" /> */}
                        <img src={process.env.PUBLIC_URL+"logo4.png"} style={{width:'100px', height:'40px'}} alt="Web Application Logo" />
                        <div class="menu-toggle" id="mobile-menu">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </div>
                        <ul class="nav no-search">
                            <li class="nav-item"><Link to="/" >Home</Link></li>
                            <li class="nav-item"><Link to="/news-categorizer" >News</Link></li>
                            <li class="nav-item"><Link to="/about" >About Us</Link></li>
                            {/* <i class="fas fa-search" id="search-icon" ></i>
                            <input class="search-input" type="text" placeholder="Search.." /> */}
                        </ul>
                    </nav>
                    <div class="grad-bar"></div>
                </div>
                {/* <section class="headline">
                    <h1>Responsive Navigation</h1>
                    <p>Using CSS grid and flexbox to easily build navbars!</p>
                </section>
                <section class="features">
                    <div class="feature-container">
                    <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature" />
                    <h2>Flexbox Featured</h2>
                    <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
                    </div>
                    <div class="feature-container">
                    <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature" />
                    <h2>CSS Grid Navigation</h2>
                    <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
                    </div>
                    <div class="feature-container">
                    <img src="https://blog.edx.org/wp-content/uploads/2015/09/null-1.jpg" alt="Flexbox Feature" />
                    <h2>Basic HTML5</h2>
                    <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
                    </div>
                </section> */}
            </div>
        </div>
     );
}

export default Navbar;