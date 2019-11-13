import React from 'react'
import './WsCalendarCard.css'


interface WsInfo {
    wsName?: string,
    wsLocation?: string,
}

export default ({
    wsName = "Lorem ipsum dolor consectetur adipiscing",
    wsLocation = "19 Fl, CU Innavation Hub, Chaloem Rajakumari 60 (Chamchuri 10)"
}: WsInfo) => {
    return (
        <div className="ws-calendar-card">
            <p className="ws-category">CODING SKILLS</p>
            <p className="ws-name">{wsName}</p>
            <p className="ws-location">{wsLocation}</p>
        </div>
    )
}