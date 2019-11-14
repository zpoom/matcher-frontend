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
                <img src={wsOwnerImg} alt="workshop img"/>
            </div>
            <div className="ws-owner-inner">
                <p className="organized-by-txt">organized by</p>
                <p className="ws-owner-name">{wsOwnerName}</p>
            </div>
        </div>
    )
}