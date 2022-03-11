import './App.css';
import React, {useEffect, useState} from 'react';
// import Home from './components/home/Home.js'
import Home from './components/home/temp2.js'
import Navbar from './components/navbar/Navbar.js'
import About from './components/about/About.js'
import Categorizer from './components/news-categorizer/Categorizer.js';
import Article from './components/article/Article.js';
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
      <div class="App">
        <Navbar />

        <Routes>
          {/* <Route path={`/`} element={<Navbar/>}/> */}
          <Route exact path="/" element={<Home getnewsdata={getnewsdata}/>}/>
          <Route path={`/about`}element={<About/>}/>
          <Route path={`/news-categorizer`} element={<Categorizer/>}/>
          {/* <Route path={`/article`} element={<Article perticularNewsData={perticularNewsData}/>}/> */}
          <Route path={`/article`} element={<Article />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
