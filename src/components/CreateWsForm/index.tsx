import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import {
  MuiPickersUtilsProvider,
  DateTimePicker
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import "./index.css"
import { Row, Col, message } from 'antd'
import Button from '@material-ui/core/Button'
import { Uploader } from '..'

interface WorkshopDetail {
  name: string,
  place: string,
  desc: string,
  publish_time: Date,
  deadline_time: Date,
  start_time: Date,
  end_time: Date,
  max_cap: number,
  cost: number,
  images: string[]
}

interface FormProps {
  init?: WorkshopDetail,
  onSubmit?: any
}

const initDetail: WorkshopDetail = {
  name: '',
  place: '',
  desc: '',
  publish_time: new Date(),
  deadline_time: new Date(),
  start_time: new Date(),
  end_time: new Date(),
  max_cap: 0,
  cost: 0,
  images: []
}

export default ({ init = initDetail, onSubmit = () => { } }: FormProps) => {
  const [value, setValue] = useState<WorkshopDetail>(init)

  const handleChange = (key: string) => (newVal: any) => {
    if (key === 'max_cap' || key === 'cost') {
      setValue({ ...value, [key]: Math.max(0, newVal.target.value) })
    } else if (newVal.hasOwnProperty('target')) {
      setValue({ ...value, [key]: newVal.target.value })
    } else {
      setValue({ ...value, [key]: newVal })
    }
  }

  const validateDate = () => {
      if (value.deadline_time.getTime() <= value.publish_time.getTime()){
        message.error('Deadline time must be later than Publish time')
        return false
      }
      else if (value.start_time.getTime() <= value.deadline_time.getTime()){
        message.error('Start time must be later than Deadline time')
        return false
      }
      else if (value.end_time.getTime() <= value.start_time.getTime()){
        message.error('End time must be later than Start time')
        return false
      }
      return true
  }

  const handleSubmit = async () => {
    try {
      onSubmit(value)
    } catch(err) {
      message.error('Cannot create workshop. Please try again.')
    }
  }

  useEffect(() => {
    setValue(init)
  }, [init])

  return <Row type="flex" justify="center" className="container">
    <Col xs={12}>
      <h1>Create New Workshop</h1>
      <form>
        <Row className="section">
          <TextField fullWidth label="Workshop Name" value={value.name} onChange={handleChange('name')} />
        </Row>
        <Row className="section">
          <TextField fullWidth label="Workshop place" value={value.place} onChange={handleChange('place')} />
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
            value={value.desc}
            onChange={handleChange('desc')}
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
                value={value.publish_time}
                onChange={handleChange('publish_time')}
                fullWidth
                disablePast
              />
            </Col>
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="Deadline Date"
                value={value.deadline_time}
                onChange={handleChange('deadline_time')}
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
                value={value.start_time}
                onChange={handleChange('start_time')}
                fullWidth
                disablePast
              />
            </Col>
            <Col xs={11}>
              <DateTimePicker
                margin="normal"
                label="End Date"
                value={value.end_time}
                onChange={handleChange('end_time')}
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
              value={value.max_cap}
              onChange={handleChange('max_cap')}
              fullWidth
            />
          </Col>
          <Col xs={11}>
            <TextField
              label="cost (Baht)"
              type="number"
              margin="normal"
              value={value.cost}
              onChange={handleChange('cost')}
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