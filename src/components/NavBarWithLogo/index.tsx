import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

import './index.css'

export default () => {
    return (
        <Row className="navbar-with-logo" justify="space-around" type="flex">
            <Col className="logo-text" span={14}>
                <Link to='/'>
                    <h5 className="navbar-item-logo">matcher</h5>
                </Link>
            </Col>
            <Col span={3}>
                <Link to='/workshop'>
                    <p className="navbar-item">Workshops</p>
                </Link>
            </Col>
            <Col span={3}>
                <Link to='/create'>
                    <p className="navbar-item">Add new</p>
                </Link>
            </Col>
            <Col span={3}>
                <Link to='/manage'>
                    <p className="navbar-item">Manage</p>
                </Link>
            </Col>
            <Col span={1}>
                <p className="navbar-item">
                    <SearchIcon />
                </p>
            </Col>
        </Row >
    )
}
