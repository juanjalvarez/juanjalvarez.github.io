import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

import Icon from '../components/Icon'
import ProfilePicture from './ProfilePicture'
import NavItem from './NavItem'

import data from '../data.json'

const styles = {
  container: {
    backgroundColor: 'white',
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
    maxHeight: '100%',
    overflowY: 'scroll',
    '@media (max-width: 500px)': {
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
    },
  },
  photo: {
    marginBottom: 50,
    cursor: 'pointer',
    transitionDuration: '0.1s',
    '&:hover': {
      transform: 'scale(1.1)',
      transitionDuration: '0.1s',
    },
  },
  navItem: {
    marginBottom: 30,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  options: {
    minWidth: 50,
    minHeight: 50,
    cursor: 'pointer',
    '&:hover': {
      animation: 'infinite-rotate 4s infinite',
      animationTimingFunction: 'linear',
    },
  },
  navIcons: {
    marginBottom: 30,
  },
  navIconRow: {
    display: 'flex',
    marginBottom: 15,
    '&:last-child': {
      marginBottom: 0,
    },
  },
  navIconLink: {
    marginRight: 15,
    width: 50,
    height: 50,
    transitionDuration: '0.1s',
    '&:hover': {
      transform: 'scale(1.2)',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  activePage: {
    textDecoration: 'underline',
  },
  '@keyframes infinite-rotate': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
}

class OpenNav extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    onToggleSidebar: PropTypes.func,
    activePage: PropTypes.string,
  }

  render = () => {
    const {
      classes,
      className,
      onToggleSidebar,
      activePage,
    } = this.props
    return (
      <div className={[classes.container, className].join(' ')}>
        <ProfilePicture className={classes.photo} onClick={onToggleSidebar} />
        <NavItem
          className={[classes.navItem, activePage === 'About' ? classes.activePage : null].join(' ')}
          to="/about"
        >
          About
        </NavItem>
        <NavItem
          className={[classes.navItem, activePage === 'Experiences' ? classes.activePage : null].join(' ')}
          to="/experience"
        >
          Experience
        </NavItem>
        <NavItem
          className={[classes.navItem, activePage === 'Skills' ? classes.activePage : null].join(' ')}
          to="/skills"
        >
          Skills
        </NavItem>
        <NavItem
          className={[classes.navItem, activePage === 'Projects' ? classes.activePage : null].join(' ')}
          to="/projects"
        >
          Projects
        </NavItem>
        <div className={classes.navIcons}>
          <div className={classes.navIconRow}>
            <a
              className={classes.navIconLink}
              target="_blank"
              rel="noopener noreferrer"
              href={data.links.linkedin}
            >
              <Icon name="linkedin" size={50} />
            </a>
            <a
              className={classes.navIconLink}
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${data.links.email}`}
            >
              <Icon name="envelope-o" size={50} />
            </a>
          </div>
          <div className={classes.navIconRow}>
            <a
              className={classes.navIconLink}
              target="_blank"
              rel="noopener noreferrer"
              href={data.links.github}
            >
              <Icon name="github" size={50} />
            </a>
            <a
              className={classes.navIconLink}
              target="_blank"
              rel="noopener noreferrer"
              href={data.links.gitlab}
            >
              <Icon name="gitlab" size={50} />
            </a>
          </div>
        </div>
        {/* <Icon className={classes.options} name="cog" size={50} /> */}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activePage: state.app.activePage
})

export default connect(mapStateToProps)(
  injectSheet(styles)(OpenNav)
)
