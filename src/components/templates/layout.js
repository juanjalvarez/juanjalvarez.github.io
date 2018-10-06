import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Switch, Route } from 'react-router-dom'

import Experiences from '../../experience/templates/Experiences'
import Projects from '../../projects/Projects'

import Blur from '../organisms/Blur'
import Nav from '../../sidebar/organisms/Nav'

const styles = theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  },
  children: {
    animation: 'fadein 3s forwards',
    height: '100%'
  },
  '@keyframes fadein': {
    '0%': {
      opacity: 0
    },
    '75%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  }
})

const Layout = ({
  classes
}) => (
  <div className={classes.container}>
    <Nav />
    <Blur className={classes.children}>
      <Switch>
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experiences} />
      </Switch>
    </Blur>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Layout)
