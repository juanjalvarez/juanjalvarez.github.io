import React from 'react'

import Project from './components/Project'
import Spacer from './components/Spacer'

import * as tags from './components/Tags'

import './Projects.css'

export default () => (
  <div className="projects-container">
    <a
      className="projects-github"
      href="https://github.com/juanjalvarez/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt=""
        src="images/github_logo.png"
        className="projects-github-img"
      />
      <span className="projects-github-text">GitHub</span>
    </a>
    <div className="projects-list">
      <Project
        name="PuertoRicoOnline"
        tags={[
          tags.NodeJS,
          tags.ExpressJS,
          tags.Bootstrap
        ]}
      >
        PuertoRicoOnline is actually the reason I first started learning JavaScript. In the Winter of 2016 I needed to develop an application that uses sockets to communicate for my data communications class and I decided to take the opportunity to learn JavaScript, Node.js and Socket.io to complete the project as I had already used regular Java sockets before. This project was written at a very early stage of my development career and is a complete disaster, you have been warned…
      </Project>
      <Project
        name="CanopyRouter"
        tags={[
          tags.GoLang
        ]}
      >
        CanopyRouter is a web server router for Go, it serves a simpler purpose than gorilla mux. It my first golang project, I started and finished it in my spare time while on a cruise vacation soon after learning Go. I have no intention of continuing this project since it was mostly a learning experience and there are already tonnes of very good solutions to request routing for Go.
      </Project>
      <Project
        name="HashTagRunner"
        tags={[
          tags.Java,
          tags.Slick2D
        ]}
      >
        For HackPR 2015 me and 3 colleagues decided to develop a 2D flappy bird clone where the twitter bird would have to dodge hashtags (that were fetched from a list of top hashtags), and if the twitter bird hit a hashtag your browser would open poiting to a list of tweets that used that hashtag. It was developed in less than 24 hours using Java and the deprecated Slick2D library.
      </Project>
      <Project
        name="Make-A-Meal"
        tags={[
          tags.NodeJS,
          tags.TypeORM,
          tags.TypeScript,
          tags.GraphQL
        ]}
        isPrivate
      >
        Make-A-Meal is a potential project that I working on. I’ve had the idea for a while but never really cared about it until I used it for my business administration class as an example and learned about it’s potential. Long story short it’s just an app for ordering meals at restaurants by using your mobile device.
      </Project>
      <Project
        name="AnonChat"
        tags={[
          tags.GoLang,
          tags.ReactJS
        ]}
      >
        AnonChat is an authentication-less anonymous messaging platform written in Go and React. AnonChat isn’t meant to go anywhere, it is basically just a playground intended to be over-engineered for learning/experience purposes. With time more features and improvements will be added like photo sharing, docker containers, redux (wasn’t added originally because I didn’t intend on the app becoming larger).
      </Project>
      <Project
        name="ReBalance"
        tags={[
          tags.GoLang
        ]}
        isPrivate
      >
        ReBalance is a work-in-progress unRAID OS plugin for balancing data quantitatively across storage devices. This is my solution to adding new drives to a data pool that already has data, it automatically balances the data across all of the drives.
      </Project>
    </div>
    <Spacer />
  </div>
)
