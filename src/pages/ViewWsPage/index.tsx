import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { WorkshopCard, NavBarWithLogo } from '../../components'
import './index.css'
import { getAllWorkshops } from '../../api/workshop'
import TextField from '@material-ui/core/TextField'

export default () => {
  const [workshops, setWorkshops] = useState<any>([])
  const [filter, setFilter] = useState('')

  const fetchWorkshops = () => {
    getAllWorkshops().then(workshops => setWorkshops(workshops))
  }

  useEffect(fetchWorkshops, [])

  return <Fragment>
    <NavBarWithLogo />
    <Row type="flex" justify="space-around" className="container">
      <Col xs={24}>
        <h1>Workshops</h1>
        <Row type="flex">
          <Col xs={12}>
            <TextField
              label="Search"
              variant="outlined"
              placeholder="Search..."
              fullWidth
              onChange={e => setFilter(e.target.value.toLowerCase())}
            />
          </Col>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginBottom: 30 }}>
          {
            workshops
              .filter((ws: any) => ws.name.toLowerCase().includes(filter))
              .map((workshop: any) =>
                <Col style={{ marginTop: 47 }}>
                  <WorkshopCard
                    id={workshop.id}
                    title={workshop.name}
                    ownerName={workshop.owner_name}
                    backgroundImage={workshop.thumbnail}
                  />
                </Col>)
          }
        </Row>
      </Col>
    </Row>
  </Fragment>
}