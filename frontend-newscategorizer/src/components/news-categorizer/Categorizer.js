import './Categorizer.css'
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Categorizer() {

    const [news, setNews]= useState("")
    const [prediction, setPrediction]= useState("")

    useEffect(() => {
        setPrediction("Loading...")
    },[news]);

    function handleSubmit(e){
        e.preventDefault();

        axios.post("http://localhost:8000/category/", {
                news: news,
        })
        .then((res) => {
            console.log("news = " , res.data)
            setPrediction("")
            setPrediction(res.data.prediction)
        })
        .catch((err) => {});
    };

    function handleNews(e){
        let news =e.target.value
        setNews(news)
    };

    return ( 
        <div class="bg-light">
            <div class="body">
                <div class="wrapper">
                    {/* <div class="info">Enter News :-</div> */}
                    <h1 style={{margin: "30px", fontSize: "25px", fontWeight: "900", color:"#F85370"}}>Enter News :-</h1>
                    <form onSubmit={handleSubmit}>
                        {/* <input class="input-phone" type='text' name="text" style="width:80%;height:200px"/> */}
                        <textarea class="input-phone" type='text' 
                                name="news" 
                                style={{width:"80%",height:"200px"}}
                                value={news}
                                onChange={handleNews}
                                required>
                        </textarea>
                        {
                            news===""?
                                <input type="submit" value="Predict" class="btn btn-warning"/>
                            :
                                <input type="submit" value="Predict" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        }
                    </form>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Prediction</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    {prediction}
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categorizer;