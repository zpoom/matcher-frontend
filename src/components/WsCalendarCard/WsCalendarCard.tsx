import React from 'react'
import './WsCalendarCard.css'


interface DateInfo {
    day?: string,
    date?: string,
    month?: string,
    time?: string
}

export default ({
    day = "MONDAY",
    date = "10",
    month = "OCTOBER 19",
    time = "16.00 - 18.00"
}: DateInfo) => {
    return (
        <div className="ws-calendar-card">
            <p className="ws-day">{day}</p>
            <p className="ws-date">{date}</p>
            <p className="ws-month">{month}</p>
            <p className="ws-time">{time}</p>
        </div>
    )
}