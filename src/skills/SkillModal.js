import React from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import moment from 'moment'

import Modal from '../components/Modal'
import CircularImage from '../components/CircularImage'
import Icon from '../components/Icon'
import Tag from '../components/Tag'

import data from '../data.json'

const styles = {
  header: {
    display: 'flex',
    marginBottom: 30,
    alignItems: 'center',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
      '& > *:first-child': {
        marginBottom: 20
      }
    }
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
  info: {
    marginLeft: 20,
    '@media (max-width: 500px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: 0
    }
  },
  company: {
    fontSize: 24,
    display: 'flex'
  },
  externalLink: {
    marginLeft: 10,
    fill: '#a0a0a0',
    cursor: 'pointer',
  },
  position: {
    color: '#404040'
  },
  extrainfo: {
    display: 'flex',
    color: '#a0a0a0',
    fill: '#a0a0a0',
    marginTop: 4,
    marginBottom: 4,
    '& > *:first-child': {
      marginRight: 5
    }
  }
}

const ExperienceModal = props => {
  const {
    match,
    classes
  } = props
  const skillId = match.params.skillId
  const skill = data['skills'][skillId]
  const {
    name,
    start,
    logo,
    link
  } = skill
  const startDate = moment(start, 'M-D-YYYY')
  const monthsDiff = Math.ceil(moment().diff(startDate, 'months', true))
  const years = Math.floor(monthsDiff / 12)
  const months = monthsDiff % 12
  const durationString = `${years > 0 ? `${years}y ` : ''}${months}mo`
  const relatedExperiences = data['experienceSkills']
    .filter(experienceSkill => experienceSkill[1] === skillId)
    .map(experienceSkill => ({
      id: experienceSkill[0],
      ...data['experiences'][experienceSkill[0]]
    })).map(experience => (
      <Tag
        key={experience.id}
        {...experience}
        link={`/experience/${experience.id}`}
      />
    ))
  const relatedProjects = data['projectSkills']
    .filter(projectSkill => projectSkill[1] === skillId)
    .map(projectSkill => ({
      id: projectSkill[0],
      ...data['projects'][projectSkill[0]]
    })).map(project => (
      <Tag
        key={project.id}
        {...project}
        link={`/projects/${project.id}`}
      />
    ))
  return (
    <Modal
      onOutsideClick={() => props.history.push('/skills')}
    >
      <div className={classes.header}>
        <CircularImage src={logo} size={100} />
        <div className={classes.info}>
          <div className={classes.company}>
            {name}
            <a
              className={classes.externalLink}
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => window.open(link)}
            >
              <Icon name="external-link-alt" size={16} />
            </a>
          </div>
          <div className={classes.extrainfo}>
            <Icon name="clock" size={16} /> {durationString}
          </div>
        </div>
      </div>
      {
        skill.description.length > 0 && (
          <div className={classes.description}>
            {skill.description}
          </div>
        )
      }
      <br />
      <h3>Relevant Projects & Experiences</h3>
      <div className={classes.tagContainer}>
        {relatedExperiences}
        {relatedProjects}
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
