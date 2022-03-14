import './About.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

function About() {
    const [data, setData]= useState([]);

    useEffect(() => {
        let data;

        axios.get('http://localhost:8000/category/')
            .then(res => {
                setData(res.data);
                console.log(data);
            })
            .catch(err => {})
    },[]);

    function RedirectForMail(email) {
        const url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + email;
        window.open(url);
      }

    return ( 
        <div class="m-3" >

            <div class="about-section d-flex justify-content-center">
                <div class="inner-container">
                    <h1 class="abouth1">About Us</h1>
                    <p class="text" style={{color:'black'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We make a News Prediction website which using diffrent <b style={{fontSize: '15px'}}><u>Machine Learning Classification Algorithms</u></b>. We also show current News Details using public apis(i.e. Currents API). 
                    </p>
                    <p class="text" style={{color:'black'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Project made under Computer Enginnering Semester-6 subject called SDP(Software Development Process) in Dharmsinh Desai University, Nadiad.
                    </p>
                </div>
            </div>

            <div class="" style={{marginTop:"50px"}}>
                <h1 class="alert alert-dark "> Our Team </h1>
                <hr class="hr"/>

                <div class="d-flex flex-wrap justify-content-center">
                    <div class="card m-3" style={{width: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Ronak Padaliya</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Computer Engineering (Sem-6)</h6>
                            <p class="card-text">Dharmsinh Desai University, Nadiad</p>
                            <button class="btn btn-primary" onClick={()=>(RedirectForMail("ronakpadaliya77@gmail.com"))}>Contact</button>
                        </div>
                    </div>
                    <div class="card m-3" style={{width: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Visrut Navadiya</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Computer Engineering (Sem-6)</h6>
                            <p class="card-text">Dharmsinh Desai University, Nadiad</p>
                            <button class="btn btn-primary" onClick={()=>(RedirectForMail("visrutnavadiya111@gmail.com"))}>Contact</button>
                        </div>
                    </div>
                    <div class="card m-3" style={{width: "18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Bhumit Navadiya</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Computer Engineering (Sem-6)</h6>
                            <p class="card-text">Dharmsinh Desai University, Nadiad</p>
                            <button class="btn btn-primary" onClick={()=>(RedirectForMail("bhumitnavadiya555@gmail.com"))}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>    
            
        </div>
     );
}

export default About;