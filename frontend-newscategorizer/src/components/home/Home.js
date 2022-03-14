import './Home.css'
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Article from '../article/Article.js';
import Carousel from '../carousel/Carousel.js';
import $ from 'jquery';

function Home({getnewsdata}) {

    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        axios.get('https://api.currentsapi.services/v1/latest-news?apiKey=GTc76J05xalLJ9s7EwkdnQv_5ba8sjsKt0lHMhX39vjpM3Qt')
            .then(res=>{
                let data=res.data
                console.log(data)
                setNewsData(data)
                console.log("data.articles = ", data.news)
                console.log("newsdata = ", newsData)
                
                getnewsdata(data)
                // localStorage.clear()
                // localStorage.setItem("newsData",JSON.stringify(data))
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
            <div class="m-3">
                <Carousel />
            </div>

            <div class="support-grid"></div>

            {/* <div class="band">
                {
                    newsData.status==='ok'?
                        <div class="item-1">
                            <a href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852" class="card">
                                <div class="thumb" style={{backgroundImage: `url(${newsData.articles[0].urlToImage})`}}></div>
                                <article>
                                <h6>{newsData.articles[0].title}</h6>
                                <span>Mary Winkler</span>
                                </article>
                            </a>
                        </div>
                    :null
                } */}

                {
                    newsData.status==='ok'?
                        <div class="band">
                            <div class="item-1">
                                <Link to={`/article/?id=${0}&key=${newsData.news[0].id}`} class="card">
                                    <div class="thumb" style={{backgroundImage: `url(${newsData.news[0].image})`}}></div>
                                    <article>
                                        <h6>{newsData.news[0].title}</h6>
                                        <span>{newsData.news[0].author}</span>
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
                                        <div class="item-2">
                                            <Link to={`/article/?id=${index}&key=${article.id}`} class="card">
                                                {/* <div class="d-flex justify-content-center">
                                                    <p>{article.publishedAt.substr(0,10)}</p>
                                                </div> */}
                                                <div class="thumb" style={{backgroundImage: `url(${article.image})`}}></div>
                                                <article>
                                                    <h6>{article.title}</h6>
                                                    <span>{article.author}</span>
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