import React from 'react'
import '../style/daily.css';


function DailyCard(props) {
  let sunrise = new Date((props.sunrise) * 1000);
  let sunset = new Date((props.sunset) * 1000);
  const Days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  let date = new Date(props.dt);
  return (
    <div className='daily'>
      <div className="card-body">
        <h5 className="card-title day">{Days[props.index]}</h5>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" className="icon" />
        <div className='desc'>{props.desc.toUpperCase()}</div>
        <div className='high-temp'><i className="fas fa-temperature-low"></i> {props.tempMax}°C</div>
        <div className='low-temp'><i className="fas fa-temperature-high"></i> {props.tempMin}°C</div>
        <div className='Humidity'>Humidity:-{props.humidity}%</div>
        <div className='Sunrise'>Sunrise: {sunrise.getHours()}:{sunrise.getMinutes()}:{sunrise.getSeconds()} AM</div>
        <div className='Sunset'>Sunset: {sunset.getHours()}:{sunset.getMinutes()}:{sunset.getSeconds()} PM</div>
      </div>
    </div>
  )
}

export default DailyCard
