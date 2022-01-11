import React from 'react'
import '../style/Single.css'
function Single_card(props) {
  return (
    <div className='single'>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Weather in {props.city} </h5>
          <div> <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" className="icon" /></div>
          <div className='desc'></div>
          <div className='Humidity'>Humidity:- {props.humidity}%</div>
          <div className='temp'>Temperature:- {props.temp}°C</div>
          <div className='wind'>Wind Speed :-{props.wind}km/h</div>
        </div>
      </div>
      <div className='chart'>
      </div>
    </div>
  )
}

export default Single_card;
