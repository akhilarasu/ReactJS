import React, { Component } from 'react'


export default class ImageDetails extends Component {
    render() {
        const {title, thumbnailUrl}=this.props.location.state
        return (
            <div>
               <li>
               {title}
               </li>
               <li>
               <img src={thumbnailUrl} alt="qwertyu"/>
               
               </li>
            </div>
        )
    }
}
