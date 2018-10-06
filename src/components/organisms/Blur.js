import React from 'react'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'

const styles = {
  container: props => ({
    filter: props.isBlurred ? 'blur(4px)' : 'none'
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

const mapStateToProps = state => ({
  isBlurred: state.app.isBlurred
})

export default connect(mapStateToProps)(
  injectSheet(styles)(Blur)
)
