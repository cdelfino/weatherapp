import React from 'react';
import './Forecast.css'
import { useState } from 'react'
import axios from 'axios';
import { DateTime } from "luxon";


const Forecast = () => {
    const [data, setData] = useState(0)
    const [location, setLocation] = useState('')
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=d654af2866312ac83ed52033b8bbd0a9`
  
    const searchLocation = (event) =>{
            if (event.key === 'Enter'){
      axios.get(url).then((response) => {
      setData(response.data)
      }) 
      setLocation('')
    }
  }
  var day = new Date(data.dt*1000)

  const handleKeyDown = (event) => {
    //ocultar div cuando el usuario presione enter
    if (event.key === 'Enter') {
        document.getElementsByClassName('welcome')[0].style.visibility = 'hidden';
    }
  }

 return(
    <div className='forecast'>
        <div className='welcome'>
            <div className='welcomecontainer'>
            <h1>Smart Weather App <span>©</span></h1>
            <h4>Track weather forecasting around you to enjoy life to the fullest.</h4> 
            <p>By Constanza Delfino</p>
            <div className='imgcontainer'>
            <img src="https://i.ibb.co/3zKG2WD/cloudy-1.png"
            alt="" />
           
            </div> 
            </div>
        </div>
    <div className='barcontainer'>
    <div className='bar'>
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} onKeyDown={handleKeyDown} type="text" placeholder="Search for a city..."/>
        {console.log(location)}
        <div className='myicons'>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className='bi bi-search' viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
        </div>
    
    </div>
    <div className='longbar'>
    </div>
</div>
<div className='container'>
        <div className='glass'>
            <div className='forecast'>
            <h3 className='currentdate'>{day.toDateString()}</h3>
            <h1 className='cityname'>{data.name}</h1>
            {data.weather ? <h3 className='state'>{data.weather[0].description}</h3>: null}
            <div className='report'>
                <div className='section1'>
                    <div className='forecastcontainer1'>
                    {data.weather ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=""/> : null}
                    
                        {/*chequear si data main esta disponible*/}
                        {data.main ? <h2>{data.main.temp.toFixed()}°C</h2>: null}
                        
                    </div>
                    <div className='forecastcontainer2'>
                        {data.main ? <p>Pressure: <span>{data.main.pressure.toFixed()} hPa</span></p> : null}                        <p className='bars'>|</p>
                        {data.main ? <p>Min Temp: <span>{data.main.temp_min.toFixed()}°C</span></p> : null}
                        <p className='bars'>|</p>
                        {data.main ? <p>Max Temp: <span>{data.main.temp_max.toFixed()}°C</span></p> : null}                    </div>
                </div>
                <div className='section2'>
                    <h2>SPECIFICATIONS</h2>
                    <hr/>
                    <div className='forecastlist'>
                        <div className='listitem'>

                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className='bi bi-thermometer-high' viewBox="0 0 16 16">
                        <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V2.5a.5.5 0 0 1 1 0v8.585a1.5 1.5 0 0 1 1 1.415z"/>
                        <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                        </svg>
                            {data.main ? <p>Real feel: <span>{data.main.feels_like.toFixed()}°C</span></p> : null}
                            </div>

                            <div className='listitem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className='bi bi-moisture' viewBox="0 0 16 16">
                        <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5h-2zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a28.458 28.458 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a28.458 28.458 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001L7 1.5zm0 0-.364-.343L7 1.5zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267z"/>
                        </svg>
                            {data.main ? <p>Humidity: <span>{data.main.humidity.toFixed()}%</span></p> : null}
                            </div>

                            <div className='listitem'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" className='bi bi-wind' viewBox="0 0 16 16">
                        <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
                            </svg>
                            {data.wind ? <p>Wind: <span>{data.wind.speed.toFixed()} km/h</span></p> : null}
                            </div>
                            </div>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    </div>
 )
}

export { Forecast }