import React from 'react'
import '../style/Single.css'
function Single_card(props) {
  return (
    <div className='single'>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title">Weather in {props.city} </h5>
          <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" className="icon" />
          <div className='desc'></div>
          <div className='Humidity'><i class="fas fa-tint"></i> {props.humidity}</div>
          <div className='temp'><i class="fas fa-thermometer-full"></i> {props.temp}</div>
          <div className='wind'> <i class="fas fa-wind"></i> {props.wind}km/h</div>
        </div>
      </div>
      <div className='chart'>
      </div>
    </div>
  )
}

export default Single_card;
