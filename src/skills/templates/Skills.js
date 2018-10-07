import React from 'react'
import injectSheet from 'react-jss'
import { Link, Route } from 'react-router-dom'

import SkillIcon from '../atoms/SkillIcon'
import Spacing from '../../components/atoms/Spacing'
import SkillModal from './SkillModal'

import data from '../../data.json'

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

const Skills = ({
  classes
}) => {
  const proficientSkills = skills.filter(skill => skill.proficient)
  const otherSkills = skills.filter(skill => !skill.proficient)
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

export default injectSheet(styles)(Skills)
