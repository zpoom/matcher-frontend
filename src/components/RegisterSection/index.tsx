import React from 'react'
import { Row, Col } from 'antd'
import './index.css'
import { Link } from 'react-router-dom'

export default () => {
  return <Row className="register-section">
    <div className="doit">
      Just
    </div>
    <Col>
      <h1>Register</h1>
      <Row type="flex" justify="space-around" align="middle">
        <Col xs={8}>
          <Row type="flex" justify="center">
            <img src="/participant.png" alt="participant" />
          </Row>
          <h3>for participants</h3>
          <h4>book get e-ticket</h4>
        </Col>
        <Col xs={8}>
          <Row type="flex" justify="center">
            <img src="/owner.png" alt="owner" />
          </Row>
            <Link to='/manage'>
              <h3>for workshop owner</h3>
            </Link>
          <h4>create new workshop</h4>
        </Col>
      </Row>
    </Col>
  </Row>
}