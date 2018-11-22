import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

const styles = {
  container: props => ({
    filter: props.isBlurred ? 'blur(4px)' : 'none',
    transitionDuration: '0.1s'
  })
}

const Blur = ({
  classes,
  className,
  children
}) => (
  <div className={[classes.container, className].join(' ')}>
    {children}
  </div>
)

Blur.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.any.isRequired
}

const mapStateToProps = state => ({
  isBlurred: state.app.isBlurred
})

export default connect(mapStateToProps)(
  injectSheet(styles)(Blur)
)
