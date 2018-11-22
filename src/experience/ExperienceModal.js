import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ExperienceSummary from './ExperienceSummary'
import Modal from '../components/Modal'
import Tag from '../components/Tag'

import data from '../data.json'

const styles = {
  header: {
    display: 'flex',
    marginBottom: 30
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *:not(:last-child)': {
      marginRight: 5
    },
    '& > *': {
      marginBottom: 5
    }
  },
  description: {
    marginBottom: 20
  }
}

const ExperienceModal = props => {
  const {
    match,
    classes
  } = props
  const experienceId = match.params.experienceId
  const experience = data['experiences'][experienceId]
  const skills = data['experienceSkills']
    .filter(experienceSkill => experienceSkill[0] === experienceId)
    .map(experienceSkill => ({
      id: experienceSkill[1],
      ...data['skills'][experienceSkill[1]]
    }))
  return (
    <Modal
      onOutsideClick={() => props.history.push('/experience')}
    >
      <div className={classes.header}>
        <ExperienceSummary {...experience} plain showLink />
      </div>
      {
        experience.description.length > 0 && (
          <div className={classes.description}>
            {experience.description}
          </div>
        )
      }
      <div className={classes.tagContainer}>
        {
          skills.map(skill => (
            <Tag
              key={skill.id}
              {...skill}
              link={`/skills/${skill.id}`}
            />
          ))
        }
      </div>
    </Modal>
  )
}

ExperienceModal.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(ExperienceModal)
