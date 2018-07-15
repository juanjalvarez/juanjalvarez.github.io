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
  navIcons: {
    marginBottom: 30
  },
  navIconRow: {
    marginBottom: 15,
    '&:last-child': {
      marginBottom: 0
    }
  },
  navIconLink: {
    marginRight: 15,
    '&:last-child': {
      marginRight: 0
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

const OpenNav = props => {
  const {
    classes,
    className,
    onToggleSidebar
  } = props
  return (
    <div className={[classes.container, className].join(' ')}>
      <ProfilePicture className={classes.photo} onClick={onToggleSidebar} />
      <NavItem className={classes.navItem} to="/about">About</NavItem>
      <NavItem className={classes.navItem} to="/experience">Experience</NavItem>
      <NavItem className={classes.navItem} to="/skills">Skills</NavItem>
      <NavItem className={classes.navItem} to="/projects">Projects</NavItem>
      <div className={classes.navIcons}>
        <div className={classes.navIconRow}>
          <a
            className={classes.navIconLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/juanjalvarez97/"
          >
            <Icon name="linkedin-square" />
          </a>
          <a
            className={classes.navIconLink}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:jalvarez5241997@gmail.com"
          >
            <Icon name="envelope-o" />
          </a>
        </div>
        <div className={classes.navIconRow}>
          <a
            className={classes.navIconLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/juanjalvarez"
          >
            <Icon name="github" />
          </a>
          <a
            className={classes.navIconLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://gitlab.com/juanjalvarez"
          >
            <Icon name="gitlab" />
          </a>
        </div>
      </div>
      <Icon className={classes.options} name="cog" />
    </div>
  )
}

OpenNav.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  onToggleSidebar: PropTypes.func
}

export default injectSheet(styles)(OpenNav)
