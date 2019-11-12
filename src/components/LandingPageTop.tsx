import React, { Fragment } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import NavBar from './NavBar';
import { Row, Col } from 'antd';
import Language from './Language';

export default () => {
    return (
        <Row>
            <head>
                <meta name="viewport" content="width-device-width, initial-scale=1" />
            </head>
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
                <NavBar />
                <Language />
            </Col>

        </Row>
    );
}