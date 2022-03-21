import React,{ useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { Redirect,Link } from "react-router-dom";

function CategoryViceNews() {

    const query=new URLSearchParams(useLocation().search);
    const type=query.get('type');

    const [newsData,setNewsData] = useState([])

    useEffect(()=>{
        axios.get('https://api.currentsapi.services/v1/search?apiKey=GTc76J05xalLJ9s7EwkdnQv_5ba8sjsKt0lHMhX39vjpM3Qt&page_size=200&category='+type)
            .then(res=>{
                let data=res.data
                setNewsData(data)
            })
            .catch(err => {"Error in fetching News !"
                    console.log(err)})
    },[type])

    useEffect(() => {
        localStorage.setItem("newsData", JSON.stringify(newsData));
        localStorage.removeItem("perticularNewsData");
    },[newsData])

    return ( 
        <div style={{width:'100%', marginTop:'10px'}} class="bg-light">
                {
                    newsData.status==='ok'?
                        <div class="band">
                            {
                                newsData.news.map((article, index) => (
                                    <div class="item-2">
                                        <Link to={`/article/?id=${index}&key=${article.id}`} class="home-card">
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
                                ))
                            }
                        </div>
                    :
                        <div class="d-flex justify-content-center">
                            <img src={process.env.PUBLIC_URL+"loading1.gif"} style={{width:'100px'}}/>
                        </div>
                }
        </div>
    );
}

export default CategoryViceNews;