import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col } from 'antd'

import './index.css'

export default () => {
    return (
        <Row className="navbar-with-logo" justify="space-around" type="flex">
            <Col className="logo-text" span={14}>
                <h5 className="navbar-item-logo">matcher</h5>
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
