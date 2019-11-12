import React from 'react'
import { Row, Col } from 'antd'

const workshopTypes = ["Show All", "Coding Skill", "Creative", "Self Improvement", "Startup"]

export default () => {
  return <Row className="featured-workshop">
    <Col>
      <h1>Workshops</h1>
      <Row type="flex" justify="space-around" style={{ paddingTop: 25 }}>
        {
          workshopTypes.map(type => 
            <Col><a className="type">{ type }</a></Col>
          )
        }
      </Row>
    </Col>

  </Row>
}