import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>

                <Link to="/PostList">
                    <Button variant="btn btn-success" >fetch data</Button>
                </Link>
                <Link to="/PostForm">
                    <Button variant="btn btn-success" >post data</Button>
                </Link>
            </div>
        )
    }
}
