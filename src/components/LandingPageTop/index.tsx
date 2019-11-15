import React, { Fragment } from 'react';
import { NavBar, Language } from '..';
import { Row, Col } from 'antd';
import './index.css'

export default () => {
    return (
        <Fragment>
            <NavBar />
            <Row className="landing-page-top">
                <Col className="leftside-home" span={12}>
                    <div className="headline">
                        <h1>
                            matcher
                    </h1>
                    </div>
                    <div className="sub-headline">
                        <h3>
                            workshop marketplace for
                    <br />
                            university student
                    </h3>
                    </div>
                </Col>
                <Col className="rightside-home" span={12}>
                    <div className="rightside-home-bg">
                    </div>
                    <Language />
                </Col>
            </Row>
        </Fragment>
    );
}