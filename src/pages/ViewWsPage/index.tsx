import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { WorkshopCard, NavBarWithLogo } from '../../components'
import './index.css'
import { getAllWorkshops } from '../../api/workshop'
import TextField from '@material-ui/core/TextField'

export default () => {
  const [workshops, setWorkshops] = useState<any>([])
  const [filter, setFilter] = useState('')

  const fetchWorkshops = (name?: string) => {
    getAllWorkshops(name).then(workshops => setWorkshops(workshops))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    fetchWorkshops(filter)
  }

  useEffect(fetchWorkshops, [])

  return <Fragment>
    <NavBarWithLogo />
    <Row type="flex" justify="space-around" className="container">
      <Col xs={24}>
        <h1>Workshops</h1>
        <Row type="flex">
          <Col xs={12}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Search"
                variant="outlined"
                placeholder="Search..."
                fullWidth
                onChange={e => setFilter(e.target.value)}
              />
            </form>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginBottom: 30 }}>
          {
            workshops
              .map((workshop: any) =>
                <Col style={{ marginTop: 47 }}>
                  <WorkshopCard
                    id={workshop.id}
                    title={workshop.name}
                    ownerName={workshop.owner_name}
                    backgroundImage={workshop.thumbnail ? workshop.thumbnail.img_url : undefined}
                  />
                </Col>)
          }
        </Row>
      </Col>
    </Row>
  </Fragment>
}