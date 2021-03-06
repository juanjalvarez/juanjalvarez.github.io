import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import ExperienceSummary from './ExperienceSummary'
import Modal from '../components/Modal'
import Tag from '../components/Tag'

import data from '../data.json'

const styles = {
  header: {
    display: 'flex',
    marginBottom: 30,
    justifyContent: 'center',
  },
  tagContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *:not(:last-child)': {
      marginRight: 5,
    },
    '& > *': {
      marginBottom: 5,
    }
  },
  description: {
    marginBottom: 20,
  },
  relevantSkills: {
    width: '100%',
    textAlign: 'center',
  },
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
    if (!source.toUpperCase().startsWith('<!DOCTYPE')) {
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
        {
          skills.length > 0 && (
            <Fragment>
              <br />
              <h3 className={classes.relevantSkills}>Relevant Skills</h3>
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
            </Fragment>
          )
        }
      </Modal>
    )
  }
}

export default injectSheet(styles)(ExperienceModal)
