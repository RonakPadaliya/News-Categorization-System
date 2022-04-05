import './Home.css'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Article from '../article/Article.js';
import Carousel from '../carousel/Carousel.js';
import $ from 'jquery';

function Home() {

    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        axios.get('https://api.currentsapi.services/v1/search?apiKey=GTc76J05xalLJ9s7EwkdnQv_5ba8sjsKt0lHMhX39vjpM3Qt&page_size=199')
            .then(res=>{
                let data=res.data
                console.log(data)
                setNewsData(data)
                console.log("data.articles = ", data.news)
                console.log("newsdata = ", newsData)
                
            })
            .catch(err => {"Error in fetching News !"
                    console.log(err)})
    },[])

    useEffect(() => {
        localStorage.setItem("newsData", JSON.stringify(newsData));
        localStorage.removeItem("perticularNewsData");
    },[newsData])

    
    return (
        // <div style={{width:'100%'}} class="homebg">
        <div style={{width:'100%'}} class="bg-light">
                {
                    newsData.status==='ok'?
                        <div class="m-3">
                            <Carousel />
                        </div>
                    :
                        <p>Carousel Loading...</p>
                }

                <div class="support-grid"></div>

                {
                    newsData.status==='ok'?
                        <div class="band">
                            <div class="item-1">
                                <Link to={`/article/?id=${0}&key=${newsData.news[0].id}`} class="home-card">
                                    <div class="thumb" style={{backgroundImage: `url(${newsData.news[0].image})`}}></div>
                                    <article>
                                        <h6>{newsData.news[0].title}</h6>
                                        {/* <span>{newsData.news[0].author}</span> */}
                                    </article>
                                    <div class="d-flex flex-wrap justify-content-center">
                                        {
                                            newsData.news[0].category.map((i)=>(
                                                <p style={{margin:'5px',padding:'5px', border:'1px solid black', borderRadius:'50px'}}>{i}</p>
                                            ))
                                        }
                                    </div>
                                </Link>
                            </div>
                            {
                                newsData.news.map((article, index) => (
                                    index !== 0?
                                        <div class={`item-${index+1}`}>
                                            <Link to={`/article/?id=${index}&key=${article.id}`} class="home-card">
                                                {/* <div class="d-flex justify-content-center">
                                                    <p>{article.publishedAt.substr(0,10)}</p>
                                                </div> */}
                                                <div class="thumb" style={{backgroundImage: `url(${article.image})`}}></div>
                                                <article>
                                                    <h6>{article.title}</h6>
                                                    {/* <span>{article.author}</span> */}
                                                </article>
                                                <div class="d-flex flex-wrap justify-content-center">
                                                    {
                                                        article.category.map((i)=>(
                                                            <p style={{margin:'5px',padding:'5px', border:'1px solid black', borderRadius:'50px'}}>{i}</p>
                                                        ))
                                                    }
                                                </div>
                                            </Link>
                                        </div>
                                    :null
                                ))
                            }
                        </div>
                    :
                        <div class="d-flex justify-content-center">
                            <img src={process.env.PUBLIC_URL+"loading1.gif"} style={{width:'100px'}}/>
                        </div>
                }
            {/* </div> */}
        </div>
     );
}

export default Home;