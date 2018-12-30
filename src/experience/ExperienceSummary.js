import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import moment from 'moment'

import Icon from '../components/Icon'
import CircularImage from '../components/CircularImage'

const styles = {
  container: {
    padding: 30,
    boxShadow: '0px 4px 30px rgba(0, 0, 0,25%)',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      '& > *:first-child': {
        marginBottom: 20
      }
    }
  },
  plain: {
    margin: 0,
    boxShadow: 'none',
    borderRadius: 0,
    padding: 0
  },
  info: {
    marginLeft: 20,
    '@media (max-width: 500px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 0
    }
  },
  company: {
    fontSize: 24,
    display: 'flex'
  },
  externalLink: {
    marginLeft: 10,
    fill: '#a0a0a0'
  },
  position: {
    color: '#404040',
    fontFamily: 'serif'
  },
  extrainfo: {
    display: 'flex',
    color: '#a0a0a0',
    fill: '#a0a0a0',
    fontSize: 14,
    '& > *:first-child': {
      marginRight: 5
    }
  }
}

const ExperienceSummary = props => {
  const {
    classes,
    className,
    name,
    position,
    location,
    start,
    end,
    logo,
    link,
    plain,
    showLink,
    logoScale,
  } = props
  const startDate = moment(start, 'M-D-YYYY')
  const endDate = end === 'now' ? moment() : moment(end, 'M-D-YYYY')
  const monthsDiff = Math.ceil(endDate.diff(startDate, 'months', true))
  const years = Math.floor(monthsDiff / 12)
  const months = monthsDiff % 12
  const durationString = `${years > 0 ? `${years}y ` : ''}${months}mo`
  const startString = startDate.format('MMM Do, YYYY')
  const endString = end === 'now' ? 'Now' : endDate.format('MMM Do, YYYY')
  return (
    <div className={[classes.container, className, plain ? classes.plain : ''].join(' ')}>
      <CircularImage src={logo} size={100} scale={logoScale} />
      <div className={classes.info}>
        <div className={classes.company}>
          {name}
          {
            showLink && (
              <a
                className={classes.externalLink}
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                onClick={() => window.open(link)}
              >
                <Icon name="external-link-alt" size={16} />
              </a>
            )
          }
        </div>
        <div className={classes.position}>{position}</div>
        <div className={classes.extrainfo}>
          <Icon name="map-marker-alt" size={14} /> {location}
        </div>
        <div className={classes.extrainfo}>
          <Icon name="calendar-alt" size={14} /> {startString} - {endString}
        </div>
        <div className={classes.extrainfo}>
          <Icon name="clock" size={14} /> {durationString}
        </div>
      </div>
    </div>
  )
}

ExperienceSummary.propTypes ={
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  plain: PropTypes.bool,
  link: PropTypes.string,
  showLink: PropTypes.bool,
  className: PropTypes.string,
  logoScale: PropTypes.number,
}

export default injectSheet(styles)(ExperienceSummary)
