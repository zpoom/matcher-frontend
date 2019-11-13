import React from 'react';
import { WsCalendarCard, NavBarWithLogo, WsHeadingInfo, WsShowDetails, WsOwnerInfo, Footer } from '../../components';
import { Row, Col } from 'antd';

import defaultAgendaImg from '../../assets/images/default-agenda.jpg'

interface WsParam {
    match?: any
}

export default ({ match }: WsParam) => {
    return (
        <Row>
            {/* <h1>Workshop ID {match.params.id}</h1> */}
            <NavBarWithLogo />
            <Row className="ws-detail">
                <Col className="left-col" span={4}>
                    <WsCalendarCard />
                </Col>
                <Col className="right-col" span={20}>
                    <WsHeadingInfo />
                    <WsShowDetails />
                    <img src={defaultAgendaImg} alt="agenda-dummy" className="agenda-dummy" />
                    <WsOwnerInfo />
                </Col>
            </Row>
            <Footer />
        </Row>
                                );
}