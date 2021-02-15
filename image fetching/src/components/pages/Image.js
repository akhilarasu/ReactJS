import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fetchApi from '../utils/fetchApi';
 
export default class Imagepage extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading:true,
    };
  }
  componentDidMount = async () => {
    let apiValue = await fetchApi();
    this.setState({ loading: false, photos: apiValue.data});
  };
 
  render() {
    const photos = this.state.photos;
    console.log(photos)
 
    return (
      <div>
        <ul>
          {this.state.photos.map((item) => (
               <Link to={{pathname:"/imageDetails", state: {
                id:item.id,
                title:item.title,
                thumbnailUrl: item.thumbnailUrl
              }}}> 
            <li>
              <img src ={item.url} alt="info"/>
            </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}