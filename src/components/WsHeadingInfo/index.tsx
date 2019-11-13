import React from 'react'
import { Row, Col } from 'antd'
import './index.css'

interface WsInfo {
    wsName?: string,
    wsLocation?: string,
}

export default ({
    wsName = "Lorem ipsum dolor consectetur adipiscing",
    wsLocation = "19 Fl, CU Innavation Hub, Chaloem Rajakumari 60 (Chamchuri 10)"
}: WsInfo) => {
    return (
        <Row className="ws-heading-info">
            <Col span={20}>
                <p className="ws-category">CODING SKILLS</p>
                <p className="ws-name">{wsName}</p>
                <p className="ws-location">{wsLocation}</p>
            </Col>
            <Col span={4}>

            </Col>
        </Row>
    )
}