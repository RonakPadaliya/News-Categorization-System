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
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ad744843d26d4dfa9429f843008270fa')
            .then(res=>{
                let data=res.data
                console.log(data)
                setNewsData(data)
                console.log("data.articles = ", data.articles)
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
    },[newsData])

    
    return (
        <div class='body homebg' >
            <div class="m-3">
                <Carousel />
            </div>

            <ul class="mycard-list">
                {
                        newsData.status==='ok'?
                            newsData.articles.map((article, index) => (
                                <li class="mycard" key={index}>
                                    <div class="example-1 card">
                                        <div class="wrapper" style={{background: `url(${article.urlToImage}) 20% 1% / cover no-repeat`}}>
                                            <div class="date">
                                                <span class="day">{article.publishedAt.substr(8,2)}</span>
                                                {
                                                    article.publishedAt.substr(5,2)==="01"?
                                                        <span class="month">JAN</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="02"?
                                                        <span class="month">FEB</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="03"?
                                                        <span class="month">MAR</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="04"?
                                                        <span class="month">APR</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="05"?
                                                        <span class="month">MAY</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="06"?
                                                        <span class="month">JUN</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="07"?
                                                        <span class="month">JUL</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="08"?
                                                        <span class="month">AUG</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="09"?
                                                        <span class="month">SEP</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="10"?
                                                        <span class="month">OCT</span>
                                                    :
                                                    article.publishedAt.substr(5,2)==="11"?
                                                        <span class="month">NAV</span>
                                                    :
                                                        <span class="month">DEC</span>                                                
                                                }
                                                <span class="year">{article.publishedAt.substr(0,4)}</span>
                                            </div>
                                        </div>
                                        <div style={{textAlign:'left', backgroundColor:'lightgrey'}} class='p-3'>
                                            {
                                                article.author===null?
                                                    <p>Author : None</p>
                                                :
                                                    <p>Author : {article.author}</p>
                                            }
                                        </div>
                                    </div>
                                            
                                    <div style={{backgroundColor:'white', height:'750px'}}>

                                        <div style={{textAlign:'center'}}>
                                            <p style={{fontSize:'17px', padding:'5px'}} >{article.title}</p>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-end p-2" style={{backgroundColor:'white'}}>
                                        <div>
                                            <Link to={`/article/?id=${index}`}>Read More &gt;&gt;</Link>
                                        </div>
                                    </div>
                                </li>
                    
                            ))
                        :
                            <img src={process.env.PUBLIC_URL+"loading1.gif"} style={{width:'100px'}}/>
                }
            </ul>
        </div>
     );
}

export default Home;