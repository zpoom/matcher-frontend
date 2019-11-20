import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import { WorkshopCard, NavBarWithLogo } from '../../components'
import './index.css'

export default () => {
  return <Fragment>
    <NavBarWithLogo />
    <Row type="flex" justify="space-around" className="container">
      <Col xs={24}>
        <h1>Manage Workshop</h1>
        <Row type="flex" justify="space-around">
          <Col style={{ marginTop: 47 }}>
            <WorkshopCard allowDelete />
          </Col>
          <Col style={{ marginTop: 47 }}>
            <WorkshopCard allowDelete />
          </Col>
          <Col style={{ marginTop: 47 }}>
            <WorkshopCard allowDelete />
          </Col>
          <Col style={{ marginTop: 47 }}>
            <WorkshopCard allowDelete />
          </Col>
        </Row>
      </Col>
    </Row>
  </Fragment>
}