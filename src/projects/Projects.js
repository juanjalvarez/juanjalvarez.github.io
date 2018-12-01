import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProjectSummary from './ProjectSummary'
import ProjectModal from './ProjectModal'
import Spacing from '../components/Spacing'

import * as appActions from '../app/actions'

import data from '../data.json'

const projects = data['projects']

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  body: {
    maxWidth: 800,
    width: '100%'
  },
  projectLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  summary: {
    transitionDuration: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}

class Projects extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    setActivePage: PropTypes.func.isRequired,
  }

  componentDidMount = () => this.props.setActivePage('Projects')

  render = () => {
    const {
      classes,
    } = this.props
    return (
      <div className={classes.container}>
        <Route path="/projects/:projectId" component={ProjectModal} />
        <div className={classes.body}>
          <Spacing with="100%" height="10%" />
          {
            Object.keys(projects).map(key => {
              const project = projects[key]
              return (
                <Link className={classes.projectLink} key={key} to={`/projects/${key}`}>
                  <ProjectSummary
                    className={classes.summary}
                    id={key}
                    {...project}
                  />
                </Link>
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(null, mapDispatchToProps)(
  injectSheet(styles)(Projects)
)
