import React from 'react'

import './index.css'
import DefaultWsOwnerImg from '../../assets/images/default-ws-owner-img.png'

interface WsInfo {
    wsOwnerImg?: string,
    wsOwnerName?: string
}

export default({
    wsOwnerImg = DefaultWsOwnerImg,
    wsOwnerName = "CU Tech Startup"
}: WsInfo) => {
    return(
        <div className="ws-owner-info">
            <div className="ws-owner-img">
                <img src={wsOwnerImg} alt="workshop img" className="ws-img"/>
            </div>
            <div className="ws-owner-name">
                <p>organized by</p>
                <p>{wsOwnerName}</p>
            </div>
        </div>
    )
}