import React from 'react'
import injectSheet from 'react-jss'

const styles = {
  container: props => ({
    boxShadow: props.shadow ? '0px 4px 30px rgba(0, 0, 0,25%)' : '',
    borderRadius: '50%',
    width: props.size,
    height: props.size
  }),
  image: {
    width: '100%'
  }
}

const CircularImage = ({
  classes,
  src
}) => (
  <div className={classes.container}>
    <img className={classes.image} src={src} alt="" />
  </div>
)

export default injectSheet(styles)(CircularImage)
