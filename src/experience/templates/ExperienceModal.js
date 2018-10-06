import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import moment from 'moment'

import Modal from '../../components/organisms/Modal'
import Icon from '../../components/atoms/Icon'
import CircularImage from '../../components/atoms/CircularImage'

import data from '../../data.json'

const styles = {
  header: {
    display: 'flex',
    marginBottom: 30
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

const ExperienceModal = props => {
  const {
    match,
    classes
  } = props
  const experienceId = match.params.experienceId
  const experience = data['experiences'][experienceId]
  const {
    name,
    logo,
    position,
    location,
    start,
    end,
    description
  } = experience
  const startDate = moment(start)
  const endDate = end === 'now' ? moment() : moment(end)
  const monthsDiff = Math.ceil(endDate.diff(startDate, 'months', true))
  const years = Math.floor(monthsDiff / 12)
  const months = monthsDiff % 12
  const durationString = `${years > 0 ? `${years}y ` : ''}${months}mo`
  const startString = startDate.format('MMM Do, YYYY')
  const endString = end === 'now' ? 'Present' : endDate.format('MMM Do, YYYY')
  return (
    <Modal
      onOutsideClick={() => props.history.push('/experience')}
    >
      <div className={classes.header}>
        <CircularImage src={logo} size="100px" />
        <div className={classes.info}>
          <div className={classes.company}>{name}</div>
          <div className={classes.position}>{position}</div>
          <div className={classes.extrainfo}>
            <Icon name="map-marker-alt" size={16} /> {location}
          </div>
          <div className={classes.extrainfo}>
            <Icon name="calendar-alt" size={16} /> {startString} - {endString}, {durationString}
          </div>
        </div>
      </div>
      <div>
        {description}
      </div>
    </Modal>
  )
}

ExperienceModal.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(ExperienceModal)
