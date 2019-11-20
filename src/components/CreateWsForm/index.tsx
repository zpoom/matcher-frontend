import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import {
  MuiPickersUtilsProvider,
  DateTimePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import "./index.css"
import { Row, Col } from 'antd'
import Button from '@material-ui/core/Button'
import { Uploader } from '..'

interface WorkshopDetail {
  name: string,
  location: string,
  description: string,
  publishDate: Date,
  deadlineDate: Date,
  startDate: Date,
  endDate: Date,
  maxCap: number,
  price: number,
  images: string[]
}

export default () => {
  const [value, setValue] = useState<WorkshopDetail>({
    name: '',
    location: '',
    description: '',
    publishDate: new Date(),
    deadlineDate: new Date(),
    startDate: new Date(),
    endDate: new Date(),
    maxCap: 0,
    price: 0,
    images: []
  })

  const handleChange = (key: string) => (newVal: any) => {
    console.log(newVal)
    if (key === 'maxCap' || key === 'price') {
      setValue({ ...value, [key]: Math.max(0, newVal.target.value) })
    } else if (newVal.hasOwnProperty('target')) {
      setValue({ ...value, [key]: newVal.target.value })
    } else {
      setValue({ ...value, [key]: newVal })
    }
  }

  const handleSubmit = () => {
    console.log(value)
  }

  return <Row type="flex" justify="center" className="container">
    <Col xs={12}>
      <h1>Create New Workshop</h1>
      <form>
        <Row className="section">
          <TextField fullWidth label="Workshop Name" value={value.name} onChange={handleChange('name')} />
        </Row>
        <Row className="section">
          <TextField fullWidth label="Workshop Location" value={value.location} onChange={handleChange('location')} />
        </Row>
        <Row>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            multiline
            rowsMax="10"
            rows="3"
            margin="normal"
            variant="outlined"
            fullWidth
            value={value.description}
            onChange={handleChange('description')}
          />
        </Row>
        <Row>
          <Uploader onChange={handleChange('images')} />
        </Row>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Row type="flex" justify="space-between">
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="Publish Date"
                value={value.publishDate}
                onChange={handleChange('publishDate')}
                fullWidth
                disablePast
              />
            </Col>
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="Deadline Date"
                value={value.deadlineDate}
                onChange={handleChange('deadlineDate')}
                fullWidth
                disablePast
              />
            </Col>
          </Row>
          <Row type="flex" justify="space-between">
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="Start Date"
                value={value.startDate}
                onChange={handleChange('startDate')}
                fullWidth
                disablePast
              />
            </Col>
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="End Date"
                value={value.endDate}
                onChange={handleChange('endDate')}
                fullWidth
                disablePast
              />
            </Col>
          </Row>
        </MuiPickersUtilsProvider>
        <Row type="flex" justify="space-between">
          <Col xs={11}>
            <TextField
              label="Max Capacity"
              type="number"
              margin="normal"
              value={value.maxCap}
              onChange={handleChange('maxCap')}
              fullWidth
            />
          </Col>
          <Col xs={11}>
            <TextField
              label="Price (Baht)"
              type="number"
              margin="normal"
              value={value.price}
              onChange={handleChange('price')}
              fullWidth
            />
          </Col>
        </Row>
        <Row type="flex" justify="end" className="section">
          <Button variant="contained" size="large" color="primary" onClick={handleSubmit}>Create Workshop</Button>
        </Row>
      </form>
    </Col>
  </Row>
}