import React from 'react';
import sun from "./icons/sun.svg"; 
import Days from './Days';



const Weather= (props) => {

    return (
       
                <div className="weather card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{props.city}</span>
                        <p><img src={props.iconWeather}className="App-logo" alt="sun"/></p>
                        <span className="temperature">{props.temperature}°C</span>
                        <div className="wind">Vent : {props.windSpeed} km/h ({props.windDeg}° )</div>
                    </div>
                    <Days />
                </div>
          
    );
  }
export default Weather;