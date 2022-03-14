import React, { useEffect, useState} from 'react'
import { Redirect,Link } from "react-router-dom";
import './Carousel.css'
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

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            {/* <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {
                        data.status==='ok'?
                            <div >
                                <div class='p-3' style={{backgroundColor:"orange", border:'1px solid black', borderRadius:'10px'}}>
                                    <h5>{data.news[length-1].title}</h5>
                                </div>
                                <Link to={`/article/?id=${length-1}&key=${data.news[length-1].id}`}>
                                    <img src={data.news[length-1].image} class='carousel-image'/>
                                </Link>
                            </div>
                        :
                            <p>Loading...</p>
                    }
                </div>
                <div class="carousel-item" >
                    {
                        data.status==='ok'?
                            <div >
                                <div class='p-3' style={{backgroundColor:"white", border:'1px solid black', borderRadius:'10px'}}>
                                    <h5>{data.news[length-2].title}</h5>
                                </div>
                                <Link to={`/article/?id=${length-2}&key=${data.news[length-2].id}`}>
                                    <img src={data.news[length-2].image} class='carousel-image'/>
                                </Link>
                            </div>
                        :
                            <p>Loading...</p>
                    }
                </div>
                <div class="carousel-item">
                    {
                        data.status==='ok'?
                            <div >
                                <div class='p-3' style={{backgroundColor:"lightgreen", border:'1px solid black', borderRadius:'10px'}}>
                                    <h5>{data.news[length-3].title}</h5>
                                </div>
                                <Link to={`/article/?id=${length-3}&key=${data.news[length-3].id}`}>
                                    <img src={data.news[length-3].image} class='carousel-image'/>
                                </Link>
                            </div>
                        :
                            <p>Loading...</p>
                    }
                </div>
            </div>
            {/* <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden ">Previous</span>
            </button> */}
            {/* <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button> */}
            <div class="d-flex justify-content-between flex-wrap">
                <div>
                    <button class="custom-btn btn-2 sr-only" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="material-icons">
                            arrow_back_ios
                        </span>
                        <span class="visually-hidden ">Previous</span>
                    </button>
                </div>
                <div>
                    <button class="custom-btn btn-2 sr-only" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="material-icons">
                            arrow_forward_ios
                        </span>
                        <span class="visually-hidden ">Previous</span>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Carousel;