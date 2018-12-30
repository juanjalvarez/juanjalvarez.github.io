import React, { Component } from 'react'
import PropTypes from 'prop-types'
import injectSheet from 'react-jss'

import Spacing from '../components/Spacing'

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
    margin: 20,
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
}

class About extends Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

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
          <Spacing height={150} />
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(About)
