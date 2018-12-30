import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../components/IconButton'
import Spacing from '../components/Spacing'

import * as appActions from '../app/actions'

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  body: {
    maxWidth: 600,
    width: '100%',
    padding: 20,
  },
  paragraph: {
    textAlign: 'justify',
  },
  title: {
    fontWeight: 'bold',
  },
  name: {
    width: '100%',
    textAlign: 'center',
  },
  buttons: {
    display: 'flex',
    '@media (max-width: 500px)': {
      flexDirection: 'column',
    },
  },
  button: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    marginRight: 20,
    '@media (max-width: 500px)': {
      marginRight: 0,
      marginBottom: 20,
    },
    '*:last-child': {
      marginRight: 0,
      '@media (max-width: 500px)': {
        marginBottom: 0,
      },
    },
  },
}

class About extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  componentDidMount = () => this.props.setActivePage('About')

  handleLinkClick = link => {
    const {
      history,
    } = this.props
    history.push(link)
  }

  handleExperienceClick = () => this.handleLinkClick('/experience')

  handleSkillsClick = () => this.handleLinkClick('/skills')

  handleProjectsClick = () => this.handleLinkClick('/projects')

  render() {
    const {
      classes,
    } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.body}>
          <Spacing height={100} />
          <h1 className={classes.name}>Juan J. Alvarez</h1>
          <br />
          <h3 className={classes.title}>Who am I?</h3>
          <p className={classes.paragraph}>I am an ambitious self-taught software engineer currently living in San Francisco, CA. I was born in Puerto Rico although both of my parents are from the Dominican Republic. I started studying Computer Science in the University of Puerto Rico at the Bayamòn campus in 2013 at the age of 16. Due to hurricane Maria I was forced to make the decision of abandoning my degree and the island altogether, althought through hard work and a little bit of luck I was able to walk out of that situation unscathed.</p>
          <br />
          <h3 className={classes.title}>Why did I become a software engineer?</h3>
          <p className={classes.paragraph}>I have always been a person to tinker, as a child it was toys, as a teenager it was video games and as an adult it is software. I have always had an unexplainable drive to understand things and apply my imagination. In my teenage years I started getting into the video game modding scene and ended up learning Java.</p>
          <br />
          <h3 className={classes.title}>What drives me?</h3>
          <p className={classes.paragraph}>I have been very fortunate to receive the many unlikely opportunities that have brought me to where I am. Many people have taken a chance on me, so I am naturally driven to give back by generously opening doors for others in the same way. The best way I have found to satisfy my ambitions and goals is to solve real-world problems. Nothing matters in a test-lab environment, only the real world problems with obscure solutions and unfavourable odds matter.</p>
          <br />
          <h3 className={classes.title}>Where do I see myself in five years?</h3>
          <p className={classes.paragraph}>I take pride in my ambition and desire to be entrepreneurial. In five years from now I expect to have encountered the right opportunities to test and improve my leadership, problem solving and technical skills. I am a non-conforming person so I can only hope for, and work-towards, a future where my ambitions are brought to fruition.</p>
          <Spacing height={50} />
          <div className={classes.buttons}>
            <IconButton onClick={this.handleExperienceClick} className={classes.button} background="#d32f2f" icon="chair-office">Experience</IconButton>
            <IconButton onClick={this.handleSkillsClick} className={classes.button} background="#00e676" icon="book-spells">Skills</IconButton>
            <IconButton onClick={this.handleProjectsClick} className={classes.button} background="#1976d2" icon="laptop-code">Projects</IconButton>
          </div>
          <Spacing height={150} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(appActions, dispatch)

export default connect(null, mapDispatchToProps)(
  injectSheet(styles)(About)
)
