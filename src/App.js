//weather Data []
//761c633f9a966e1bc4e9b7c1621f6c35
//https://api.openweathermap.org/data/2.5/weather
import { useState } from "react";
import Backend from "./Backend";
// import "./Backend.css";
import "./App.css";
function App() {
  const [query,setQuery] = useState("")
  const [weather,setWeather] = useState({})
  const update = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const search = async (e) => {
    if (e.code === "Enter") {
      let data = await Backend(query)
      setWeather(data)
    }
  }
  return (
   
  
  <div className="page">
     <div className="heading">
    <h2>Weather Forcasting</h2>
    </div>
    <br/>
    <br/>
     
    <div className="box">
      <input value={query} type="text" placeholder="Enter City Name" onKeyPress={search} onChange={update} />
      </div>
    <div>
      <br/>
      
      {weather.main &&
      
        <div className="Weather_data">
          <div id="city">
            {weather.name}    {weather.sys.country}
          </div >
          <div id="temp">
            {weather.main.temp}<span> &deg;C</span>
          </div>
          <div id="info">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />
            <p>{weather.weather[0].description}</p>
          </div>
          
<br/>

{/* <div id="icon"> <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-square-instagram"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-linkedin"></i>
    </div> */}
          <div>
            Humidity:{weather.main.humidity} SH  <i class="fa-solid fa-droplet"></i>
            
          </div>
<br/>
          <div>
            Pressure:{weather.main.pressure} P <i class="fa-solid fa-temperature-arrow-down"></i><i class="fa-solid fa-droplet-degree"></i>
           
          </div>
<br/>
          <div>
            Wind Speed:{weather.wind.speed} Km/hr  <i class="fa-solid fa-wind"></i>
          </div>
         

        </div>

      }
    </div>
    
  </div>
  
  )
}
export default App;





