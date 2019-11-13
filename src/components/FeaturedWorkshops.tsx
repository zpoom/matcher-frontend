import React from 'react'
import { Row, Col } from 'antd'
import { WorkshopCard } from '.'

const workshopTypes = ["Show All", "Coding Skill", "Creative", "Self Improvement", "Startup"]
const dummyWorkshops = [
  {
    "name": "Intro to Mini Robotics",
    "ownerName": "EIC Chula",
    "backgroundImage": "/placeholder/ws2.jpg"
  },
  {
    "name": "Online Marketing Workshop",
    "ownerName": "CBA",
    "backgroundImage": "/placeholder/ws3.jpg"
  },
  {
    "name": "Start It Now!",
    "ownerName": "CU Tech Startup",
    "backgroundImage": "/placeholder/ws1.jpg"
  },
  {
    "name": "Agile Development for Software Engineer",
    "ownerName": "CU Disruptive",
    "backgroundImage": "/placeholder/ws4.jpg"
  }
]

export default () => {
  return <Row className="featured-workshop">
    <div className="doit">
      Do It
    </div>
    <Col>
      <h1>Workshops</h1>
      <Row type="flex" justify="start" style={{ paddingTop: 25 }}>
        <Col xs={24} md={16} lg={10} xl={16}>
          <Row type="flex" justify="space-between">
            {
              workshopTypes.map(type =>
                <Col><a className="type">{type}</a></Col>
              )
            }
          </Row>
        </Col>
      </Row>
      <Row type="flex" justify="space-around">
        {
          dummyWorkshops.slice(0, 4).map(workshop => <Col style={{ marginTop: 47 }}>
            <WorkshopCard 
              title={workshop.name} 
              ownerName={workshop.ownerName} 
              backgroundImage={workshop.backgroundImage}
            />
          </Col>)
        }
      </Row>
      <Row type="flex" justify="end">
        <a className="seemore">see more</a>
      </Row>
    </Col>
  </Row>
}