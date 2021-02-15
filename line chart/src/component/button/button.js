import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class button extends Component {
  render() {
    return (
      <div>
        <Link to="/Chart">
        <button>Take me to Chart Page</button>
      </Link>
      </div>
    )
  }
}

