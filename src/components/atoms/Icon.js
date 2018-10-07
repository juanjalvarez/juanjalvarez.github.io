import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import ReactSVG from 'react-svg'

const styles = {
  container: {
    width: props => props.size,
    height: props => props.size,
    '&::selection': {
      backgroundColor: 'transparent'
    }
  }
}

const Icon = props => {
  const {
    classes,
    className,
    name,
    size = 50
  } = props
  return (
    <ReactSVG
      className={[classes.container, className].join(' ')}
      src={`/icons/${name}.svg`}
      svgStyle={{
        width: size,
        height: size
      }}
    />
  )
}

Icon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number
}

export default injectSheet(styles)(Icon)
