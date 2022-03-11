import './About.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

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

    return ( 
        <div>
            About

            {
                data.map((detail, id) => (
                    <div>
                        <h1>{detail.news}</h1>
                        <h2>{detail.prediction}</h2>
                    </div>
                ))
            }
        </div>
     );
}

export default About;