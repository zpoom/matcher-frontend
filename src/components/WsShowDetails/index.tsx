import React from 'react'
import { Row, Col, Carousel } from 'antd'

import './index.css'

interface WorkshopImage {
    img_url: string,
    alt_txt?: string,
    desc?: string
}

const DefaultWsImg = [
    { img_url: "/placeholder/ws1.jpg" },
    { img_url: "/placeholder/ws2.jpg" },
    { img_url: "/placeholder/ws3.jpg" },
    { img_url: "/placeholder/ws4.jpg" },
]

interface WsInfo {
    wsImg?: WorkshopImage[],
    wsDes?: string
}

export default ({
    wsImg = [],
    wsDes = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software."
}: WsInfo) => {
    wsImg = wsImg.length > 0 ? wsImg : DefaultWsImg
    return (
        <Row className="ws-details">
            <Col span={12}>
                <Carousel autoplay>
                    {
                        wsImg.map((img: any) => (
                            <div>
                                <img src={img.img_url} alt="workshop img" className="ws-img" />
                            </div>
                        ))
                    }
                </Carousel>
            </Col>
            <Col span={12}>
                <p className="ws-des">{wsDes}</p>
            </Col>
        </Row>
    )
}