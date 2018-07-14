import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Icon from '../../components/atoms/Icon'
import ProfilePicture from '../atoms/ProfilePicture'
import NavItem from '../atoms/NavItem'

const styles = {
  container: {
    position: 'fixed',
    top: 30,
    right: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 30,
    paddingLeft: 50,
    paddingRight: 50,
    boxShadow: '0px 4px 30px rgba(0, 0, 0,25%)',
    borderRadius: 20,
    zIndex: 10,
    '@media (max-width: 500px)': {
      top: 0,
      right: 0,
      width: '100%',
      height: '100%'
    }
  },
  photo: {
    marginBottom: 50,
    cursor: 'pointer'
  },
  navItem: {
    marginBottom: 30,
    '&:last-child': {
      marginBottom: 0
    }
  },
  options: {
    cursor: 'pointer',
    '&:hover': {
      animation: 'infinite-rotate 4s infinite',
      animationTimingFunction: 'linear'
    }
  },
  '@keyframes infinite-rotate': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
}

const OpenSidebar = props => {
  const {
    classes,
    className,
    onToggleSidebar
  } = props
  return (
    <div className={[classes.container, className].join(' ')}>
      <ProfilePicture className={classes.photo} onClick={onToggleSidebar} />
      <NavItem className={classes.navItem}>About</NavItem>
      <NavItem className={classes.navItem}>Experience</NavItem>
      <NavItem className={classes.navItem}>Skills</NavItem>
      <NavItem className={classes.navItem}>Contact</NavItem>
      <Icon className={classes.options} name="cog" />
    </div>
  )
}

OpenSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onToggleSidebar: PropTypes.func
}

export default injectSheet(styles)(OpenSidebar)
