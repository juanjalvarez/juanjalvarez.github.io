import React from 'react'
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
    alignItems: 'center'
  }),
  image: {
    width: '100%'
  }
}

const CircularImage = ({
  classes,
  className,
  src
}) => (
  <div className={[classes.container, className].join(' ')}>
    <img className={classes.image} src={src} alt="" />
  </div>
)

export default injectSheet(styles)(CircularImage)
