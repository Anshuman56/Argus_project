import React, { useState, useEffect } from "react";
import './weather.css'

const Weather = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://api.weatherbit.io/v2.0/current?lat=20.296059&lon=85.824539&key=789e2c4934cd4c72b99807d0790b6efc&include=minutely')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    // const temp = posts.data[0].app_temp
    // const city = posts.data[0].city_name
    // return (
    //     <div className="weather-contaner">
    //         <p>|{city} </p>
    //         <p> {temp} &deg;C</p>
    //     </div>
    // );
};

export default Weather;
