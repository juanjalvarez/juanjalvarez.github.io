import React, { Component } from 'react'
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

class ExperienceModal extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
  }

  state = {
    markdownSource: '',
    isFetchingMarkdown: false,
  }

  async componentDidMount() {
    const {
      match,
    } = this.props
    const experienceId = match.params.experienceId
    this.setState({
      isFetchingMarkdown: true,
    })
    const response = await fetch(`/markdown/${experienceId}.md`)
    const source = await response.text()
    let processedSource = ''
    if (!source.startsWith('<!DOCTYPE')) {
      processedSource = source
    }
    this.setState({
      markdownSource: processedSource,
      isFetchingMarkdown: false,
    })
  }

  render() {
    const {
      match,
      classes,
      history,
    } = this.props
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
        onOutsideClick={() => history.push('/experience')}
      >
        <div className={classes.header}>
          <ExperienceSummary {...experience} plain showLink />
        </div>
        <br />
        <h3>Relevant Skills</h3>
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
}

export default injectSheet(styles)(ExperienceModal)
