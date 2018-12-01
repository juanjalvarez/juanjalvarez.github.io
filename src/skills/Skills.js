import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SkillIcon from './SkillIcon'
import Spacing from '../components/Spacing'
import SkillModal from './SkillModal'

import * as appActions from '../app/actions'

import data from '../data.json'

const skills = Object.keys(data['skills']).map(skillId => ({
  ...data['skills'][skillId],
  id: skillId
}))

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  body: {
    maxWidth: 800,
    width: '100%',
    margin: 20
  },
  skillSection: {
    marginBottom: 30
  },
  sectionTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  sectionBody: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
      margin: 20
    }
  }
}

class Skills extends PureComponent {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    setActivePage: PropTypes.func.isRequired,
  }

  componentDidMount = () => this.props.setActivePage('Skills')

  render = () => {
    const {
      classes,
    } = this.props
    const proficientSkills = skills.filter(skill => skill.proficiency === 3)
    const familiarSkills = skills.filter(skill => skill.proficiency === 2)
    const otherSkills = skills.filter(skill => skill.proficiency === 1)
    return (
      <div className={classes.container}>
        <Route path="/skills/:skillId" component={SkillModal} />
        <div className={classes.body}>
          <Spacing height="10%" />
          <div className={classes.skillSection}>
            <div className={classes.sectionTitle}>Proficient Skills</div>
            <div className={classes.sectionBody}>
              {
                proficientSkills.map(skill => (
                  <Link key={skill.id} to={`/skills/${skill.id}`}>
                    <SkillIcon {...skill} />
                  </Link>
                ))
              }
            </div>
          </div>
          <div className={classes.skillSection}>
            <div className={classes.sectionTitle}>Familiar Skills</div>
            <div className={classes.sectionBody}>
              {
                familiarSkills.map(skill => (
                  <Link key={skill.id} to={`/skills/${skill.id}`}>
                    <SkillIcon {...skill} />
                  </Link>
                ))
              }
            </div>
          </div>
          <div className={classes.skillSection}>
            <div className={classes.sectionTitle}>Other Skills</div>
            <div className={classes.sectionBody}>
              {
                otherSkills.map(skill => (
                  <Link key={skill.id} to={`/skills/${skill.id}`}>
                    <SkillIcon {...skill} />
                  </Link>
                ))
              }
            </div>
          </div>
          <Spacing height={200} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(null, mapDispatchToProps)(
  injectSheet(styles)(Skills)
)
