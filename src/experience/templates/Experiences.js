import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'

import ExperienceSummary from '../molecules/ExperienceSummary'
import ExperienceModal from './ExperienceModal'
import Spacing from '../../components/atoms/Spacing'

import data from '../../data.json'

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
  }
}

const Experiences = props => {
  const {
    classes,
    match
  } = props
  return (
    <div className={classes.container}>
      <Route path={`${match.path}/:experienceId`} component={ExperienceModal} />
      <div className={classes.body}>
        <Spacing with="100%" height="10%" />
        {
          Object.keys(experiences).map(key => {
            const experience = experiences[key]
            return (
              <ExperienceSummary
                key={key}
                id={key}
                {...experience}
              />
            )
          })
        }
      </div>
    </div>
  )
}

Experiences.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object
}

export default injectSheet(styles)(Experiences)
