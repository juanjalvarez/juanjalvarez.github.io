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
        In the Winter of 2016 I needed to develop an application that uses sockets to communicate for my networking class and I decided to take the opportunity to learn JavaScript, Node.js and Socket.io to complete the project.
      </Project>
      <Project
        name="CanopyRouter"
        tags={[
          tags.GoLang
        ]}
      >
        CanopyRouter is a URL router for Go, and it serves that specific purpose unlike gorilla mux. It was my first golang project, I started and finished it in my spare time while on a cruise (without internet for documentation, I was almost guessing how to do things). I have no intention of continuing this project since it was mostly a learning experience and there are already many vastly superiod completed alternatives.
      </Project>
      <Project
        name="HashTagRunner"
        tags={[
          tags.Java,
          tags.Slick2D
        ]}
      >
        For HackPR 2015 me and 3 colleagues decided to develop a 2D flappy bird clone where the twitter bird would have to dodge hashtags (that were fetched from a list of trending hashtags), and if the twitter bird hit a hashtag your browser would open pointing to a list of tweets that used that hashtag. It was developed in less than 24 hours using Java and the deprecated Slick2D library.
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
        Make-A-Meal is a big project that I working on that I'm very passionate about. I’ve had the idea for a while but never really cared about it until I used it for my business administration class as an example and learned about it’s real world potential. The goal of the project is to be the middleman between the customer and the restaurant, with many lucrative features and utilities involved.
      </Project>
      <Project
        name="ReBalance"
        tags={[
          tags.GoLang
        ]}
        isPrivate
      >
        ReBalance is a work-in-progress unRAID OS plugin for balancing data across storage devices. This is my solution to adding new drives to a data pool that already has data, it automatically balances the data across all of the drives, giving unRAID storage pools the benefit of potential higher read/write speeds.
      </Project>
    </div>
    <Spacer />
  </div>
)
