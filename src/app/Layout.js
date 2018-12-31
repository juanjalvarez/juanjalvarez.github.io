import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Blur from '../components/Blur'
import Nav from '../sidebar/Nav'
import Projects from '../projects/Projects'
import Experiences from '../experience/Experiences'
import Skills from '../skills/Skills'
import About from '../about/About'

const styles = theme => ({
  container: {
    backgroundColor: theme.backgroundColor,
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
  },
  children: {
    animation: props => props.shouldRenderInitialAnimation ? 'fadein-quick 3s forwards' : '',
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

class Layout extends Component {

  static propTypes = {
    children: PropTypes.element,
    classes: PropTypes.object.isRequired,
    activePage: PropTypes.string,
  }

  componentDidUpdate = prevProps => {
    console.log(this.props)
    console.log(prevProps)
    if (this.props.activePage !== prevProps.activePage) {
      document.getElementById('layout').scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      })
    }
  }

  render() {
    const {
      classes,
    } = this.props
    return (
      <div id="layout" className={classes.container}>
        <Nav />
        <Blur className={classes.children}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/about" />} />
            <Route path="/projects" component={Projects} />
            <Route path="/experience" component={Experiences} />
            <Route path="/skills" component={Skills} />
            <Route path="/about" component={About} />
          </Switch>
        </Blur>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shouldRenderInitialAnimation: state.app.shouldRenderInitialAnimation,
  activePage: state.app.activePage,
})

export default connect(mapStateToProps)(
  injectSheet(styles)(Layout)
)
