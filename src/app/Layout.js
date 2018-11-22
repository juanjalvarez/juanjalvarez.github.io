import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Switch, Route } from 'react-router-dom'
import moment from 'moment'
import { connect } from 'react-redux'

import Experiences from '../experience/Experiences'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

import Blur from '../components/Blur'
import Nav from '../sidebar/Nav'

const styles = theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  },
  children: {
    animation: props => props.alreadyAnimatedToday ? '' : 'fadein-quick 3s forwards',
    height: '100%'
  },
  '@keyframes fadein-quick': {
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
        <Route path="/skills" component={Skills} />
      </Switch>
    </Blur>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  alreadyAnimatedToday: state.app.lastAccessed === moment().format('YYYY-MM-DD')
})

export default connect(mapStateToProps)(
  injectSheet(styles)(Layout)
)
