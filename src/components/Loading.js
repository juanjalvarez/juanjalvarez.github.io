import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import ReactSVG from 'react-svg'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    width: props => props.size,
    height: props => props.size,
    animation: 'infinite-rotate 4s infinite',
    '&::selection': {
      backgroundColor: 'transparent',
    },
  },
}

const Loading = props => {
  const {
    classes,
    className,
    size = 50,
  } = props
  return (
    <div className={classes.container}>
      <ReactSVG
        className={[classes.svg, className].join(' ')}
        src="/icons/spinner-third.svg"
        svgStyle={{
          width: size,
          height: size,
        }}
      />
    </div>
  )
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  size: PropTypes.number,
}

export default injectSheet(styles)(Loading)
