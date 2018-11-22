import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Link, Route } from 'react-router-dom'

import ExperienceSummary from './ExperienceSummary'
import ExperienceModal from './ExperienceModal'
import Spacing from '../components/Spacing'

import data from '../data.json'

const experiences = data['experiences']

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
  experienceLink: {
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

const Experiences = props => {
  const {
    classes
  } = props
  return (
    <div className={classes.container}>
      <Route path="/experience/:experienceId" component={ExperienceModal} />
      <div className={classes.body}>
        <Spacing with="100%" height="10%" />
        {
          Object.keys(experiences).map(key => {
            const experience = experiences[key]
            return (
              <Link className={classes.experienceLink} key={key} to={`/experience/${key}`}>
                <ExperienceSummary
                  className={classes.summary}
                  id={key}
                  {...experience}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

Experiences.propTypes = {
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(Experiences)
