import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col } from 'antd';

export default () => {
    return (
        <Row className="navbar-top" justify="space-around" type="flex">
            <Col span={6}>
                <h3 className="navbar-top-item">Workshops</h3>
            </Col>
            <Col span={6}>
                <h3 className="navbar-top-item">Register</h3>
            </Col>
            <Col span={6}>
                <h3 className="navbar-top-item">Sign in</h3>
            </Col>
            <Col span={6}>
                <h3 className="navbar-top-item">
                    <SearchIcon />
                </h3>
            </Col>
        </Row >
    );
}