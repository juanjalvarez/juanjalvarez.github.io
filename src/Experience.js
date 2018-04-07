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
      location="San Francisco, CA"
      img="images/carelinx_logo.png"
    >
      At CareLinx I joined as an intern, but after proving myself through Summar I was taken on as a frontend engineer. I primarily worked with React and Redux, but occasionally I worked with other small libraries. I worked on a range of differenr projects, from purely aesthetic features all the way to payment processing.
    </Job>
    <Job
      name="CEGsoft"
      location="San Juan, PR"
      img="images/cegsoft_logo.png"
      id="cegsoft"
    >
      CEGsoft took me on as an intern in the autum of 2016. I worked primarily with the Microsoft stack on a desktop tax form application. My internship at CEGsoft was my first real job experience and I worked with them for 6 months, at the end I had to leave to focus on my academic life and some personal projects I was occupied with.
    </Job>
    <Job
      name="SouthEastCon"
      location="Charlotte, NC"
      img="images/ieee_logo.png"
    >
      I had a once-in-a-lifetime opportunity to present my previous cybersecurity related research paper at SouthEastCon2017, an IEEE conference, thanks to Dr. Labrador (professor at USF and director of the REU program I had been accepted into). The conference took place in Charlotte North Carolina during the spring of 2017.
    </Job>
    <Job
      name="USF NSF REU"
      location="Tampa, FL"
      img="images/nsf_logo.png"
    >
      In the spring of 2016 I was accepted into my first ever internship experience. I was to conduct NSF-funded research at the University of South Florida during the summer. During this research experience I collaborated with Dr. Florina Almenares (UC3M in Madrid) and Dr. Miguel Labrador (USF in Tampa) to write our research paper titled “An Accurate Way To Cross Reference Users Across Social Networks”, which was later published and presented at an IEEE conference.
    </Job>
    <Spacer />
  </div>
)