import React, { useState, useEffect } from 'react'
import './App.css';
import DailyCard from './components/DailyCard';
import Navbar from './components/Navbar';
import Single_card from './components/Single_card';
import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  const API_key = "8b528b99273fc7895a938db1b8590125";
  const [searchVal, setSearchVal] = useState('denver');
  const [hum, setHum] = useState();
  const [temp, settemp] = useState();
  const [icon, setIcon] = useState();
  const [wind, setWind] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [data_2, setData_2] = useState({ daily: [] });
  useEffect(() => {
    updateCard('denver')
  }, []);
  const updateCard = async (city) => {
    console.log("dfsdfsdfsd");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    const url_2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${parsedData.coord.lat}&lon=${parsedData.coord.lon}&exclude=minutely&units=metric&appid=${API_key}`;
    fetch(url_2).then((res) => res.json()).then((res) => {
      setData_2(res);
      console.log(res);
      setHum(res.hourly[0].humidity);
      settemp(res.hourly[0].temp);
      setIcon(res.hourly[0].weather[0].icon);
      setWind(res.hourly[0].wind_speed);
      setLat(res.lat);
      setLon(res.lon);
    })
  }
  return (
    <div className="App">
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} updateCard={updateCard} />
      <Switch>
        <Route exact path="/">
          <Single_card apikey={API_key} humidity={hum} temp={temp} icon={icon} wind={wind} city={searchVal} lat={lat} lon={lon} />
        </Route>
        <Route exact path="/daily">
          <div className='daily-for'>
            {data_2.daily.map((e, index) => {
              if (index !== 0)
                return <DailyCard apikey={API_key} humidity={e.humidity} tempMin={e.temp.min} tempMax={e.temp.max} icon={e.weather[0].icon} wind={e.wind_speed} lat={lat} lon={lon} sunrise={e.sunrise} sunset={e.sunset} desc={e.weather[0].description} dt={e.dt} key={index} />
            })}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
