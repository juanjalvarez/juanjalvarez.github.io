import React from 'react'
import injectSheet from 'react-jss'

import CircularImage from '../../components/atoms/CircularImage'

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

export default injectSheet(styles)(SkillIcon)
