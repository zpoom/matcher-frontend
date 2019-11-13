import React from 'react'
import { Row, Col } from 'antd'

import './index.css'
import DefaultWsImg from '../../assets/images/default-ws-img.jpg'

interface WsInfo {
    wsImg?: string,
    wsDes?: string
}

export default({
    wsImg = DefaultWsImg,
    wsDes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}) => {
    return(
        <Row className="ws-details">
            <Col span={12}>
                <img src={wsImg} alt="workshop img" className="ws-img"/>
            </Col>
            <Col span={12}>
                <p className="ws-des">{wsDes}</p>
            </Col>
        </Row>
    )
}