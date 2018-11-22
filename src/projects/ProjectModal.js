import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ProjectSummary from './ProjectSummary'
import Modal from '../components/Modal'
import Tag from '../components/Tag'
import IconButton from '../components/IconButton'

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
  },
  buttons: {
    display: 'flex',
    marginBottom: 30,
    '& > *': {
      marginRight: 5,
      '&:last-child': {
        marginRight: 0
      }
    }
  }
}

const ProjectModal = props => {
  const {
    match,
    classes
  } = props
  const projectId = match.params.projectId
  const project = data['projects'][projectId]
  const skills = data['projectSkills']
    .filter(projectSkill => projectSkill[0] === projectId)
    .map(projectSkill => ({
      id: projectSkill[1],
      ...data['skills'][projectSkill[1]]
    }))
  return (
    <Modal
      onOutsideClick={() => props.history.push('/projects')}
    >
      <div className={classes.header}>
        <ProjectSummary {...project} plain showLink />
      </div>
      <div className={classes.buttons}>
        {
          project.link && (
            <IconButton icon="external-link-alt" onClick={() => window.open(project.link)}>Visit</IconButton>
          )
        }
        {
          project.gitLink && (
            <IconButton icon="github" onClick={() => window.open(project.gitLink)}>View Code</IconButton>
          )
        }
      </div>
      {
        project.description.length > 0 && (
          <div className={classes.description}>
            {project.description}
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

ProjectModal.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default injectSheet(styles)(ProjectModal)
