import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../config/Login";
import PageNotFound from "../pages/PageNotFound";
import TablePage from "../pages/TablePage";
export default class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/tablePage" component={TablePage} />
          
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}