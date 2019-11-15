import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col } from 'antd';
import './index.css'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <Row className="navbar-top" justify="space-around" type="flex">
            <Col span={6}>
                <h3 className="navbar-top-item">Workshops</h3>
            </Col>
            <Col span={6}>
                <Link to='/create'>
                    <h3 className="navbar-top-item">Add New</h3>
                </Link>
            </Col>
            <Col span={6}>
                <h3 className="navbar-top-item">Manage</h3>
            </Col>
            <Col span={6}>
                <h3 className="navbar-top-item">
                    <SearchIcon />
                </h3>
            </Col>
        </Row >
    );
}