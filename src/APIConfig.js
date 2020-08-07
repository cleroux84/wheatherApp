import React,{useState, useEffect} from "react";
import Weather from './Weather'
import rainy from './icons/rainy.svg'
import cloudy from './icons/cloudy.svg'
import cloudySun from './icons/cloudy-sun.svg'
import snowy from './icons/snowy.svg'
import sun from './icons/sun.svg'
import thunder from './icons/thunder.svg'
import windy from './icons/windy.svg'


const APIConfig = () => {
    const key = '492102d22bd8a0f86a298a084a57f814'; 
    const [temperature,setTemperature] = useState(''); 
    const [city,setCity] = useState('');
    const [windDeg,setWindDeg] = useState('');
    const [windSpeed,setWindSpeed] = useState('');
    const [iconWeather,seticonWeather] = useState('');
    const pix={'Clear' : sun, 
            "Clouds" : cloudy, 
            "Rain" : rainy,
            "Snow" : snowy,
            "Thunderstorm" : thunder,
            "Drizzle" : cloudySun,
            "Atmosphere" : windy}

    useEffect(()=> {
fetch(
    'http://api.openweathermap.org/data/2.5/forecast?q=lyon,fr&APPID=492102d22bd8a0f86a298a084a57f814'
)
.then((res) => res.json())
.then((data) => {
    setTemperature(Math.round(data.list[0].main.temp-273.15)) 
    setCity(data.city.name)
    setWindDeg(data.list[0].wind.deg)
    setWindSpeed(data.list[0].wind.speed)
    seticonWeather(pix[data.list[0].weather[0].main]) 

})
    },[])
return (
    <div>
<Weather 
    city={city} 
    temperature = {temperature} 
    windDeg = {windDeg}
    windSpeed = {windSpeed}
    iconWeather = {iconWeather}
 

/>
    </div>
    
)
}
export default APIConfig;