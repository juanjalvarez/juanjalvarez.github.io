import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Blur from '../components/Blur'
import Nav from '../sidebar/Nav'

const Projects = lazy(() => import('../projects/Projects'))
const Experiences = lazy(() => import('../experience/Experiences'))
const Skills = lazy(() => import('../skills/Skills'))
const About = lazy(() => import('../about/About'))

const styles = theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  },
  children: {
    animation: props => props.shouldRenderInitialAnimation ? 'fadein-quick 3s forwards' : '',
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
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/about" />} />
          <Route path="/projects" component={Projects} />
          <Route path="/experience" component={Experiences} />
          <Route path="/skills" component={Skills} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Blur>
  </div>
)

Layout.propTypes = {
  children: PropTypes.element,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  shouldRenderInitialAnimation: state.app.shouldRenderInitialAnimation
})

export default connect(mapStateToProps)(
  injectSheet(styles)(Layout)
)
