import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

const styles = {
  container: props => ({
    boxShadow: props.shadow ? '0px 4px 30px rgba(0, 0, 0,25%)' : '',
    borderRadius: '50%',
    width: props.size,
    height: props.size,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }),
  image: props => ({
    width: '100%',
    transform: `scale(${props.scale || 1})`,
  })
}

const CircularImage = ({
  classes,
  className,
  src,
}) => (
  <div className={[classes.container, className].join(' ')}>
    <img className={classes.image} src={src} alt="" />
  </div>
)

CircularImage.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  src: PropTypes.string,
  scale: PropTypes.number,
}

export default injectSheet(styles)(CircularImage)
