import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/image">
                    <Button variant="primary" >Go to image</Button>
                </Link>
            </div>
        )
    }
}
