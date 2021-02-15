import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from '../pages/Home'
import PostForm from '../pages/PostForm'
import PostList from '../pages/PostList'
import PageNotFound from '../pages/PageNotFound'

export default class Routes extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/PostForm" component={PostForm} exact />
                        <Route path="/PostList" component={PostList} exact />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
