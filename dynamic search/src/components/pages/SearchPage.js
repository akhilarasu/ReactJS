import React, { Component } from "react";
import {Link} from 'react-router-dom'
import fetchApi from '../utils/fetchApi'

export default class SearchPage extends Component {
  state = {
    searchValue: "",
    apiValue: [],
  };
  componentDidMount = async () => {
    let apiValue = await fetchApi();

    this.setState({ apiValue: apiValue }, () => {
      console.log(apiValue);
    });
  };
  toSearch = (e) => {
    this.setState({ searchValue: e.target.value.toLowerCase().trim() });
  };

  render() {
    let filteredPost = this.state.apiValue.filter((post) => {
      return (
        post.title.indexOf(this.state.searchValue) !== -1 ||
        post.body.indexOf(this.state.searchValue) !== -1
      );
    });

    return (
      <div>
        <input
          
          type="text"
          value={this.state.searchValue}
          placeholder="search"
          onChange={this.toSearch}
        ></input>
        <div>
          {filteredPost.map((post, index) => (
            <ul key={index}>
              <li>
                <div>
                  <Link
                    to={{
                      pathname: "/DetailPostPage",
                      sub: { title: post.title, body: post.body },
                    }}
                  >
                    <div>{post.title}</div>
                  </Link>
                  
                  <div>{post.body}</div>
                  
                  
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}
