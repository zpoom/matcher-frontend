import React, { useEffect, useState } from 'react';
import { WsCalendarCard, NavBarWithLogo, WsHeadingInfo, WsShowDetails, WsOwnerInfo, Footer } from '../../components';
import { Row, Col } from 'antd';
import { getWorkshopById } from '../../api/workshop'
import moment from 'moment'
import defaultAgendaImg from '../../assets/images/default-agenda.jpg'
import './index.css'

interface WsParam {
    match?: any
}

export default ({ match }: WsParam) => {
    const [wsDetail, setWsDetail] = useState<any>({})

    useEffect(() => {
        getWorkshopById(match.params.id).then(detail => {
            setWsDetail(detail)
        })
    }, [match.params.id])

    return (
        <Row className="ws-details-page">
            <NavBarWithLogo />
            <Row className="ws-details-body">
                <Col className="left-col" span={4}>
                    <WsCalendarCard startDate={moment(wsDetail.start_time)} endDate={moment(wsDetail.end_time)} />
                </Col>
                <Col className="right-col" span={20}>
                    <WsHeadingInfo wsName={wsDetail.name} wsLocation={wsDetail.place} />
                    <WsShowDetails wsDes={wsDetail.desc} wsImg={wsDetail.images} />
                    <img src={defaultAgendaImg} alt="agenda-dummy" className="agenda-dummy"
                        style={{ maxWidth: '80%', margin: '50px 0 80px 0' }} />
                    <hr style={{ marginBottom: '30px', marginRight: '20vw' }} />
                    <WsOwnerInfo />
                </Col>
            </Row>
            <Footer />
        </Row>
    );
}