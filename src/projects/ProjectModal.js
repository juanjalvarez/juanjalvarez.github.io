import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import Markdown from 'react-markdown'

import ProjectSummary from './ProjectSummary'
import Modal from '../components/Modal'
import Tag from '../components/Tag'
import IconButton from '../components/IconButton'

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
    justifyContent: 'center',
    '& > *': {
      marginRight: 5,
      '&:last-child': {
        marginRight: 0
      }
    }
  },
  relevantSkills: {
    width: '100%',
    textAlign: 'center',
  }
}

class ProjectModal extends Component {

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
    const projectId = match.params.projectId
    this.setState({
      isFetchingMarkdown: true,
    })
    const response = await fetch(`/markdown/${projectId}.md`)
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
    const {
      isFetchingMarkdown,
      markdownSource,
    } = this.state
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
        onOutsideClick={() => history.push('/projects')}
      >
        <div className={classes.header}>
          <ProjectSummary {...project} plain showLink />
        </div>
        {
          (project.gitLink || project.link) && (
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
          )
        }
        {
          (!isFetchingMarkdown && markdownSource && markdownSource.length > 0) && (
            <Markdown source={markdownSource} />
          )
        }
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

export default injectSheet(styles)(ProjectModal)
