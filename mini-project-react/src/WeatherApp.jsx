import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp(params) {
   const [weatherInfo,setWeatherInfo] = useState({
      city:"Delhi",
      feelslike : 24.84,
      temp : 25.05,
      tempMin : 25.05,
      tempMax : 25.05,
      humidity: 47,
      weather: "haze"
   });
   let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
   };
    return(
        <div>
          <h1 style={{textAlign:"center"}}>Weather App</h1>  
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>   
        </div>
    )
}