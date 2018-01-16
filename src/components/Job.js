import React from 'react'

import './Job.css'

export default ({ img, name, location, children, id = '' }) => (
  <div className="job-container">
    <div className="job-header">
      <img
        alt=""
        src={img}
        className="job-img"
        id={id}
      />
      <div className="job-header-text">
        <div className="job-name">{name}</div>
        <div className="job-location">{location}</div>
      </div>
    </div>
    <div className="job-content">{children}</div>
  </div>
)
