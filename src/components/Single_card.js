import React from 'react'
import '../style/Single.css'
function Single_card(props) {
//   let lat=props.lat;
//   let lon=props.lon;
//   async function ChartIt(lat, lon) {
//     const d = await getHumidityData(lat, lon);
//     console.log("in chart it");
//     const ctx = document.getElementById('chart').getContext('2d');
//     const myChart = new Chart(ctx, {
//         type: "line",
//         data: {
//             labels: d.xlabels,
//             datasets: [{
//                 label: 'Humidity',
//                 data: d.ylabels,
//                 backgroundColor: 'rgba(24, 24, 27, 0.8)',
//                 borderColor: 'white',
//                 borderWidth: 1
//             }]
//         }
//     });
// }
    return (
        <div>
            <div className="card" >
  <div className="card-body">
    <h5 className="card-title">Weather in {props.city} </h5>
    <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" className="icon" />
    <div className='desc'></div>
    <div className='Humidity'>Humidity:-{props.humidity}</div>
    <div className='temp'>Temperature:-{props.temp}</div>
    <div className='wind'>Wind Speed:-{props.wind}</div>
  </div>
</div>
<div className='chart'></div>
        </div>
    )
}

export default Single_card;
