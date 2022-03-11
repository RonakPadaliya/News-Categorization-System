import './Home.css'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {

    const [newsData,setNewsData] = useState([])
    
    useEffect(()=>{
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ad744843d26d4dfa9429f843008270fa')
            .then(res=>{
                let data=res.data
                console.log(data)
                setNewsData(data)
                console.log("data.articles = ", data.articles)
                console.log("newsdata = ", newsData)
                

            })
            .catch(err => {"Error in fetching News !"
                    console.log(err)})
    },[])

    return ( 
        <div class='body'>
            <div class="page-wrapper">
                <section class="headline">
                    <h1>Responsive Navigation</h1>
                    <p>Using CSS grid and flexbox to easily build navbars!</p>
                </section>
            </div>

            <ul class="mycard-list">
            {
                    newsData.status==='ok'?
                        newsData.articles.map((article, index) => (
                            <li class="mycard" key={index}>
                                <div class="example-2 card">
                                    <div class="wrapper" style={{ background: `url(${article.urlToImage}) center / cover no-repeat`}}>
                                        <div class="header" style={{backgroundColor:'black'}}>
                                            <div class="date">
                                            <span class="day">12</span>
                                            <span class="month">Aug</span>
                                            <span class="year">2016</span>
                                            </div>
                                            {/* <ul class="menu-content">
                                            <li>
                                                <a href="#" class="fa fa-bookmark-o"></a>
                                            </li>
                                            <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                                            <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                                            </ul> */}
                                        </div>
                                        <div class="data">
                                            <div class="content">
                                                <span class="author">Jane Doe</span>
                                                <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                                                <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                                <a href="#" class="button">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{backgroundColor:'grey', height:'700px'}}>
                                    {/* <div class="data"> */}
                                        <div class="content">
                                            <span class="author">Jane Doe</span>
                                            <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                                            <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                            <a href="#" class="button">Read more</a>
                                        </div>
                                    {/* </div> */}
                                    {/* <div style={{textAlign: 'center'}}>
                                        hello
                                    </div> */}
                                </div>
                            </li>
                
                        ))
                    :
                            <p>Loading...</p>
            }
                
            </ul>
            {/* <div class="row d-flex justify-content-center">
                {
                    newsData.status==='ok'?
                        newsData.articles.map((article, index) => (
                            // <div class="col" key={index} style={{backgroundColor:'red', width:'100%'}}>
                            //     Hello   
                            // </div>

                            <div class="example-2 card" key={index} style={{width:'450px'}}>
                                <div class="wrapper">
                                    <div class="header">
                                        <div class="date">
                                        <span class="day">12</span>
                                        <span class="month">Aug</span>
                                        <span class="year">2016</span>
                                        </div>
                                    </div>
                                    <div class="data">
                                        <div class="content">
                                        <span class="author">Jane Doe</span>
                                        <h1 class="title"><a href="#">Stranger Things: The sound of the Upside Down</a></h1>
                                        <p class="text">The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                                        <a href="#" class="button">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    :
                        <h1>Loading...</h1>
                }
            </div> */}
                {/* <div class="d-flex flex-wrap-reverse">
                    {
                        newsData.articles.map((article, i) => (
                            // <div key={i}>
                            //     <img src={article.urlToImage} alt="Flexbox Feature" />
                            //     <h2>{article.author}</h2>
                            //     <p>{article.title}</p>
                            // </div>
                            <div class="card" style="width: 18rem;">
                                <img src="..." class="card-img-top" alt="..." />
                                <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
                <section class="features">
                    {/* {
                        newsData.articles.map((article, i) => (
                            <div class="feature-container" key={i}>
                                <img src={article.urlToImage} alt="Flexbox Feature" />
                                <h2>{article.author}</h2>
                                <p>{article.title}</p>
                            </div>
                        ))
                    } */}
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
                        <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature" />
                        <h2>Flexbox Featured</h2>
                        <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
                    </div>
                    <div class="feature-container">
                        <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature" />
                        <h2>CSS Grid Navigation</h2>
                        <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
                    </div>
                </section>
            </div>
        // </div>
     );
}

export default Home;