import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import './index.css'

export default () => {
    return (
        <Row className="navbar-with-logo" justify="space-around" align="middle" type="flex">
            <Col span={12} offset={2}>
                <Link to='/'>
                    <p className="navbar-item logo-text">matcher</p>
                </Link>
            </Col>
            <Col span={3}>
                <p className="navbar-item">Workshops</p>
            </Col>
            <Col span={3}>
                <p className="navbar-item">Add new</p>
            </Col>
            <Col span={3}>
                <p className="navbar-item">Manage</p>
            </Col>
            <Col span={1}>
                <p className="navbar-item">
                    <SearchIcon />
                </p>
            </Col>
        </Row >
    )
}
