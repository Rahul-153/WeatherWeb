import React,{useState,useEffect} from 'react'
import './App.css';
import DailyCard from './components/DailyCard';
import Navbar from './components/Navbar';
import Single_card from './components/Single_card';

function App() {
  let parsedData_2;
  const API_key="8b528b99273fc7895a938db1b8590125";
  const [searchVal, setSearchVal] = useState();
  const [hum, setHum] = useState();
  const [temp, settemp] = useState();
  const [icon, setIcon] = useState();
  const [wind, setWind] = useState();
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [i, setI] = useState(0)
  // let hum_=parsedData_2.hourly;
  const updateCard=async (city)=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    const url_2=`https://api.openweathermap.org/data/2.5/onecall?lat=${parsedData.coord.lat}&lon=${parsedData.coord.lon}&exclude=minutely&units=metric&appid=${API_key}`;
    let data_2 = await fetch(url_2);
    parsedData_2 = await data_2.json();
    console.log(parsedData_2.hourly[i]);
    setHum(parsedData_2.hourly[0].humidity);
    settemp(parsedData_2.hourly[0].temp);
    setIcon(parsedData_2.hourly[0].weather[0].icon);
    setWind(parsedData_2.hourly[0].wind_speed);
    setLat(parsedData_2.lat);
    setLon(parsedData_2.lon);
  }
  useEffect(() => {
    setTimeout(() => {
      setHum(parsedData_2.hourly[i].humidity);  
      setI((i)=>i+1);
    },1000)});
  document.body.style.backgroundColor="#8843F2";
  return (
    <div className="App">
    <Navbar searchVal={searchVal} setSearchVal={setSearchVal} updateCard={updateCard}/>      
    <Single_card apikey={API_key} humidity={hum} temp={temp} icon={icon} wind={wind} city={searchVal} lat={lat} lon={lon}/>
    {/* {parsedData_2.daily.map((e)=>{
      return <DailyCard/>
    })} */}
    </div>
  );
}

export default App;
