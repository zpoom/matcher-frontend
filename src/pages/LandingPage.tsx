import React from 'react';
import { LandingPageTop, FeaturedWorkshops, RegisterSection, Footer } from '../components';
import { Row } from 'antd';
export default () => {
    return (
        <Row>
            <LandingPageTop />
            <FeaturedWorkshops />
            <RegisterSection />
            <Footer />
        </Row>
    );
}