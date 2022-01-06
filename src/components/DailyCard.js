import React from 'react'
import '../style/daily.css';


function DailyCard(props) {
  let sunrise = new Date((props.sunrise) * 1000);
  let sunset = new Date((props.sunset) * 1000);
  return (
    <div className='daily'>
      <div className="card-body">
        <h5 className="card-title day"></h5>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" className="icon" />
        <div className='desc'>{props.desc.toUpperCase()}</div>
        <div className='high-temp'><i class="fas fa-temperature-low"></i> {props.tempMax}</div>
        <div className='low-temp'><i class="fas fa-temperature-high"></i>{props.tempMin}</div>
        {/* <div className='geo-coords'>Lat:{props.lat} Long:{props.lon}</div> */}
        <div className='Humidity'>Humidity:-{props.humidity}</div>
        <div className='Sunrise'>Sunrise: {sunrise.getHours()}:{sunrise.getMinutes()}:{sunrise.getSeconds()}</div>
        <div className='Sunset'>Sunset: {sunset.getHours()}:{sunset.getMinutes()}:{sunset.getSeconds()}</div>
      </div>
    </div>
  )
}

export default DailyCard
