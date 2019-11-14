import React from 'react';
import { WsCalendarCard, NavBarWithLogo, WsHeadingInfo, WsShowDetails, WsOwnerInfo, Footer } from '../../components';
import { Row, Col } from 'antd';

import defaultAgendaImg from '../../assets/images/default-agenda.jpg'
import './index.css'

interface WsParam {
    match?: any
}

export default ({ match }: WsParam) => {
    return (
        <Row className="ws-details-page">
            {/* <h1>Workshop ID {match.params.id}</h1> */}
            <NavBarWithLogo />
            <Row className="ws-details-body">
                <Col className="left-col" span={4}>
                    <WsCalendarCard />
                </Col>
                <Col className="right-col" span={20}>
                    <WsHeadingInfo />
                    <WsShowDetails />
                    <img src={defaultAgendaImg} alt="agenda-dummy" className="agenda-dummy" 
                        style={{maxWidth: '80%', margin: '50px 0 80px 0'}}/>
                    <hr style={{marginBottom: '30px', marginRight: '20vw'}}/>
                    <WsOwnerInfo />
                </Col>
            </Row>
            <Footer />
        </Row>
    );
}