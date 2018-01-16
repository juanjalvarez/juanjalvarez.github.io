import React from 'react'

import Job from './components/Job'
import ResponsiveTitle from './components/ResponsiveTitle'
import Spacer from './components/Spacer'

import './Experience.css'

export default () => (
  <div className="experience-list">
    <ResponsiveTitle>Experience</ResponsiveTitle>
    <Job
      name="CareLinx"
      location="San Fransisco, CA"
      img="images/carelinx_logo.png"
    >
      At CareLinx I was originally taken on as an intern, but after quickly proving myself I was contracted as a frontend engineer. I primarily worked with React and Redux and other smaller libraries. I worked from purely aesthetic components all the way to payment processing components.
    </Job>
    <Job
      name="CEGsoft"
      location="San Juan, PR"
      img="images/cegsoft_logo.png"
      id="cegsoft"
    >
      CEGsoft took me on as an intern in the autum of 2016. I worked primarily with the Microsoft stack on a desktop tax form application. My internship at CEGsoft was my first real job experience and I lasted there for 6 months, at the end I had left to focus on my university and personal projects I was occupied with.
    </Job>
    <Job
      name="SouthEastCon"
      location="Charlotte, NC"
      img="images/ieee_logo.png"
    >
      I had a once-in-a-lifetime opportunity to present my previous cybersecurity related research paper at SouthEastCon2017, an IEEE conference, thanks to Dr. Labrador. The conference took place in Charlotte North Carolina during the spring of 2017.
    </Job>
    <Job
      name="USF NSF REU"
      location="Tampa, FL"
      img="images/nsf_logo.png"
    >
      In the spring of 2016 I was accepted into my first ever internship experience. I was to conduct NSF-funded research at the University of South Florida during the summer. During this research experience I collaborated with Dr. Florina Almenares and Dr. Miguel Labrador to write our research paper titled “An Accurate Way To Cross Reference Users Across Social Networks”, which was later published and presented at an IEEE conference.
    </Job>
    <Spacer />
  </div>
)