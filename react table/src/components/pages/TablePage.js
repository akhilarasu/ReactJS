import React, { Component } from 'react'


export default class table extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false,
      isError: false


    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      return (
        
        <tr>
          <td>{user.postId}</td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.body}</td>
        </tr>
      )
    })
  }

  render() {
    
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (

        <div>

          
          No users.
        </div>
        
      )
  }

}