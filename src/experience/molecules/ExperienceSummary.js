import React from 'react'
import injectSheet from 'react-jss'
import moment from 'moment'
import { Link } from 'react-router-dom'

import Icon from '../../components/atoms/Icon'
import CircularImage from '../../components/atoms/CircularImage'

const styles = {
  container: {
    padding: 30,
    margin: 20,
    boxShadow: '0px 4px 30px rgba(0, 0, 0,25%)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'inherit'
  },
  info: {
    marginLeft: 20
  },
  company: {
    fontSize: 24
  },
  position: {
    color: '#404040'
  },
  extrainfo: {
    display: 'flex',
    color: '#a0a0a0',
    fill: '#a0a0a0',
    marginTop: 4,
    marginBottom: 4,
    '& > *:first-child': {
      marginRight: 5
    }
  }
}

const ExperienceSummary = props => {
  const {
    classes,
    id,
    name,
    position,
    location,
    start,
    end,
    logo
  } = props
  const startDate = moment(start)
  const endDate = end === 'now' ? moment() : moment(end)
  const monthsDiff = Math.ceil(endDate.diff(startDate, 'months', true))
  const years = Math.floor(monthsDiff / 12)
  const months = monthsDiff % 12
  const durationString = `${years > 0 ? `${years}y ` : ''}${months}mo${end === 'now' ? ' - Present' : ''}`
  return (
    <Link to={`/experience/${id}`} className={classes.container}>
      <CircularImage src={logo} size="100px" />
      <div className={classes.info}>
        <div className={classes.company}>{name}</div>
        <div className={classes.position}>{position}</div>
        <div className={classes.extrainfo}>
          <Icon name="map-marker-alt" size={16} /> {location}
        </div>
        <div className={classes.extrainfo}>
          <Icon name="calendar-alt" size={16} /> {durationString}
        </div>
      </div>
    </Link>
  )
}

export default injectSheet(styles)(ExperienceSummary)
