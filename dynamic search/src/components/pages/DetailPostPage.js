import React, { Component } from "react";


class DetailPostPage extends Component {
  render() {
    let title = this.props.history.location.sub.title;
    let body = this.props.history.location.sub.body;
    
    return (
      <div>
          <h1>{title}</h1>
            <p>{body}</p>
          
        </div>
        
      
    );
  }
}
export default DetailPostPage;
