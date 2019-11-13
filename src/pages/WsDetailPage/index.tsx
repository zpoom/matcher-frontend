import React from 'react';
import { WsCalendarCard } from '../../components';
import { Row } from 'antd';

interface WsParam {
    match?: any
}

export default ({ match }: WsParam) => {
    return (
        <Row>
            <h1>Workshop ID {match.params.id}</h1>
            <WsCalendarCard />
        </Row>
    );
}