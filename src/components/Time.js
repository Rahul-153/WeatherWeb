import React from 'react'
import '../style/Time.css'

function Time() {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return (
        <div class="date-container">
            <div class="time" id="time">
                {hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat}:{minutes < 10 ? '0' + minutes : minutes} <span id="am-pm">{ampm}</span>
            </div>
            <div class="date" id="date">
                {days[day]}, {date} {months[month]}
            </div>
        </div>
    )
}

export default Time;
