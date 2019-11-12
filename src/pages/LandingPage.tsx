import React from 'react';
import { LandingPageTop, FeaturedWorkshops } from '../components';
import { Row } from 'antd';
export default () => {
    return (
        <Row>
            <LandingPageTop />
            <FeaturedWorkshops />
        </Row>
    );
}