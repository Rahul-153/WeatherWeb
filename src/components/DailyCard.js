import React from 'react'
import '../style/daily.css';

function DailyCard(props) {
    return (
        <div className='daily'>
  <div className="card-body">
    <h5 className="card-title day">dsfsdfd</h5>
    <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" class="icon" />
    <div className='desc'></div>
    <div className='high-temp'></div>
    <div className='low-temp'></div>
    <div className='geo-coords'></div>
    <div className='Humidity'>Humidity:-{props.humidity}</div>
    <div className='Sunrise'></div>
    <div className='Sunset'></div>
  </div>
</div>
    )
}

export default DailyCard
