import './App.css';
import React, {useEffect, useState} from 'react';
import Home from './components/home/Home.js'
import Navbar from './components/navbar/Navbar.js'
import About from './components/about/About.js'
import Contact from './components/contact/Contact.js'
import Footer from './components/footer/Footer.js'
import Categorizer from './components/news-categorizer/Categorizer.js';
import Article from './components/article/Article.js';
import CategoryViceNews from './components/categoryViceNews/CategoryViceNews.js'
import { BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import axios from "axios"

function App() {

  const [perticularNewsData, setPerticularNewsData] = useState([])

  function getnewsdata(data){
    setPerticularNewsData(data)
    console.log("News Data in App.js = ", perticularNewsData)
  }

  return (
    <Router>
      <div class="App" id="myarticle">
        <Navbar />

        <Routes>
          {/* <Route path={`/`} element={<Navbar/>}/> */}
          <Route exact path="/" element={<Home getnewsdata={getnewsdata}/>}/>
          <Route path={`/about`}element={<About/>}/>
          <Route path={`/news-categorizer`} element={<Categorizer/>}/>
          {/* <Route path={`/article`} element={<Article perticularNewsData={perticularNewsData}/>}/> */}
          <Route path={`/article`} element={<Article />}/>
          <Route path={`/contact`} element={<Contact />}/>
          <Route path={`/category`} element={<CategoryViceNews />}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
