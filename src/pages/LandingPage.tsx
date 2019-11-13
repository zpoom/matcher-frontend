import React from 'react';
import { LandingPageTop, FeaturedWorkshops, RegisterSection } from '../components';
import { Row } from 'antd';
export default () => {
    return (
        <Row>
            <LandingPageTop />
            <FeaturedWorkshops />
            <RegisterSection />
        </Row>
    );
}