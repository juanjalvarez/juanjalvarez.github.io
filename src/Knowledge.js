import React from 'react'

import KnowledgeSection from './components/KnowledgeSection'
import KnowledgeItem from './components/KnowledgeItem'
import ResponsiveTitle from './components/ResponsiveTitle'
import Spacer from './components/Spacer'

import './Knowledge.css'

export default () => (
  <div className="projects">
    <ResponsiveTitle>Knowledge</ResponsiveTitle>
    <KnowledgeSection>
      <KnowledgeItem title="JavaScript" img="images/js_logo.png">I began my JavaScript journey in august of 2016 and have since been using it for virtually all of my projects in one way or another.</KnowledgeItem>
      <KnowledgeItem title="React" img="images/react_logo.png">I’ve been using react extensively since sprint of 2017 for many personal projects and as well as for work.</KnowledgeItem>
      <KnowledgeItem title="Redux" img="images/redux_logo.png">I learned Redux as a necessity for my job in summer of 2017 and have also used it in multiple personal projects.</KnowledgeItem>
      <KnowledgeItem title="Node.js" img="images/nodejs_logo.png">Node.js was the original reason why I learned JavaScript, I have been mostly using Node.js for the backend of many personal projects.</KnowledgeItem>
      <KnowledgeItem title="Go" img="images/golang_logo.png">I have been toying with Go since early spring of 2017, I have never used it in a professional environment but I hope to some day be able to. It is in my interest to use Go for the backend of my future projects.</KnowledgeItem>
      <KnowledgeItem title="GraphQL" img="images/graphql_logo.png">GraphQL is the future. period. I am very motivated to use this in future projects and I feel like more people should be using this technology.</KnowledgeItem>
    </KnowledgeSection>
    <KnowledgeSection yellow>
      <KnowledgeItem title="React Native" img="images/react_logo.png">I’ve only started learning React Native recently with through Udemy, but combined with my currently knowledge of the typical React-based stack I feel that it would not take me long to be comfortable working on larger projects with React Native.</KnowledgeItem>
      <KnowledgeItem title="MongoDB" img="images/mongodb_logo.png">I have been using MongoDB since the beginning of my JavaScript journey. As of right now it is my go-to NoSQL database choice.</KnowledgeItem>
      <KnowledgeItem title="Docker" img="images/docker_logo.png">I’ve been using docker to deploy services on my home server ever since early 2017. For some of my more projects I've included Dockerfiles due to the obvious benefits of containerization.</KnowledgeItem>
      <KnowledgeItem title="Java" img="images/java_logo.png">Java is the first programming language I learned, it is also the primary programming language used at my university.</KnowledgeItem>
    </KnowledgeSection>
    <Spacer />
  </div>
)
