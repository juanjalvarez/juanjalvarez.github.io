import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import CircularImage from '../components/CircularImage'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    color: 'black'
  },
  logo: {
    transitionDuration: '0.2s',
    '&:hover': {
      transform: 'scale(1.25)'
    }
  }
}

const SkillIcon = ({
  classes,
  className,
  name,
  logo
}) => (
  <div className={[classes.container, className].join(' ')}>
    <CircularImage className={classes.logo} shadow src={logo} size={80} />
    <span className={classes.name}>{name}</span>
  </div>
)

SkillIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
}

export default injectSheet(styles)(SkillIcon)
