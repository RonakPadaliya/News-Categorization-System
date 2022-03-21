import React,{ useEffect, useState} from "react";
import {useLocation} from 'react-router-dom';
import './Article.css'
import axios from 'axios';
import { Link ,NavLink, Navigate, useHistory} from "react-router-dom";
import $ from 'jquery';
// import {Redirect} from "react-router";

function Article() {

    // const history = useHistory();

    const query=new URLSearchParams(useLocation().search);
    const id=query.get('id');

    const [data, setData]=useState([])
    const [temp, setTemp]=useState([])

    // useEffect(() => {
    //     if(localStorage.getItem('newsData'))
    //         setData(JSON.parse(localStorage.getItem('newsData')))
    //         // setData(JSON.parse(localStorage.getItem('newsData'), null, -1))
    //     console.log("News Data in Article.js = ", data)
    // },[])

    useEffect(() => {
        $('html, body').animate({
            scrollTop: $("#myarticle").offset().top
        }, 100);
    },[query.get('key')])
        

    useEffect(() => {
        if(localStorage.getItem('perticularNewsData') !==null)
        {
            setData(JSON.parse(localStorage.getItem('perticularNewsData')))
            console.log("In If");
        }
        else
        {
            setData(JSON.parse(localStorage.getItem('newsData')))
        }
    },[useLocation().search])

    useEffect(() => {
        if(data.status==='ok')
        {
            axios.get(`https://api.currentsapi.services/v1/search?apiKey=GTc76J05xalLJ9s7EwkdnQv_5ba8sjsKt0lHMhX39vjpM3Qt&page_size=200&category=${data.news[id].category[0]}`)
                .then(res=>{
                    setTemp(res.data)
                    console.log("Perticular category type news data in Article.js = ",temp )
                })
        }
    },[data])

    useEffect(() => {
        localStorage.setItem("perticularNewsData", JSON.stringify(temp));
        console.log(localStorage.getItem(""))
    },[temp])

    return ( 
        <div className='bg-light' >
            {/* {
                localStorage.getItem("perticularNewsData")!==null?
                    setData(JSON.parse(localStorage.getItem('perticularNewsData')))
                :
                    null
            } */}
            {
                data.status!=='ok'?
                    <h1>Error...</h1>
                :
                    <div>
                        <div class="row">
                            {/* <div class="row row-no-gutters"> */}
                            <div class="col-xs-12 col-md-9">
                                <div style={{ color:'black',  border:"1px solid", borderRadius:"10px"}} class="m-3">
                                    <h3>{data.news[id].title}</h3>
                                    <span></span>
                                    <hr/>
                                    <img src={data.news[id].image} alt="News Related Photo"/>
                                </div>
                            </div>
                            <div class="col-xs-6 col-md-3">
                                <div style={{border:"1px solid black", borderRadius:"10px"}} class="m-3">
                                    <h5 style={{backgroundColor:'white', border:"2px solid", borderRadius:"10px"}}>Author : </h5>
                                    <br/>
                                    {
                                        data.news[id].author === null ?
                                            <p style={{color:'black'}}>Not Specified</p>
                                        :
                                            <p style={{color:'black'}}>{data.news[id].author}</p>
                                    }
                                </div>

                                <div style={{border:"1px solid black", borderRadius:"10px"}} class="m-3">
                                    <h5 style={{backgroundColor:'white', border:"2px solid", borderRadius:"10px"}}>Published At : </h5>
                                    <br/>
                                    <p style={{color:'black'}}>{data.news[id].published.substr(0,10)}</p>
                                </div>

                                <div style={{border:"1px solid black", borderRadius:"10px"}} class="m-3">
                                    <h5 style={{backgroundColor:'white', border:"2px solid", borderRadius:"10px"}}>Category : </h5>
                                    <br/>
                                    {
                                        data.news[id].category?
                                            data.news[id].category.map((i,index)=>(
                                                <p style={{color:'black'}}>{i}</p>
                                            ))
                                        :
                                            <p style={{color:'black'}}>None</p>
                                    }
                                </div>

                                <div style={{border:"1px solid black", borderRadius:"10px"}} class="m-3">
                                    <h5 style={{backgroundColor:'white', border:"2px solid", borderRadius:"10px"}}>Source Link : </h5>
                                    <br/>
                                    <a href={data.news[id].url} target="_blank" style={{color:'blue'}}><u>View News in Source Website --&gt;</u></a>
                                </div>
                            </div>
                        </div>
                        <div style={{color:"white", border:"1px solid black", borderRadius:"10px", padding:"10px"}} class='col m-3'>
                            <p style={{textAlign:"left", fontWeight:"bold", fontSize:'25px',color:'black'}}>Description : </p>
                            {
                                data.news[id].description?
                                    <div style={{textAlign:"left", fontSize:'20px',color:'black'}}>
                                        <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {data.news[id].description}
                                        </p>
                                        {/* <p>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            {data.articles[id].content}
                                        </p> */}
                                    </div>
                                :
                                    <p>None</p>
                            }
                        </div>
                    </div>
            }

            {
                temp.status==='ok'?
                    <div class="d-flex flex-wrap bd-highlight">
                        {
                            temp.news.map((article,index) => (
                                <div class="order-1 p-2 bd-highlight" style={{width:'500px'}}>
                                    <div class="blog-card" style={{margin:'16px'}}>
                                        <div class="meta">
                                            <div class="photo" style={{backgroundImage: `url(${temp.news[index].image})`}}></div>
                                        </div>
                                        <div class="description">
                                            <h5>{temp.news[index].author}</h5>
                                            <h6>{temp.news[index].published.substr(0,10)}</h6>
                                            <p> {temp.news[index].title}</p>
                                            <p class="read-more">
                                                <Link to={`/article/?id=${index}&key=${temp.news[index].id}`} >Read More</Link>
                                            </p>
                                            <div class="d-flex flex-wrap justify-content-center">
                                                {
                                                    article.category.map((i)=>(
                                                        <p style={{margin:'5px',padding:'5px', border:'1px solid black', borderRadius:'50px'}}>{i}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {/* <div class="order-1 p-2 bd-highlight">
                            <div class="blog-card" style={{margin:'16px'}}>
                                <div class="meta">
                                    <div class="photo" style={{backgroundImage: `url(${temp.news[id].image})`}}></div>
                                </div>
                                <div class="description">
                                    <h1>Learning to Code</h1>
                                    <h2>Opening a door to the future</h2>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                                    <p class="read-more">
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 p-2 bd-highlight">
                            <div class="blog-card alt" style={{margin:'16px'}}>
                                <div class="meta">
                                    <div class="photo" style={{backgroundImage: `url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)`}}></div>
                                </div>
                                <div class="description">
                                    <h1>Mastering the Language</h1>
                                    <h2>Java is not the same as JavaScript</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
                                    <p class="read-more">
                                        <a href="#">Read More</a>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                :null
            }
        </div>
    );
}

export default Article;