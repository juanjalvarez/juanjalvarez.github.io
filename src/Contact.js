import React from 'react'

import './Contact.css'

export default () => (
  <div className="contact-container">
    <a
      href="mailto:jalvarez5241997@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt=""
        src="images/gmail_logo.png"
        className="contact-img"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/juanjalvarez97/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt=""
        src="images/linkedin_logo.png"
        className="contact-img"
      />
    </a>
    <a
      href="https://twitter.com/juanjalvarez524"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        alt=""
        src="images/twitter_logo.png"
        className="contact-img"
      />
    </a>
  </div>
)
