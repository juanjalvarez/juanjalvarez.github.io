import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import moment from 'moment'

import Icon from '../components/Icon'
import CircularImage from '../components/CircularImage'

const styles = {
  container: {
    padding: 30,
    margin: 20,
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

const ProjectSummary = props => {
  const {
    classes,
    className,
    name,
    start,
    logo,
    link,
    showLink
  } = props
  const startDate = moment(start, 'M-D-YYYY')
  const startString = startDate.format('MMM Do, YYYY')
  return (
    <div className={[classes.container, className].join(' ')}>
      <CircularImage src={logo} size={100} />
      <div className={classes.info}>
        <div className={classes.company}>
          {name}
          {
            (showLink && link) && (
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
        <div className={classes.extrainfo}>
          <Icon name="calendar-alt" size={14} /> {startString}
        </div>
      </div>
    </div>
  )
}

ProjectSummary.propTypes ={
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  start: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  showLink: PropTypes.bool
}

export default injectSheet(styles)(ProjectSummary)
