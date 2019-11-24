import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col, message } from 'antd'
import { WorkshopCard, NavBarWithLogo } from '../../components'
import './index.css'
import { getAllWorkshops } from '../../api/workshop'
import { withRouter } from 'react-router-dom'

interface ManageWsProps {
  location?: any
}

export default withRouter(({ location }: ManageWsProps) => {
  const [workshops, setWorkshops] = useState<any>([])

  const fetchWorkshops = () => {
    getAllWorkshops().then(workshops => setWorkshops(workshops))
  }

  const handleDelete = () => {
    fetchWorkshops()
    message.success('Deleted Workshop')
  }

  useEffect(() => {
    if (location.state) message.success(location.state.msg)
    fetchWorkshops()
  }, [location.state])

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
                allowEdit
                onDeleted={handleDelete} 
                backgroundImage={workshop.thumbnail ? workshop.thumbnail.img_url : undefined}
              />
            </Col>)
          }
        </Row>
      </Col>
    </Row>
  </Fragment>
})