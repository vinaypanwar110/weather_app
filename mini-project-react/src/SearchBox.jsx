import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
    let [error,setError] = useState(false);
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEYS = "22d162ef7dd5e9ad9d647838b11b49dd";

    



    let getWeatherInfo = async () => {
        try {
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEYS}&units=metric`);
            let jsonResponse = await response.json();
           // console.log(jsonResponse);
            let result = {
             city:city,
             temp : jsonResponse.main.temp,
             tempMin : jsonResponse.main.temp_min,
             tempMax : jsonResponse.main.temp_max,
             humidity : jsonResponse.main.humidity,
             feelsLike : jsonResponse.main.feels_like,
             weather : jsonResponse.weather[0].description,
            }
     
            console.log(result);
     
            return result;
        } 
        catch (err) {
            throw err;
        }
      
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    }
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
        console.log(city);
        setCity("");
      let newInfo =  await getWeatherInfo();
      updateInfo(newInfo);
        } 
        catch (err) {
            setError(true);
        }
        
    }
    return(
        <div className='SearchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br /><br />
            <Button variant="contained" type='submit'>Submit</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )
}