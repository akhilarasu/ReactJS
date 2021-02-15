import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import PageNotFound from '../pages/PageNotFound'
import DetailPostPage from '../pages/DetailPostPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/detailPostPage" component={DetailPostPage} />

            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
