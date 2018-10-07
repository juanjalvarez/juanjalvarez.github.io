import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Link from '../atoms/Link'
import Icon from '../atoms/Icon'

const styles = {
  container: {
    backgroundColor: props => props.backgroundColor,
    color: props => props.foregroundColor,
    fill: props => props.foregroundColor,
    width: 'fit-content',
    height: 28,
    textDecoration: 'none',
    display: 'flex',
    padding: 5,
    borderRadius: 5,
    '& > *:first-child': {
      marginRight: 5
    },
    name: {
      '&::selection': {
        backgroundColor: 'transparent'
      }
    }
  }
}

const Tag = props => {
  const {
    classes,
    className,
    name,
    icon,
    external,
    link
  } = props
  return (
    <Link
      external={external}
      className={[classes.container, className].join(' ')}
      to={link}
    >
      <Icon name={icon} size={16} />
      <span className={classes.name}>{name}</span>
    </Link>
  )
}

Tag.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  external: PropTypes.bool,
  link: PropTypes.string
}

export default injectSheet(styles)(Tag)
