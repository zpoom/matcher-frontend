import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { WorkshopCard, NavBarWithLogo } from '../../components'
import './index.css'
import { getAllWorkshops } from '../../api/workshop'

export default () => {
  const [workshops, setWorkshops] = useState<any>([])

  const fetchWorkshops = () => {
    getAllWorkshops().then(workshops => setWorkshops(workshops))
  }

  useEffect(fetchWorkshops, [])

  return <Fragment>
    <NavBarWithLogo />
    <Row type="flex" justify="space-around" className="container">
      <Col xs={24}>
        <h1>Manage Workshop</h1>
        <Row type="flex" justify="space-around" style={{ marginBottom: 30 }}>
          {
            workshops.map((workshop: any) => <Col style={{ marginTop: 47 }}>
              <WorkshopCard 
                id={workshop.id} 
                title={workshop.name} 
                ownerName={workshop.owner_name}
              />
            </Col>)
          }
        </Row>
      </Col>
    </Row>
  </Fragment>
}