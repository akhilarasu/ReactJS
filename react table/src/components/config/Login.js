import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Email: '',
            Password: ''
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            Email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }

    render() {
        return (
            <form>
                <div><h1>Home Page</h1></div>
                <br/>
                <div>
                    <label>Email</label>
                    <input
                    type='text'
                    value={this.state.Email}
                    onChange={this.handleEmailChange}
                    />
                </div>
                <br/>
                <div>
                    <label>Password</label>
                    <input
                    type='password'
                    value={this.state.Password}
                    onChange={this.handlePasswordChange}
                    />
                </div>
                <br/>
                <Link to="/tablePage">
                    <Button variant="btn btn-success" >Submit</Button>
                </Link>
            </form>
        )
    }
}
