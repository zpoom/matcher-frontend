import React from 'react'
import './index.css'
import moment, { Moment } from 'moment'

interface DateInfo {
    startDate?: Moment,
    endDate?: Moment
}

const DAY_OF_WEEK = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']
const MONTH = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']

export default ({
    startDate = moment(),
    endDate = moment()
}: DateInfo) => {
    return (
        <div className="ws-calendar-card">
            <p className="ws-day">{DAY_OF_WEEK[startDate.day()]}</p>
            <p className="ws-date">{startDate.date()}</p>
            <p className="ws-month">{MONTH[startDate.month()]} {startDate.format('YY')}</p>
            <p className="ws-time">{startDate.format('HH:mm')} - {endDate.format('HH:mm')}</p>
        </div>
    )
}